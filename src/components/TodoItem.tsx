import { Check, X } from 'lucide-react'
import StatusItem from './StatusItem'
import { useFormTodoContext } from '../contexts/Formcontext'

type TodoItemProps = {
    title: string,
    task: string,
    status: string,
    id: string,
}

const generateNewDate = () => {
    const dataAtual = new Date();
    const day = dataAtual.getDate();
    const month = dataAtual.getMonth() + 1;
    const year = dataAtual.getFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    return formattedDate
}

export default function TodoItem({id, title, task, status}: TodoItemProps) {
    const { handleDeleteTodo, handleFinishedTodo } = useFormTodoContext()

    return (
        <li className='max-h-52 bg-slate-300 dark:bg-slate-900 rounded-lg p-2 text-ellipsis overflow-y-hidden break-all max-w-md text-black dark:text-white'>
            <div className='flex justify-between pb-2'>
                <h2 className={`font-agbalumo text-xl ${status === "finished" ? "line-through" : "" }`}>{title}</h2>
                <div className='flex gap-4'>
                    {status === "finished" ? "" : <Check className='hover: cursor-pointer' color='green' onClick={() => handleFinishedTodo(id)} />}
                    <X className='hover: cursor-pointer' color='red' onClick={() => handleDeleteTodo(id)} />
                </div>
            </div>
            <p className='mb-2'>{task}</p>
            <div className='flex justify-between'>
                <p className='text-sm text-slate-500'>{generateNewDate()}</p>
                <StatusItem status={status} />
            </div>
        </li>
    )
}