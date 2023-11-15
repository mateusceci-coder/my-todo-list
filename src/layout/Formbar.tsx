import  { CheckSquare, PlusCircle, Search } from "lucide-react"
import { useFormTodoContext } from "../contexts/Formcontext"

export default function Formbar() {
    const { handleFormOpen, handleInputOpen, clearFinished, darkMode } = useFormTodoContext()

  return (
      <div className="flex justify-between my-5 max-w-5xl mx-auto">
          <div className="group flex">
              <CheckSquare onClick={clearFinished} className='cursor-pointer' color={`${darkMode ? "white" : "black"}`} />
              <span className="group-hover:opacity-100 transition-opacity bg-important px-1 text-main-text rounded-md absolute 
      translate-y-6 opacity-0 mx-auto">Clear finished todos</span>
          </div>
          <PlusCircle className='cursor-pointer' onClick={handleFormOpen} color={`${darkMode ? "white" : "black"}`} />
          <Search className='cursor-pointer' onClick={handleInputOpen} color={`${darkMode ? "white" : "black"}`} />
      </div> 
  )
}
