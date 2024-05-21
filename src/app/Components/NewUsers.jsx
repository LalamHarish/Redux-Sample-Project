import React from 'react';
import { useSelector } from 'react-redux';

const NewUsers = () => {
  const usersList = useSelector((state) => {

    return state.subscribers.users
  })
  console.log(usersList)
  return (
    <div className='userSection'>
      <h1>NewUsers: </h1>
      <ul>
        {usersList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  )
}

export default NewUsers