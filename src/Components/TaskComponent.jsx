const TaskComponent = ({task,handler}) =>{
    return (
        <div key={task.id} className="flex justify-between items-end border-solid border rounded-2xl w-4/5 m-2 ">
            <div className=" w-3/4  ">
              <h1 className='text-myblue p-2 text-justify pt-3 font-semibold font-mono px-5'>-{task.title}</h1>
              <p className='text-myblue m-2 text-justify pt-3 font-semibold font-mono px-5  max-w-3/4 break-words'>{task.description}</p>
            </div>
            <button className='bg-myblue text-white  rounded-lg  hover:bg-myfucia hover:animate-pulse h-10 w-24 m-2 ' 
            onClick={() =>{handler(task.id)}}>Eliminar</button>
        </div>
        )
}
export default TaskComponent