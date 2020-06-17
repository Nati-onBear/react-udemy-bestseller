import React from 'react'

const UserOutput = (props) => {
  const { username } = props;

  return (
    <div>
      <p>User name is {username}</p>
      <p>We are Groot!</p>
    </div>
  )
}


export default UserOutput
