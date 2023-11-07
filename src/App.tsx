import { PlusCircle, ListFilter, Search } from 'lucide-react'
import Header from './layout/Header'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {  useFormTodoContext } from './contexts/Formcontext'
import Input from './components/Input'

export default function App() {
  const { handleFormOpen, isFormOpen, todos, handleInputOpen, isInputOpen } = useFormTodoContext()


  return (
  <div className="bg-main h-screen w-100 text-main-text p-3 overflow-y-scroll relative">
    {isFormOpen && <div className="bg-main bg-opacity-70 absolute inset-0"></div>}
    <Header />
    {isInputOpen ? <div className="flex justify-between my-5 max-w-5xl mx-auto">
      <ListFilter className='cursor-pointer'/>
      <PlusCircle className='cursor-pointer' onClick={handleFormOpen} />
      <Search className='cursor-pointer' onClick={handleInputOpen} />
    </div> : <Input />}
    <div className='max-w-5xl mx-auto'>
    {isFormOpen && (
          <div className="absolute w-full left-0"> 
            <TodoForm />
          </div>
        )}
      <ul className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
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