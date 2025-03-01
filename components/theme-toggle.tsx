"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark")
    }
  }, [theme, setTheme])

  if (!mounted) {
    return null
  }

  return null
}
