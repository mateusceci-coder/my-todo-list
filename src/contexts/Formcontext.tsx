import { ReactNode, createContext, useContext, useState } from "react";

type FormTodoProviderProps = {
    children: ReactNode
}

type FormTodoContextType = {
    isFormOpen: boolean,
    todos: {id: string, title: string; task: string; status: string; }[],
    isInputOpen: boolean,
    handleFormOpen: () => void,
    handleDeleteTodo: (id:string) => void,
    handleCloseForm: () => void,
    addNewTodo: (title: string, task: string, statusValue: string) => void,
    handleFinishedTodo: (id:string) => void,
    handleInputOpen: () => void
}

const FormTodoContext = createContext<FormTodoContextType | null>(null)

function useFormTodoContext() {
    const value = useContext(FormTodoContext)
    if (value == null) throw new Error("Cannot use outside of Provider")

    return value
}

function FormTodoProvider ({children}: FormTodoProviderProps) {
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
    const [todos, setTodos] = useState<{id:string, title: string, task: string, status: string}[]>([])
    const [isInputOpen, setIsInputOpen] = useState<boolean>(false)

    const handleFormOpen = () => {
        setIsFormOpen(true)
      }

    const handleDeleteTodo = (id: string) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
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
    }

    const handleInputOpen = () => {
        setIsInputOpen((i) => !i)
    }

      return (
        <FormTodoContext.Provider value={{isFormOpen, todos, handleFormOpen, handleDeleteTodo, handleCloseForm, addNewTodo, handleFinishedTodo, handleInputOpen, isInputOpen}}>
            {children}
        </FormTodoContext.Provider>
      )
}

export { useFormTodoContext, FormTodoProvider }