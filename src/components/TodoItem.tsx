import { Check, X } from 'lucide-react'
import StatusItem from './StatusItem'

type TodoItemProps = {
    title: string,
    task: string,
    status: string,
    id: string,
    setTodos: React.Dispatch<React.SetStateAction<{id: string, title: string, task: string, status: string}[]>>
}

export default function TodoItem({id, title, task, status, setTodos}: TodoItemProps) {

    const handleDeleteTodo = (id: string) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
    }

    return (
        <li className='max-h-52 w-100 bg-secondary rounded-lg p-2 text-ellipsis overflow-y-hidden'>
            <div className='flex justify-between pb-2'>
                <h2 className='font-agbalumo text-xl'>{title}</h2>
                <div className='flex gap-4'>
                    <Check className='hover: cursor-pointer' color='green' />
                    <X className='hover: cursor-pointer' color='red' onClick={() => handleDeleteTodo(id)} />
                </div>
            </div>
            <p className='mb-2'>{task}</p>
            <StatusItem status={status} />
        </li>
    )
}