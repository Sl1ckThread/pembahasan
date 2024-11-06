import React, { useState } from 'react';

function TaskForm() {
  const [nama, setNama] = useState("");
  const [comment, setComment] = useState("");  

  const addTask = () => {
    if (nama && comment) {
      alert("Filled Successfully");
    } else {
      alert("Please enter a task and comment.");
      return;
    }

    // Reset form fields
    setNama("");
    setComment("");
  };

  return (
    <div className="bg-slate-400 w-max mt-[120px] mb-[120px] rounded-[40px] p-14 pl-20 pr-20 m-[auto] flex flex-col items-center justify-center space-y-4">
      <h1 className='text-white text-'>Form Excer</h1>
      <input 
        type="text" 
        id="nama" 
        value={nama} 
        onChange={(e) => setNama(e.target.value)} 
        placeholder="Enter Name"
        className='w-40 bg-slate-500 p-3 rounded-[10px]'
      />
      <input 
        type="text" 
        id="Comment" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Enter Comment"
        className='w-40 bg-slate-500 p-3 rounded-[10px] text-center'
      />
      <button className="bg-green-500 p-4 rounded-[10px] hover:bg-green-300"
      id="submit" 
      onClick={addTask}
      >Submit</button>
    </div>
  );
}

export default TaskForm;
