import React from 'react'

export default function Comment({comment}) {
  return (
    <div>
<p>{comment.text}</p>
<p>{comment.user_name}</p>

    </div>
  )
}

