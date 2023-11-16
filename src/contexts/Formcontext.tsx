import { ReactNode, createContext, useContext, useState } from "react";

type FormTodoProviderProps = {
    children: ReactNode
}

type FormTodoContextType = {
    isFormOpen: boolean,
    todos: Params[],
    isInputOpen: boolean,
    handleFormOpen: () => void,
    handleDeleteTodo: (id:string) => void,
    handleCloseForm: () => void,
    addNewTodo: (title: string, task: string, statusValue: string) => void,
    handleFinishedTodo: (id:string) => void,
    handleInputOpen: () => void,
    handleSearchText: (title:string) => void,
    query: Params[],
    clearFinished: () => void,
    handleDarkMode: () => void,
    darkMode: boolean,
}

type Params = {
    id: string,
    title: string,
    task: string,
    status: string
}

const FormTodoContext = createContext<FormTodoContextType | null>(null)

function useFormTodoContext() {
    const value = useContext(FormTodoContext)
    if (value == null) throw new Error("Cannot use outside of Provider")

    return value
}

function FormTodoProvider ({children}: FormTodoProviderProps) {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [todos, setTodos] = useState<Params[]>([])
    const [isInputOpen, setIsInputOpen] = useState<boolean>(false)
    const [query, setQuery] = useState<Params[]>([])
    const [darkMode, setDarkMode] = useState<boolean>(true)

    const handleDarkMode = () => {
        setDarkMode((dark) => !dark)
    }

    const handleFormOpen = () => {
        setIsFormOpen(true)
      }

    const handleDeleteTodo = (id: string) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
        setQuery((query) => query.filter((todo) => todo.id !== id))
    }

    const handleCloseForm = () => {
        setIsFormOpen(false)
    }

    const addNewTodo = (title: string, task: string, statusValue: string) => {
        if (!title || !task) return

        
        setTodos((todos) => [...todos, {id: crypto.randomUUID(), title: title, task: task, status: statusValue}])
        setIsFormOpen(false)
    }

    const handleFinishedTodo = (id:string) => {
        const finishedTodo = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, status: "finished"}
            }
            return todo
        })
        setTodos(finishedTodo)

        const finishedQuery = query.map((query) => {
            if(query.id === id) {
                return {...query, status: "finished"}
            }
            return query
        })
        setQuery(finishedQuery)
    }

    const handleInputOpen = () => {
        setIsInputOpen((i) => !i)
        setQuery([])
    }

    const handleSearchText = (title:string) => {
        setQuery(todos.filter((todo) => todo.title.includes(title)))
    }

    const clearFinished = () => {
        setTodos((todos) => todos.filter((todo) => todo.status !== "finished"))
    }

      return (
        <FormTodoContext.Provider value={{isFormOpen, todos, handleFormOpen, handleDeleteTodo, handleCloseForm, addNewTodo, handleFinishedTodo, handleInputOpen, isInputOpen, handleSearchText, query, clearFinished, handleDarkMode, darkMode}}>
            {children}
        </FormTodoContext.Provider>
      )
}

export { useFormTodoContext, FormTodoProvider }