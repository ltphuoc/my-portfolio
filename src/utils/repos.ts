export async function getRepoList(): Promise<any[]> {
  const res = await fetch('https://api.github.com/users/ltphuoc/repos', {
    next: {
      revalidate: 3600 * 24,
    },
  })

  if (!res.ok) {
    return []
  }

  const repoList = await res.json()

  for (const repo of repoList) {
    const languageRes = await fetch(repo.languages_url)
    const languageList = await languageRes.json()

    repo.language = updateLanguages(languageList)
  }

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

  for (const repo of repoList) {
    const languageRes = await fetch(repo.languages_url)
    const languageList = await languageRes.json()

    repo.language = updateLanguages(languageList)
  }

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
  let languages = { ...data }

  // Rename "Dart" to "Flutter" if present
  if (languages['Dart']) {
    languages['Flutter'] = languages['Dart']
    delete languages['Dart']
  }

  if (languages['Flutter']) {
    // delete all other languages
    languages = {
      Flutter: languages['Flutter'],
    }
  }

  // Remove specified languages
  const languagesToRemove = ['C++', 'CMake', 'Swift', 'C', 'Kotlin', 'Objective-C', 'Shell']
  languagesToRemove.forEach((language) => delete languages[language])

  return Object.keys(languages)
}
