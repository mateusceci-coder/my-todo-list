import { X } from 'lucide-react'

type TodoFormProps = {
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function TodoForm({ setIsFormOpen }: TodoFormProps) {
    const handleCloseForm = () => {
        setIsFormOpen(false)
    }
   
    return (
        <div className="flex justify-center p-2 flex-col bg-white text-main rounded-xl">
            <div className='flex justify-end'>
                <X color='red'onClick={handleCloseForm}/>
            </div>
            <div className="mb-2">
                <label className="block" htmlFor="title">Title:</label>
                <input type="text" className="border-main border-2 rounded-xl p-1" />
            </div>
            <div>
                <label className="block" htmlFor="task">Task:</label>
                <textarea className="rounded border-2 border-main p-1"></textarea>
            </div>
            <div>
                <label htmlFor="status">Status: </label>
                <select className="text-main">
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="normal">Normal</option>
                </select>
            </div>
            <div className='flex justify-end'>
                <button className='hover:cursor-pointer hover:brightness-125 bg-blue text-main-text rounded-xl p-1'>Add New Todo</button>
            </div>
        </div>
    )
}
