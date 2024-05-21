import React from 'react';
import { UseSelector, useSelector } from 'react-redux';

const HeaderNavbar = () => {
  const storeState = useSelector((state) => state)

  // console.log("state",storeState)
  const {likes, subscribers, userComments} = storeState;

  return (
   <div className="headerNavbar">
    <h1>Subscribers: {subscribers.users.length}</h1>
    <h1>Comments: {userComments.comments.length}</h1>
    <h1>Likes: {likes.count}</h1>
   </div>
  )
}

export default HeaderNavbar
