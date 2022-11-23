import React from 'react'

function Profile() {
  let auth=localStorage.getItem('user');
  return (
    <div >
      <h1>{JSON.parse(auth).name}</h1>
    </div>
  )
}

export default Profile