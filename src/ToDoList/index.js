import React, { useState, useCallback } from 'react';
import AddList from './addList';
import ListAll from './listAll';
import "./todoList.css";

const ToDoList = () => {
    const [list, setList] = useState('');
    const [AllList, setAllList] = useState([]);

    const AddToList = useCallback(()=>{
        setAllList(prevAllList => [...prevAllList, list]);
        setList('');
    },[list])

  return (
    <div>
        <h3>ToDoList</h3>
        <AddList list={list} setList={setList} AddToList={AddToList}/>
        <ListAll AllList={AllList}/>
    </div>
  )
}

export default ToDoList