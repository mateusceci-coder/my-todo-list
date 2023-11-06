import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FormTodoProvider } from './contexts/Formcontext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormTodoProvider>
      <App />
    </FormTodoProvider>
  </React.StrictMode>,
)
