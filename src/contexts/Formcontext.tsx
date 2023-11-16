import { ReactNode, createContext, useContext, useReducer } from "react";

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
    emptyField: boolean,
}

type Params = {
    id: string,
    title: string,
    task: string,
    status: string
}

interface State {
    isFormOpen: boolean;
    isInputOpen: boolean;
    query: Params[]; 
    todos: Params[];
    darkMode: boolean;
    emptyField: boolean
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: State = {
    isFormOpen: false,
    isInputOpen: false,
    query: [],
    todos: [],
    darkMode: true,
    emptyField: false
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "formOpen":
            return {
                ...state, isFormOpen: !state.isFormOpen, emptyField: false
            }

        case "isDarkMode":
            return {
                ...state, darkMode: !state.darkMode
            }
        
        case "deleteTodo":
            return {
                ...state, todos: state.todos.filter((todo) => todo.id !== action.payload),
                query: state.query.filter((todo) => todo.id !== action.payload)
            }

        case "newTodo":
            return {
                ...state, todos: [...state.todos, action.payload], isFormOpen: false, emptyField: false
            }

        case "finishedTodo":
            return {
                ...state, todos: state.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return {...todo, status: "finished"}
                    }
                    return todo
                    }),
                    query: state.query.map((query) => {
                        if(query.id === action.payload) {
                            return {...query, status: "finished"}
                        }
                        return query
                    })
            }
        
        case "inputOpen":
            return {
                ...state, isInputOpen: !state.isInputOpen,
                query: []
            }
        
        case "searchText":
            return {
                ...state, query: state.todos.filter((todo) => todo.title.includes(action.payload))
            }

        case "clearFinishedStatus":
            return {
                ...state, todos: state.todos.filter((todo) => todo.status !== "finished")
            }

        case "emptyFieldText":
            return {
                ...state, emptyField: true
            }

        default:
            throw new Error("Unknown action type")
    }
}

const FormTodoContext = createContext<FormTodoContextType | null>(null)

function useFormTodoContext() {
    const value = useContext(FormTodoContext)
    if (value == null) throw new Error("Cannot use outside of Provider")

    return value
}

function FormTodoProvider ({children}: FormTodoProviderProps) {
    const [{ query, todos, darkMode, isFormOpen, isInputOpen, emptyField }, dispatch] = useReducer(reducer, initialState)
    
    const handleDarkMode = () => {
        dispatch({ type: "isDarkMode" })
    }
    
    const handleFormOpen = () => {
        dispatch({ type: "formOpen" })
      }
    
    const handleDeleteTodo = (id: string) => {
        dispatch({ type: "deleteTodo", payload: id })
    }
    
    const handleCloseForm = () => {
        dispatch({ type: "formOpen" })
    }
    
    const addNewTodo = (title: string, task: string, statusValue: string) => {
        if (!title || !task) {
            dispatch({ type: "emptyFieldText" })
        } else {
            dispatch({ type: "newTodo", payload: {id: crypto.randomUUID(), title: title, task: task, status: statusValue} })
        }
    }
    
    const handleFinishedTodo = (id:string) => {
        dispatch({ type: "finishedTodo", payload: id })
    }
    
    const handleInputOpen = () => {
       dispatch({ type: "inputOpen" })
    }
    
    const handleSearchText = (title:string) => {
        dispatch({ type: "searchText", payload: title })
    }
    
    const clearFinished = () => {
        dispatch({ type: "clearFinishedStatus" })
    }

      return (
        <FormTodoContext.Provider value={{isFormOpen, todos, handleFormOpen, handleDeleteTodo, handleCloseForm, addNewTodo, handleFinishedTodo, handleInputOpen, isInputOpen, handleSearchText, query, clearFinished, handleDarkMode, darkMode, emptyField}}>
            {children}
        </FormTodoContext.Provider>
      )
}

export { useFormTodoContext, FormTodoProvider }