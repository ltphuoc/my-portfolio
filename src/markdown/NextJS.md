---
slug: NextJS
title: Learn NextJS
author: Phuoclt
author_title:
author_url:
author_image_url:
image:
tags: [NextJS, tsx]
---

Learn NextJS Page Routes

<!-- truncate-->

## React framework (Optimize SEO, Structure, Default router)

## Support SSR, SSG, CSR
- Pre-Rendering
	- SSR: **Server-Side Rendering**
	- SSG: **Static Site Generation**
- Client-Side Rendering (CLR)
- ISR: Incremental Static Regeneration

- Public pages with no data: SSG
- Public pages with data and can be updated from CMS: ISR
- Private pages: SSG + CSR
- Avoid SSR

![[Pasted image 20230514162148.png]]

![[Pasted image 20230514162159.png]]

## Hydration
- **Giai đoạn 1:** - Browser gửi 1 request lên server muốn load trang Home - Server trả về cho browser một file HTML home đã được render sẵn trên server - Browser tải file HTML về và hiển thị lên liền cho user thấy - Lúc này user chỉ thấy giao diện, chưa tương tác được gì, click này nọ chưa được (chưa có ready cho user interaction)
- **Giai đoạn 2:** - Sau khi file HTML được tải về xong, browser phát hiện cần phải load thêm mấy file javascript này nọ nữa - Thế là đi tải thêm file javascript - Sau khi tải js xong, nó sẽ thực thi. Và một trong những tác vụ đầu tiên trong mớ javascript đó là hydrate - Có thể gọi nôm na hydrate là hợp nhất cái DOM bên client và DOM bên server trả về, nó sẽ cố gắng match 2 cái DOM để attach event listener lên cho đúng elements. - Trường hợp mà 2 cái DOM khác nhau, mn sẽ thấy báo lỗi ở console **Content mismatch ..., xảy ra khi HTML trả về từ server khác với DOM lần đầu tiên render bên phía client. hydration process, hiểu nôm na là quá trình matching DOM bên client với cái HTML trả về từ server để gắn event listener lên đúng element (như click, scroll, ...)

![[Pasted image 20230516025700.png]]

## Route priority
- Pre-defined routes (pages/products/create.tsx)--> Dynamic  routes (pages/products/[productId].tsx) --> Catch all routes (pages/products/[...slug].tsx)

## Auto Static Optimization
- Output an HTML
- Not ASO output an JS (use getServerSideProps)

## Router
## router.query:
- in ASO empty pre-render, update after hydration
- not ASO not empty
```ts
// Check router first render (pre-render) in SSG
const router = useRouter()
  const page = router.query?.page

  useEffect(() => {
    (() => {
      if (!page) return
      console.log('uef page: ', page)
    })()
  }, [page])
```
```ts
// router with param shallow (only update data client, No call server return new html or json)
const handleClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }
```

## SSG
`getStaticProps`
`getStaticPaths`
-   In **development** (`npm run dev` or `yarn dev`), [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) runs on _every request_.
-   In **production**, [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) runs at _build time_.
## SSR
`getServerSideProps`
## Without cache
```ts
export async function getServerSideProps(context) {
  // fake slow query or call api in this
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    props: {},
  }
}
```
## With cache
- Should use with public data for all user
- Clear CDN cache with new deploy
```ts
// Using cache
export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=10')
  // ...
}
```
- 1st request -> call getServerSideProps and cache in CDN
- 0 -10s -> Return from cache
- After 10s -> call getServerSideProps and cache in CDN
## With cache and stale-while-revalidate
```ts
// Using cache with stale-while-revalidate
export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  // ...
}
```
- 1st request -> call getServerSideProps and cache in CDN
- 0 -10s -> Return from cache
- After 10s (swr) -> return from cache (stale) -> call getServerSideProps and cache in CDN
- next -> start new circle
```ts
// Using cache with stale-while-revalidate with time
export async function getServerSideProps(context) {
  context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=100')
  // ...
}
```
 1st request -> call getServerSideProps and cache in CDN
- 0 -10s -> Return from cache
- next 0-10s (swr) -> return from cache (stale) -> call getServerSideProps and cache in CDN
- after 20s (s-maxage + swr) -> start new circle

## ISR
