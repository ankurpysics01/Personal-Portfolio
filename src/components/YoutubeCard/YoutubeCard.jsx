import React from 'react'
import { Typography } from '@mui/material';
import "./YoutubeCard.css";

const YoutubeCard =({
    url = "https://www.youtube.com",
    title="Title Here",
    image,
}) =>{
  return (
    <div className='youtubeCard'>
        <a href={url} target='blank'>
            <img src={image} alt={title} />
            <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default YoutubeCard;