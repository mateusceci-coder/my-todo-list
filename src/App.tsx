import { PlusCircle, ListFilter, Search } from 'lucide-react'
import Header from './layout/Header'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {  useFormTodoContext } from './contexts/Formcontext'

export default function App() {
  const { handleFormOpen, isFormOpen, todos } = useFormTodoContext()


  return (
          <div className="bg-main h-screen w-100 text-main-text p-3 overflow-y-scroll">
        <Header />
        <div className="flex justify-between my-5">
          <ListFilter />
          <PlusCircle onClick={handleFormOpen} />
          <Search />
        </div>
        <div>
          {isFormOpen && <TodoForm />}
          <ul className='grid gap-2 md:grid-cols-2'>
            {todos.map((todo) => {
              return (
                <TodoItem key={todo.title} title={todo.title} task={todo.task} status={todo.status} id={todo.id}/>
              )
            })}
          </ul>
        </div>
      </div>
  )
}