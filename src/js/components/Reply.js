import React, { useState } from "react";

const Reply = ({
    comment,
    currentUser,
    type = "reply",
    onSubmit,
    newId
}) => {

    const [textareaValue, setTextareaValue] = useState('');

    const fieldId = type === 'reply' ? `replyToComment${comment.id}` : 'addComment';
    const labelText = type === 'reply' ? `Reply to ${comment.user.username}` : 'Add your comment';
    const placeholderText = type === 'reply' ? 'Add a reply...' : 'Add a comment...';

    const submitData = () => {
        let data = {};
        data = {
            "id": newId,
            "content": textareaValue,
            "createdAt": "now",
            "score": 0,
            "user": currentUser,
            "replies": []
        };
        setTextareaValue('');
        if (type === 'reply') {
            data.replyingTo = comment.user.username;
            return {
                id: comment.id,
                comment: data
            };
        }
        else {
            return data
        }
    } 
    return (
        <div className="comment comment--reply">
            <div className="comment__aside">
            <img
                src={currentUser.image.png}
                alt={currentUser.username}
                className="comment__avatar comment__avatar--current"
            />
            </div>
            <div className="comment__main">
                <div className="comment__input">
                    <div className="comment__input-container">
                        <label className="sr-only" htmlFor={fieldId}>{ labelText }</label>
                        <textarea
                            id={fieldId}
                            name="reply"
                            className="comment__input-text"
                            placeholder={placeholderText}
                            value={textareaValue}
                            onChange={(e)=>setTextareaValue(e.target.value)}
                        ></textarea>
                    </div>
                    <button disabled={textareaValue === ''} onClick={ () => onSubmit(submitData()) } className="comment__input-button comment__input-button--primary">
                        {type === 'reply' ? 'Reply' : 'Send'}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Reply;