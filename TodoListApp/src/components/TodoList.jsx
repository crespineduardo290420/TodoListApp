import TdoItem from "./TdoItem"

const TodoList = ({todos, setEdit, removeTodo}) => {
  return (
    <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
      <ul>
       {todos.map((todo, index) => (
         <TdoItem key={index} index={index} todo={todo} setEdit={setEdit} removeTodo={removeTodo} />
       ))}
        
      </ul>
    </div>
  )
}

export default TodoList