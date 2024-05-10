'use client'

import { ReactNode, createContext, useEffect, useRef, useState } from 'react'

type SettingsValueProps = {
  themeMode: 'light' | 'dark'
}

const defaultSettings: SettingsValueProps = {
  themeMode: 'dark',
}

type SettingsContextProps = {
  themeMode?: 'light' | 'dark'
  toggleTheme: VoidFunction
}

const initialState: SettingsContextProps = {
  ...defaultSettings,
  toggleTheme: () => {},
}

const SettingsContext = createContext(initialState)

type SettingsContextProviderProps = {
  children: ReactNode
}

function SettingsContextProvider({ children }: SettingsContextProviderProps) {
  const isInitialized = useRef(false)
  const [settings, setSettings] = useState<SettingsValueProps>(defaultSettings)

  useEffect(() => {
    const storedSettings = localStorage.getItem('settings')

    if (storedSettings) {
      setSettings({ ...defaultSettings, ...JSON.parse(storedSettings) })
    }
  }, [])

  useEffect(() => {
    if (isInitialized.current) localStorage.setItem('settings', JSON.stringify(settings))
    isInitialized.current = true
  }, [settings])

  function toggleTheme() {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    })
  }

  return (
    <SettingsContext.Provider value={{ ...settings, toggleTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsContextProvider }
