import { PlusCircle, ListFilter, Search } from 'lucide-react'
import TodoItem from './components/TodoItem'
import Header from './layout/Header'
import { useState } from 'react'
import TodoForm from './components/TodoForm'


export default function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)

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
        {isFormOpen && <TodoForm setIsFormOpen={setIsFormOpen} />}
        <ul className='grid gap-2'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </ul>
      </div>
    </div>
  )
}