import React from 'react';
import { useSelector } from 'react-redux';

const NewComments = () => {
  const userComments = useSelector((state) => {
    return state.userComments.comments;
  });

  return (
    <div className='commentSection'>
      <h1>NewComments:</h1>
      <ul>
        {userComments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default NewComments