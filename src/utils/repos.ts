export async function getRepoList(): Promise<any[]> {
  const res = await fetch('https://api.github.com/users/ltphuoc/repos')

  if (!res.ok) {
    return []
  }

  const repoList = await res.json()

  repoList.forEach(async (repo: any) => {
    const languageRes = await fetch(repo.languages_url)
    const languageList = await languageRes.json()

    repo.language = updateLanguages(languageList)
  })

  return repoList.sort((a: any, b: any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
}

export async function getRepoListCapstoneProject(): Promise<any[]> {
  const res = await fetch('https://api.github.com/orgs/CEs-Company-Benefit-Ecommerce-Service/repos')

  if (!res.ok) {
    return []
  }
  const repoList = await res.json()

  repoList.forEach(async (repo: any) => {
    const languageRes = await fetch(repo.languages_url)
    const languageList = await languageRes.json()

    repo.language = updateLanguages(languageList)
  })

  return repoList.sort((a: any, b: any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
}

export async function getGistList(): Promise<any[]> {
  const res = await fetch('https://api.github.com/users/ltphuoc/gists')

  if (!res.ok) {
    return []
  }
  const repoList = await res.json()
  return repoList.sort((a: any, b: any) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
}

function updateLanguages(data: any) {
  // Rename "Dart" to "Flutter" if present
  // if (data['Dart']) {
  //   data['Flutter'] = data['Dart']
  //   delete data['Dart']
  // }

  // Remove specified languages
  // const languagesToRemove = ['C++', 'CMake', 'Swift', 'C', 'Kotlin', 'Objective-C', 'Shell']
  // languagesToRemove.forEach((language) => delete data[language])

  return Object.keys(data)
}
