import React from 'react'
import './sidebarOption.css'


const SidebarOptions = ({active, Icon, text, onClick}) => {
  return (
    <div onClick={onClick} className={`sidebarOption ${active && 'sidebarOption--active'}`} >
       <Icon/>
       <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions