import React from 'react'
import Comment from './Comment'
const CommentsList = ({comments}) => {
  return (
    // don't use indexes as keys
    comments.map((comment,index)=>(
        <div>
        <Comment key={index} data={comment}/>
        {comment.replies && <div className='pl-5 border border-l-black ml-5'>
                {/* here we are using recursion type calling same component inside it */}
         <CommentsList comments={comment.replies}/>
        </div>}
        </div>
    ))
  )
}

export default CommentsList