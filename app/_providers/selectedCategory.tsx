'use client'

import { createContext, useState } from 'react'

export const SelectedCategoryContext = createContext({})

export default function SelectedCategoryProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [selectedCategory, setSelectedCategory] = useState('churrasco')

  return (
    <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </SelectedCategoryContext.Provider>
  )
}