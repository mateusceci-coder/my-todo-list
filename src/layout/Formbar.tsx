import  { ListFilter, PlusCircle, Search } from "lucide-react"
import { useFormTodoContext } from "../contexts/Formcontext"

export default function Formbar() {
    const { handleFormOpen, handleInputOpen } = useFormTodoContext()

  return (
    <div className="flex justify-between my-5 max-w-5xl mx-auto">
        <ListFilter className='cursor-pointer'/>
        <PlusCircle className='cursor-pointer' onClick={handleFormOpen} />
        <Search className='cursor-pointer' onClick={handleInputOpen} />
      </div> 
  )
}
