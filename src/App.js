import React, { useState } from 'react'

import './App.css';
import Comments from './js/components/Comments'
import Reply from './js/components/Reply'
import data from './data.json'

function App() {

  const [commentsData, setCommentsData] = useState(data);
  const [newId, setNewId] = useState(5);
  const [reset, setReset] = useState(false);

  const handleAddComment = (comment) => {
    setCommentsData(prevState => ({
      ...prevState,
      comments: [...prevState.comments, comment]
    }));
    localStorage.setItem('commentsData', commentsData);
    setNewId(prevState => prevState + 1);
  }

  const handleReset = () => {
    setReset(true);
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="app">
      <div className="content">
        <div className="wrapper">
          {commentsData.comments ?
            <Comments
              currentUser={commentsData.currentUser}
              comments={commentsData.comments}
              newId={newId}
              reset={reset}
            />
            : <em>No comments yet</em>}
          <Reply newId={newId} onSubmit={handleAddComment} type="send" currentUser={commentsData.currentUser} />
        </div>
      </div>
      <div className="footer">
        <button aria-label="Reset Stores" className="reset" onClick={handleReset}>Reset</button>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://twitter.com/mixchex" target="_blank" rel="noopener noreferrer">Mike Cheshire</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
