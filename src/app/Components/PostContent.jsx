import React, { useState } from 'react'
import NewUsers from './NewUsers'
import NewComments from './NewComments'
import UserForm from './UserForm'
import CommentForm from './CommentForm'
import { useDispatch } from 'react-redux'
import { increment } from './Redux/likesCounterSlice'

const PostContent = () => {
    const [userSubscribe, setUserSubscribe] = useState(false);
    const [userComment, setUserComment] = useState(false);

    const dispatch = useDispatch();
    const likeHandler = () => {
        dispatch(increment())
    }

    const handleSubscriber = () => {
        setUserSubscribe(true);
        setUserComment(false);
    };
    const handleComment = () => {
        setUserComment(true)
        setUserSubscribe(false);
    };
 
    return (
        <>
            <div className='postSection'>
                <div className='postContent'>
                    <img className="post" src="https://swall.teahub.io/photos/small/178-1781367_abominable-movie.jpg" alt="picture" />
                    <div className='userActions'>
                        <button className='userButton' onClick={handleSubscriber}>Subscribe</button>
                        <button className='userButton' onClick={handleComment}>Comment</button>
                        <button className='userButton' onClick={likeHandler}>Like</button>
                    </div>
                </div>
                <div className="postResults">
                    <NewUsers />
                    <NewComments />
                </div>
            </div>
            {userSubscribe && <UserForm />}
            {userComment &&  <CommentForm />}
           
        </>
    )
}

export default PostContent