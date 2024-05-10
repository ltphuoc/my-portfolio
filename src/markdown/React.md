---
slug: reactJS
title: Learn ReactJS
author: Phuoclt
author_title:
author_url:
author_image_url:
image:
tags: [reactJS, tsx]
---

My Learning ReactJS

<!-- truncate-->

Core value
- Simple (combine UI + business logic = JSX) -> help maintain and develop easier
- Component architecture (break UI with small component)
- Abstraction event

### JSX
### Virtual DOM
### ReactJS rendering

1. Executing the function
2. Calculating snapshot (html + js) - preparing data
3. Updating DOM tree with preparing data - React then updates the screen to match the snapshot your function returned.

Update screen in React
1. **Triggering** a render
2. **Rendering** the component
3. **Committing** to the DOM

React does not touch the DOM if the rendering result is the same as last time
#### Trigger

1. It’s the component’s **initial render.**
2. The component’s (or one of its ancestors’) **state has been updated.**

#### Render

- React calling components
- **On initial render,** React will call the root component.
- **For subsequent renders,** React will call the function component whose state update triggered the render.

#### Commit

- **For the initial render,** React will use the [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) DOM API to put all the DOM nodes it has created on screen.
- **For re-renders,** React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

Key when render list
- Key must be unique
- Avoid use index as a key - issues when update list
### Conditional rendering

- Sử dụng if để handle những trường hợp ngoại lệ, return một JSX khác so với còn lại.
- Sử dụng ternary để render 2 giá trị khác nhau dựa vào một điều kiện nào đó.
- Không sử dụng nested ternary
- Trường hợp phần render của ternary phức tạp, nhiều dòng, nên cân nhắc dùng AND operator hoặc tách hẳn ra component / một biến riêng.
- Sử dụng AND operator khi muốn render một cái gì đó khi thỏa điều kiện.
- Chú ý với AND operator, cẩn thận khi điều kiện là số 0 hay NaN. Nên chủ động chuyển nó về boolean

### Component

- component = reusable UI element
- Component should ideally only do one thing ([single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle))
- Same component same position preserve state
#### Controlled and Uncontrolled Components

“controlled” (driven by props) or “uncontrolled” (driven by state).
- Component with some local state "uncontrolled".
- Component is "controlled" when the important information in it is driven by props rather than its own local state
### Pure

### Props

- Properties
- [**Props** are like arguments you pass](https://react.dev/learn/passing-props-to-a-component) to a function.
- Props là dữ liệu được truyền từ component cha xuống component con.
- Props là thuộc tính READ-ONLY, DON'T MUTATE PROPS, component con không thay đổi được. Muốn đổi thì nhờ component cha.
- Props giúp tạo ra sự đa dạng cho component. Cùng một component với props khác nhau thì render ra khác nhau.
- using default value for optional props (typescript)

### State

- [**State** is like a component’s memory.](https://react.dev/learn/state-a-components-memory)
- State được tạo ra và quản lý bởi component hiện tại. (State is isolated and private)
- State được dùng cho những dữ liệu có khả năng sẽ thay đổi.
- Initial state run only one
- Don't mutate state - only using setState to update state,
- **reset a component’s state by passing a different `key` to a component**
- Why use state:
	- When render 2nd+ time, it render from scratch
	- use local variable don't trigger render
	- Use a state variable when a component needs to “remember” some information between renders.

Sharing state between components

- Parent to child: Props - Value
- Child to Parent: Props - Function (Event Handlers)
- Siblings: Lifting State Up

### Life Cycle
### Hooks vs Custom hooks

- function starting with use - can only be called at the top level of components
- Don’t call Hooks inside loops, conditions, or nested functions.
#### useState

- setState is async function - only available while React is rendering - **Setting state only changes it for the _next_ render**
- Don't get the newest state before re-rendering
- Variables and event handlers don’t “survive” re-renders
- useImmer() with nested object, array.

```js
const [state, setState] = useState(initalState)
```

>Preserving and Resting State: https://react.dev/learn/preserving-and-resetting-state

#### useRef

"remember" some information, but don't want trigger new renders
- Store timeout id
- Store and manipulate DOM

### State management
	React Context
	Redux
	Zustand + React Query (SWR)
### Routings
	react-router-dom
	nested routings
	lazy load
	guard routings
	sync filter and state to url (search)
### HOC
### Error Boundary
### Form management:

![[Pasted image 20240503051404.png]]

	react-hook-form
	validation: yup
### API module:
	axios
	react query / swr
### Auth module
	storage
	jwt
	token, refresh token, expired token
### UI library
	MUI / Ant Design
	Tailwind CSS
	Styled Component
	custom theme
### Internationalization
	i18n