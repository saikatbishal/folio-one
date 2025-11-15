import React from 'react'
import Navbar from './Navbar'

type UserProps = {
    id: number,
name?: string,
username?: string,
email?: string,
image?: string,
bio?: string,

}

const UserProfile = ({name="Saikat Bishal", username = "saikatbishal", email="saikat@gmail.com", image="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", bio="I am a great developer"}: UserProps) => {
  return (
    <div className='w-screen'>
         <Navbar className="fixed top-0 z-50 bg-white shadow-md w-screen p-4 flex justify-end" />
      <div className='fixed top-20 flex flex-col items-center min-w-full h-full'><h1>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <img src={image} alt={name} height={50} width={50} />
      <p>{bio}</p></div>
    </div>
  )
}

export default UserProfile