import React from 'react';

const ListAll = ({AllList}) => {
  return (
    <ul>
        {
            AllList.map((val, id) => {
                return <li key={id}>{val}</li>
            })
        }
    </ul>
  )
}

export default ListAll