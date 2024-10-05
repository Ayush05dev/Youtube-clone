import React from 'react'
import Button from './Button'
import './buttonListStyle.css'
import { useSelector } from 'react-redux'

const ButtonList = () => {
  const btnList =[ "All","cricket" ,'Songs','Comedy',"Movies","Gaming" ,"Horror","Live" ,"Live" ,"Live"  ,"cricket" ,"cricket" ,"cricket" ,"cricket" ,"cricket" ,"cricket" ,"cricket" ,"cricket" ]

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)


  return (
    <div className={`fixed top-24  right-0 bg-white  ${!isMenuOpen ? "left-[150px]" : "left-[280px]"}`}>
    <div className='flex overflow-x-scroll space-x-4 no-scrollbar h-30 p-2   '>
      {btnList.map((item)=>(
        <Button name={item}/>
      ))}
      </div>
      </div>
  )
}

export default ButtonList