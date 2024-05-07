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

Learn ReactJS

<!-- truncate-->

React Error Boundary
Code splitting, lazy load
`clsx` lib for toggle class names
Mono repo (Multi project in repo)

#### Hooks
- useState
- useEffect
- useRef
- memo (HOC)
- useCallback
- useMemo
- useReducer
```ts
const initState = 0

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

const increase = (payload: number): CountAction => ({
  type: CountActionKind.INCREASE,
  payload,
})

const reducer = (state: number, action: CountAction) => {
  const { type, payload } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return state + payload
    case CountActionKind.DECREASE:
      return state - payload
    default:
      throw new Error('Invalid action')
  }
}

// Inside Component
const [count, dispatch] = useReducer(reducer, initState)

// Use
dispatch(increase(1))
```
- Context
	1. createContext
	2. Context.Provider
	3. useContext
```ts
import { ReactNode, createContext, useContext, useState } from 'react'

const initialState = {
  count: 0,
  setCount: () => {},
}

interface ContextProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

interface ContextProviderProps {
  children: ReactNode
}

const context = createContext<ContextProps>(initialState)

function ContextProvider({ children }: ContextProviderProps) {
  const [count, setCount] = useState(initialState.count)

  return <context.Provider value={{ count, setCount }}>{children}</context.Provider>
}

export const useMyContext = () => useContext(context)

export default ContextProvider

```