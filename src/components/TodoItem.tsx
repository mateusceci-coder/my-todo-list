import { Check, X } from 'lucide-react'
import StatusItem from './StatusItem'

export default function TodoItem() {
    return (
        <li className='max-h-52 w-100 bg-secondary rounded-lg p-2 text-ellipsis overflow-y-hidden'>
            <div className='flex justify-between pb-2'>
                <h2 className='font-agbalumo text-xl'>Title</h2>
                <div className='flex gap-4'>
                    <Check className='hover: cursor-pointer' color='green' />
                    <X className='hover: cursor-pointer' color='red' />
                </div>
            </div>
            <p className='mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quibusdam, nemo, ex perspiciatis</p>
            <StatusItem />
        </li>
    )
}