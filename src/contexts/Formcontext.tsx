import { ReactNode, createContext, useState } from "react";

type FormTodoProviderProps = {
    children: ReactNode
}

type FormTodoContextType = {
    isFormOpen: boolean
}

const FormTodoContext = createContext(null)

export default function FormTodoProvider ({children}: FormTodoProviderProps) {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [todos, setTodos] = useState<{title: string, task: string, status: string}[]>([])

    const handleFormOpen = () => {
        setIsFormOpen(true)
      }
}