import React from 'react'

export default function Comment({comment}) {
  return (
    <div style={{display: 'flex'}}>
<p> <h7 style={{color: 'grey', marginRight: '10px'}}>
{comment.user_name}: 
</h7>
   {comment.text}</p>
<p></p>

    </div>
  )
}

