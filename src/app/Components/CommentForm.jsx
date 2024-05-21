import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComments } from './Redux/userComments';

const CommentForm = () => {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        // console.log(comment);
        dispatch(addComments(comment));
        setComment("");
    };

    return (
        <div className="commentForm">
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter your comment..."
                rows={4}
                cols={50}
            ></textarea>
            <button className="submitButton" onClick={handleSubmitComment}>
                Submit
            </button>
        </div>
    );
};

export default CommentForm;
