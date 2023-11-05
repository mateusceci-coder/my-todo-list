import { PlusCircle, ListFilter, Search } from 'lucide-react'
import Header from './layout/Header'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useState } from 'react'

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [todos, setTodos] = useState<{id: string, title: string, task: string, status: string}[]>([])

  const handleFormOpen = () => {
    setIsFormOpen(true)
  }

  return (
    <div className="bg-main h-screen w-100 text-main-text p-3 overflow-y-scroll">
      <Header />
      <div className="flex justify-between my-5">
        <ListFilter />
        <PlusCircle onClick={handleFormOpen} />
        <Search />
      </div>
      <div>
        {isFormOpen && <TodoForm setIsFormOpen={setIsFormOpen} setTodos={setTodos} />}
        <ul className='grid gap-2'>
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.title} title={todo.title} task={todo.task} status={todo.status} id={todo.id} setTodos={setTodos}/>
            )
          })}
        </ul>
      </div>
    </div>
  )
}