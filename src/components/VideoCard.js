import React from 'react'
import { formatCompactNumber } from '../utils/helper'

const VideoCard = ({info}) => {
   // console.log(info) 
    const {snippet,statistics}=info
    const {channelTitle , title , thumbnails ,publishedAt} =snippet
  return (
    
    <div className='p-2 m-2 w-80 shadow-lg'>
        <img className='rounded-lg' alt='thumnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold m-1 line-clamp-2'>{title} </li>
            <li>{channelTitle}</li>
            <li>{formatCompactNumber( statistics.viewCount)} views  {(Math.abs(new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>
        </ul>
    </div>
  )
}

export default VideoCard


// {title.lenght>60 ?title.slice(0,60) + '...': title }