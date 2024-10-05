import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className={`${!isMenuOpen ? "" : "ml-[280px]"} `}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer