import React from 'react'

const AddList = ({setList,list,AddToList}) => {
    
  return (
    <div>
        <h1>AddList</h1>
        <label htmlFor="list"/>
        <input type='text' value={list} name="list" onChange={(e)=>setList(e.target.value)}/>
        <button onClick={()=>{AddToList()}}>Add</button>
    </div>
  )
}

export default AddList