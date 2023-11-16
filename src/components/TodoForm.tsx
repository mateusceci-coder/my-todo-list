import { AlertCircle, X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { useFormTodoContext } from '../contexts/Formcontext'

export default function TodoForm() {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    const [statusValue, setStatusValue] = useState("urgent")
    const { handleCloseForm, addNewTodo, emptyField } = useFormTodoContext()

    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTask(e.target.value)
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatusValue(e.target.value)
    }
   

    return (
        <div className="flex justify-center p-2 flex-col bg-black dark:bg-white text-black rounded-xl my-2 mx-auto w-11/12 max-w-lg">
            <div className='flex justify-end'>
                <X color='red'onClick={handleCloseForm} className='cursor-pointer'/>
            </div>
            <div className="mb-2">
                <label className="block text-white dark:text-black" htmlFor="title">Title:</label>
                <input type="text" className="border-white dark:border-main border-2 rounded-xl p-1 w-full" value={title} onChange={handleInputChange}/>
            </div>
            <div>
                <label className="block text-white dark:text-black" htmlFor="task">Task:</label>
                <textarea maxLength={100} value={task} onChange={handleTextChange} className="rounded border-2 border-main p-1 w-full"></textarea>
            </div>
            <div>
                <label htmlFor="status" className='text-white dark:text-black'>Status: </label>
                <select value={statusValue} onChange={handleSelectChange} className="text-main">
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div className={`flex ${emptyField ? "justify-between" : "justify-end"} py-1`}>
                {emptyField && <div className='flex gap-2'>
                    <AlertCircle  color='red'/>
                    <p className='text-sm text-red-500'>Please, fill in all fields</p>
                </div>}
                <button onClick={() => addNewTodo(title, task, statusValue)} className='hover:cursor-pointer hover:brightness-125 bg-important text-main-text rounded-xl p-1'>Add New Todo</button>
            </div>
        </div>
    )
}
