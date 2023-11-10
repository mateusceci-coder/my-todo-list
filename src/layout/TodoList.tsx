import { useFormTodoContext } from "../contexts/Formcontext"
import TodoItem from "../components/TodoItem"
import { MoveUp } from "lucide-react"
import TodoForm from "../components/TodoForm"


export default function TodoList() {
    const { isInputOpen, query, todos, isFormOpen } = useFormTodoContext()

  return (
    <div className='max-w-5xl mx-auto'>
        {isFormOpen && (
            <div className="absolute w-full left-0"> 
            <TodoForm />
            </div>
        )}
        {todos.length === 0 && (
        <div className='flex flex-col justify-center items-center mt-10 gap-2'>
            <MoveUp size={48} width={48} />
            <h1 className='text-main-text font-agbalumo text-2xl'>No pending tasks. Add some!</h1>
        </div>
        )}
        <ul className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
            {!isInputOpen ? todos.map((todo) => {
            return (
                <TodoItem key={todo.id} title={todo.title} task={todo.task} status={todo.status} id={todo.id}/>
            )
            }) : query.map((queryItem) => {
            return (
                <TodoItem key={queryItem.id} title={queryItem.title} task={queryItem.task} status={queryItem.status} id={queryItem.id}/>
            )
            })}
        </ul>
    </div>
  )
}
