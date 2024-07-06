import React from 'react'
import { Typography } from '@mui/material'
import './profile.css'
import image from '../../assets/images/lima.jpg'
import CustomTimeline from '../Timeline/Timeline'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className="name">Tasnim Lima</Typography>
        <Typography className="title">Web developer</Typography>
      </div>
      <figure className='profile_img'>
        <img src={image} alt="img" />

      </figure>
      <div className='information'>
        <CustomTimeline/>
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}

export default Profile
