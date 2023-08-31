import React from 'react'

const MyPage = () => {
  return (
    <div>
      ID: {localStorage.getItem('userId')}
    </div>
  )
}

export default MyPage
