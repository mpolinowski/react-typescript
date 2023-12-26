import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from '@/routes/Routes'
import { ThemeProvider } from "@/components/theme/Theme-Provider"
import '@/styles/index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)

