import { Check, X } from 'lucide-react'
import StatusItem from './StatusItem'
import { useFormTodoContext } from '../contexts/Formcontext'

type TodoItemProps = {
    title: string,
    task: string,
    status: string,
    id: string,
}

export default function TodoItem({id, title, task, status}: TodoItemProps) {
    const { handleDeleteTodo, handleFinishedTodo } = useFormTodoContext()

    return (
        <li className='max-h-52 bg-secondary rounded-lg p-2 text-ellipsis overflow-y-hidden break-all max-w-md'>
            <div className='flex justify-between pb-2'>
                <h2 className={`font-agbalumo text-xl ${status === "finished" ? "line-through" : "" }`}>{title}</h2>
                <div className='flex gap-4'>
                    <Check className='hover: cursor-pointer' color='green' onClick={() => handleFinishedTodo(id)} />
                    <X className='hover: cursor-pointer' color='red' onClick={() => handleDeleteTodo(id)} />
                </div>
            </div>
            <p className='mb-2'>{task}</p>
            <StatusItem status={status} />
        </li>
    )
}