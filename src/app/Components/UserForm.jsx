import React, { useState } from 'react';
import { addUsers } from './Redux/userSlice';
import { useDispatch } from 'react-redux';

const UserForm = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const handleInputValue = (e) => {
        setUserName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUsers(userName));
        console.log(userName);
        setUserName("")
    }
  return (
    <div className="userForm">
        <input type='text' placeholder='Enter your name...' onChange={handleInputValue} value={userName}></input>
        <button className='submitButton' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UserForm
