import { X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { useFormTodoContext } from '../contexts/Formcontext'

export default function TodoForm() {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    const [statusValue, setStatusValue] = useState("urgent")
    const { handleCloseForm, addNewTodo } = useFormTodoContext()

    
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
        <div className="flex justify-center p-2 flex-col bg-white text-main rounded-xl my-2 mx-auto max-w-lg">
            <div className='flex justify-end'>
                <X color='red'onClick={handleCloseForm}/>
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="title">Title:</label>
                <input type="text" className="border-main border-2 rounded-xl p-1 w-full" value={title} onChange={handleInputChange}/>
            </div>
            <div>
                <label className="block" htmlFor="task">Task:</label>
                <textarea maxLength={100} value={task} onChange={handleTextChange} className="rounded border-2 border-main p-1 w-full"></textarea>
            </div>
            <div>
                <label htmlFor="status">Status: </label>
                <select value={statusValue} onChange={handleSelectChange} className="text-main">
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div className='flex justify-end'>
                <button onClick={() => addNewTodo(title, task, statusValue)} className='hover:cursor-pointer hover:brightness-125 bg-important text-main-text rounded-xl p-1'>Add New Todo</button>
            </div>
        </div>
    )
}
