import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
     text: 'Doctors appointment',
      day: 'feb 8th 6:00',
       reminder: true,
    },
    {
    id: 2,
    text: "meeting at school",
    day: "tuesday 12th",
    reminder: true,
    },
    {
        id: 3,
        text: "going to work",
        day: "monday 12",
        reminder: true,
    }
    ])
 
    //delete tasks
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !==id))
    }
  return (
    <div className="container">
      <Header/>
      <Tasks tasks= {tasks} onDelete = {deleteTask} />

    </div>
  );
}

export default App;
