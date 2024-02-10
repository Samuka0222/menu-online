'use client'

import { createContext, useState } from 'react'

interface SelectedCategoryContextProps {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export const SelectedCategoryContext = createContext<SelectedCategoryContextProps | undefined>(undefined)

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