import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])

 const [searchParams]=useSearchParams()
 console.log(searchParams.get('v')); // give video id 

  return (
    <div className='mt-24 px-5'>
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+ searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default WatchPage