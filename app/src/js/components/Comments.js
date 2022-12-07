import React from 'react'
import Comment from './Comment'

const Comments = ({
    comments = [],
    currentUser,
    reset,
    newId
}) => {
    return (
        comments.length ? 
        <ul className="comments">
            {comments.map((comment, i) =>
                <li key={i}>
                    <Comment
                        comment={comment}
                        currentUser={currentUser}
                        newId={newId}
                        reset={reset}
                    />
                </li>
            )}
        </ul>: null
    )
}
export default Comments;