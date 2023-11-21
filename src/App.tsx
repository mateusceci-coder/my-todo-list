import Header from './layout/Header'
import {  useFormTodoContext } from './contexts/Formcontext'
import Input from './components/Input'
import TodoList from './layout/TodoList'
import Formbar from './layout/Formbar'
import Switch from "@mui/material/Switch"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function App() {
  const {  isFormOpen, isInputOpen, handleDarkMode, darkMode } = useFormTodoContext()

  return (
  <div className={`${darkMode && "dark"}`}>
    <div className="bg-white dark:bg-main h-screen w-100 text-main-text p-3 overflow-y-scroll relative">
      <div className='flex gap-2 sticky left-10'>
        <FormGroup>
          <FormControlLabel className='dark:text-white text-black' control={<Switch onChange={handleDarkMode} defaultChecked />} label="Dark Mode" />
        </FormGroup>
      </div>
      {isFormOpen && <div className="bg-main bg-opacity-70 absolute inset-0"></div>}
      <Header />
        {isInputOpen ? 
          <Input /> : <Formbar />
        }
      <TodoList />
    </div>
  </div>
  )
}