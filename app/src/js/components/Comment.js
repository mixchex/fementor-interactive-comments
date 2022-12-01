import React, { useState, useRef, useEffect } from "react"
import Reply from './Reply'
import Comments from './Comments'
import Modal from './Modal'

const Comment = ({
    comment,
    currentUser,
    onReply,
    onUpdate,
    newId
}) => {

    
    const commentId = `commentId${comment.id}`;
    
    const [commentData, setCommentData] = useState(comment);
    const [reply, setReply] = useState(false);
    const [editing, setEditing] = useState(false);
    const [textareaStyles, setTextareaStyles] = useState({ 'height': '96px'})
    const [showModal, setShowModal] = useState(false);
    const [deletedComment, setDeletedComment] = useState(false);
    const [commentGroupClasses, setCommentGroupClasses] = useState('comment-group');
    const [replyGroupClasses, setReplyGroupClasses] = useState('comment-group');
    const [commentEditContent, setCommentEditContent] = useState(commentData.content);

    const updateTextareaRef = useRef();

    useEffect(() => {
        setComment();
    }, []);

    useEffect(() => {
        if (editing) {
            setTextareaStyles({ 'height': updateTextareaRef.current.scrollHeight + 2 + "px" });
        }
    }, [editing]);

    const handleCommentUpdate = () => {
        console.log('content', commentEditContent);
        const updatedComment = prevState => ({
            ...prevState,
            content: commentEditContent
        });
        setCommentData(updatedComment(comment));
        localStorage.setItem(commentId+'comment', commentEditContent);
        setEditing(false);
    }

    const handleCommentDelete = () => {
        setShowModal(false);
        setCommentGroupClasses('comment-group comment-group--delete');
        setTimeout(() => {
            setDeletedComment(true);
        }, 2000);
    }

    const handleDownVote = () => {
        let newScore = commentData.score - 1;
        setCommentData(prevState => ({
            ...prevState,
            score: newScore
        }));
        localStorage.setItem(commentId + 'score', newScore);
    }

    const handleUpVote = () => {
        let newScore = commentData.score + 1;
        setCommentData(prevState => ({
            ...prevState,
            score: newScore
        }));
        localStorage.setItem(commentId + 'score', newScore);
    }    

    const handleNewReply = (reply) => {
        setCommentData(prevState => ({
            ...prevState,
            replies: [
                ...prevState.replies,
                reply.comment
            ]
        }));
        localStorage.setItem(commentId, commentData);
        
        setReplyGroupClasses('comment-group comment-group--close');
        setTimeout(() => {
            setReply(false);
        }, 1500);
    }

    const setComment = () => {
        if (localStorage.getItem(commentId + 'score') !== null) {
            console.log(localStorage.getItem(commentId + 'score'));
            setCommentData(prevState => ({
                ...prevState,
                score: parseInt(localStorage.getItem(commentId + 'score'))
            }));
            
        }
        if (localStorage.getItem(commentId + 'comment') !== null) {
            console.log('ddd',localStorage.getItem(commentId + 'comment'));
            setCommentData(prevState => ({
                ...prevState,
                content: localStorage.getItem(commentId+'comment')
            }));
        }
      
    }

    return (
        <>
            <Modal show={showModal}>
                <h3 className="modal__title">Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="comment__modal-buttons">
                    <button onClick={() => setShowModal(false)}
                        className="comment__input-button"
                    >
                        No, Cancel
                    </button>
                    <button onClick={() => handleCommentDelete()}
                        className="comment__input-button comment__input-button--warning"
                    >
                    Yes, Delete
                    </button>
                </div>
            </Modal>
            {!deletedComment &&
                <div className={commentGroupClasses}>
                    <div className="comment">
                        <div className="comment__aside">
                            <div className="comment__vote">
                                <button onClick={() => handleUpVote() } className="comment__vote-button">
                                    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" /></svg>
                                </button>
                                <div className="comment__vote-score">
                                    {commentData.score}
                                </div>
                                <button onClick={() => handleDownVote() } className="comment__vote-button">
                                    <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="comment__main">
                            <div className="comment__head">
                                <div className="comment__meta">
                                    <div className="comment__user">
                                        <img
                                            src={commentData.user.image.png}
                                            alt={commentData.user.username}
                                            className="comment__avatar comment__avatar--with-username"
                                        />
                                        <span className="comment__username">{commentData.user.username}</span>
                                        {commentData.user.username === currentUser.username &&
                                            <span className="comment__tag comment__tag--owner">
                                                you
                                            </span>
                                        }
                                    </div>
                                    <span className="comment__age">
                                        {commentData.createdAt}
                                    </span>
                                </div>
                                <div className="comment__interactions">
                                    {commentData.user.username === currentUser.username ?
                                        <>
                                            <button onClick={() => setShowModal(true)} className="comment__quick-button comment__quick-button--delete">
                                                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" /></svg>
                                                Delete
                                            </button>
                                            <button onClick={() => { setEditing(!editing); setCommentEditContent(commentData.content) }} className="comment__quick-button comment__quick-button--edit">
                                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" /></svg>
                                                Edit
                                            </button>
                                        </>
                                        :
                                        <button onClick={() => setReply(!reply)} className="comment__quick-button comment__quick-button--reply">
                                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" /></svg>
                                            Reply
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className="comment__body">
                                {editing ?
                                    <div>
                                        <div className="comment__input-container">
                                            <label className="sr-only" htmlFor={`replyToComment${commentData.id}`}>Edit reply</label>
                                            <textarea
                                                id={`replyToComment${commentData.id}`}
                                                name="reply"
                                                ref={updateTextareaRef}
                                                className="comment__input-text"
                                                style={textareaStyles}
                                                value={commentEditContent}
                                                onChange={(e) => setCommentEditContent(e.target.value)}
                                            />
                                        </div>
                                        <div className="comment__input-update">
                                            <button onClick={ handleCommentUpdate} className="comment__input-button comment__input-button--primary">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                    : commentData.content}
                            </div>
                        </div>
                    </div>
                    {reply && <div className={replyGroupClasses}><Reply newId={newId} comment={comment} currentUser={currentUser} onSubmit={handleNewReply} /></div>}
                    <Comments id={commentData.id} currentUser={currentUser} comments={commentData.replies} />
                </div>
            }
        </>
    )
}
export default Comment;