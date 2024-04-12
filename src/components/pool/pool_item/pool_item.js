// import React from "react";
// import s from "./pool_item.module.css";

// const PoolItem = (props) => {
//   return (
//     <div className={s.pool_item_board}>
//       <div className={s.title}>{props.name}</div>
//       <div className={s.tasks}>
//         {props.tasks.map((task, index) => (
//           <div key={index} className={s.tasks_item}>
//             {task}
//           </div>
//         ))}
//       </div>
//       {props.name === "ToDo" && <button className={s.button} onClick={props.addTask}>Add Task</button>}
//     </div>
//   );
// };

import React, { useState } from "react";
import s from "./pool_item.module.css";

const PoolItem = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    props.moveTask(props.index, option);
    setShowOptions(false);
  };

  return (
    <div className={s.pool_item_board}>
      <div className={s.title}>{props.name}</div>
      <div className={s.tasks}>
        {props.tasks.map((task, index) => (
          <div key={index} className={s.tasks_item}>
            {task} <span onClick={() => setShowOptions(!showOptions)}>...</span>
            {showOptions && (
              <div className={s.options}>
                <span className={s.toDone} onClick={() => handleOptionClick("Done")}>Move to Done</span>
                <span className={s.toLater} onClick={() => handleOptionClick("Later")}>Move to Later</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {props.name === "ToDo" && (
        <button className={s.button} onClick={props.addTask}>
          Add Task
        </button>
      )}
    </div>
  );
};

export default PoolItem;