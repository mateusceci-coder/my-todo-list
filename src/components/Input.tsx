import { X } from "lucide-react"
import { useFormTodoContext } from "../contexts/Formcontext"

export default function Input() {
    const { handleInputOpen, handleSearchText } = useFormTodoContext()

  return (
    <div className="flex justify-center gap-2 mb-4">
        <input onChange={(e) => handleSearchText(e.target.value)} className="rounded p-1 w-full sm:w-3/4 md:w-1/2 text-main" type="text" placeholder="Write the title of the todo" />
        <X size={36} onClick={handleInputOpen} className="cursor-pointer" />
    </div>
  )
}
