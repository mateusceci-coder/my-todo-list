import Header from './layout/Header'
import {  useFormTodoContext } from './contexts/Formcontext'
import Input from './components/Input'
import TodoList from './layout/TodoList'
import Formbar from './layout/Formbar'

export default function App() {
  const {  isFormOpen, isInputOpen } = useFormTodoContext()

  return (
  <div className="bg-main h-screen w-100 text-main-text p-3 overflow-y-scroll relative">
    {isFormOpen && <div className="bg-main bg-opacity-70 absolute inset-0"></div>}
    <Header />
    {isInputOpen ? 
        <Input /> : <Formbar />
      }
      <TodoList />
  </div>
  )
}