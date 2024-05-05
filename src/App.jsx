import Header from './Components/Header'
import TaskComponent from './Components/TaskComponent'
import { useState } from 'react'

const InitialTasks =  localStorage.getItem('Tasks') ? JSON.parse(localStorage.getItem('Tasks')) : []

function App() {
  const [Tasks, setTasks] = useState(InitialTasks)

  const handleSubmit = (event) => {
    const eventTitle = event.target[0].value
    const eventDescription = event.target[1].value
    if(eventTitle === '' || eventDescription === ''){
      alert('Pls fill the inputs')
      return
    }else if(isRepeated(eventTitle,eventDescription)){
      alert('Task already exists')
      return
    }
    else{
    event.preventDefault();
    Tasks.push({
      id: new Date().getTime(),
      title: event.target[0].value,
      description: event.target[1].value
    })
    localStorage.setItem('Tasks', JSON.stringify(Tasks))
    setTasks([...Tasks])
    //console.log(Tasks)
  }
  }

  const isRepeated = (title,description) => {
    const repeated = Tasks.filter((task) => task.title === title && task.description === description)
    return repeated.length > 0 ? true : false 
  }


  const RenderTasks = ({Tasks}) => {
      return (
        Tasks.map((task) => {
          return (
            <TaskComponent task={task} handler={HandleDelete}/>
          )
        })
      )
    
  }

  const HandleDelete = (id) => {
    console.log('Delete')
    const newTasks = Tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
    localStorage.setItem('Tasks', JSON.stringify(newTasks))
  }

  return (
    <>
      <Header  />
      <div className=' w-4/5 border-solid border rounded-2xl flex flex-col items-center ' >
          <form className='flex justify-between items-end border-solid  w-full ' onSubmit={handleSubmit}>
            <div className='flex flex-col w-3/4'>
            <span className='text-myblue p-2 text-justify pt-3 font-semibold font-mono px-5'>Title</span>
            <input type='text ' placeholder='Insert Title' className='border border-solid w-3/4 rounded-lg p-2 m-2 bg-t text-myblue font-mono bg-transparent'/>
            <span className="text-myblue p-2 text-justify pt-3 font-semibold font-mono px-5 ">Description</span>
            <textarea type="text" placeholder='Insert Task' className='border border-solid  rounded-lg p-2 m-2 text-myblue h-24 font-mono bg-transparent' />
            </div>
            <button className='bg-myblue text-white  mb-3 mr-2 p-2 rounded-lg  hover:bg-myfucia hover:animate-pulse h-10 w-24' type="submit">Add</button>
          </form>
        </div>
        {RenderTasks({Tasks})}
    </>
  )
}

export default App
