// import React, { useState } from "react";
// import s from "./pool.module.css";
// import PoolItem from "./pool_item/pool_item";

// const Pool = (props) => {
//   const [tasks, setTasks] = useState([
//     { name: "ToDo", tasks: [] },
//     { name: "Done", tasks: [] },
//     { name: "Later", tasks: [] }
//   ]);

//   const addTask = () => {
//     const newTask = window.prompt("Enter new task:");
//     if (newTask) {
//       const updatedTasks = [...tasks];
//       updatedTasks[0].tasks.push(newTask);
//       setTasks(updatedTasks);
//     }
//   };
 
//   return (
//     <div className={s.pool}>
//       {tasks.map((taskList, index) => (
//         <PoolItem key={index} name={taskList.name} tasks={taskList.tasks} index={index} addTask={addTask} />
//       ))}
//     </div>
//   );
// };

import React, { useState } from "react";
import s from "./pool.module.css";
import PoolItem from "./pool_item/pool_item";

const Pool = (props) => {
  const [tasks, setTasks] = useState([
    { name: "ToDo", tasks: [] },
    { name: "Done", tasks: [] },
    { name: "Later", tasks: [] }
  ]);

  const addTask = () => {
    const newTask = window.prompt("Enter new task:");
    if (newTask) {
      const updatedTasks = [...tasks];
      updatedTasks[0].tasks.push(newTask);
      setTasks(updatedTasks);
    }
  };

  const moveTask = (taskIndex, target) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks[0].tasks.splice(taskIndex, 1)[0];
    if (target === "Done") {
      updatedTasks[1].tasks.push(taskToMove);
    } else if (target === "Later") {
      updatedTasks[2].tasks.push(taskToMove);
    }
    setTasks(updatedTasks);
  };

  return (
    <div className={s.pool}>
      {tasks.map((taskList, index) => (
        <PoolItem key={index} name={taskList.name} tasks={taskList.tasks} index={index} addTask={addTask} moveTask={moveTask} />
      ))}
    </div>
  );
};

export default Pool;
