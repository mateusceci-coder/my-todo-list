import { Check, X } from 'lucide-react'
import StatusItem from './StatusItem'

type TodoItemProps = {
    title: string,
    task: string,
    status: string
}

export default function TodoItem({title, task, status}: TodoItemProps) {
    return (
        <li className='max-h-52 w-100 bg-secondary rounded-lg p-2 text-ellipsis overflow-y-hidden'>
            <div className='flex justify-between pb-2'>
                <h2 className='font-agbalumo text-xl'>{title}</h2>
                <div className='flex gap-4'>
                    <Check className='hover: cursor-pointer' color='green' />
                    <X className='hover: cursor-pointer' color='red' />
                </div>
            </div>
            <p className='mb-2'>{task}</p>
            <p>{status}</p>
            <StatusItem />
        </li>
    )
}