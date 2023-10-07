import React, {useState} from 'react'
import './Sidebar.css'
import SidebarOptions from "./SidebarOptions"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MessageIcon from '@mui/icons-material/Message';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


const Sidebar = () => {

  const [activeOption, setActiveOption] = useState('Home');

  const handleOptionClick = (optionText) => {
    setActiveOption(optionText);
  };
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar_twitterIcon'/>

        <SidebarOptions active={activeOption === "Home"} onClick={() => handleOptionClick("Home")} Icon ={HomeIcon} text="Home"/>
        <SidebarOptions active={activeOption === "Explore"} onClick={() => handleOptionClick("Explore")} Icon ={SearchIcon} text="Explore"/>
        <SidebarOptions active={activeOption === "Notifications"} onClick={() => handleOptionClick("Notifications")} Icon ={NotificationAddIcon} text="Notifications"/>
        <SidebarOptions active={activeOption === "Messages"} onClick={() => handleOptionClick("Messages")} Icon ={MessageIcon} text="Messages"/>
        <SidebarOptions active={activeOption === "Bookmarks"} onClick={() => handleOptionClick("Bookmarks")} Icon ={BookmarksIcon} text="Bookmarks"/>
        <SidebarOptions active={activeOption === "Profile"} onClick={() => handleOptionClick("Profile")} Icon ={Person2Icon} text="Profile"/>
        <SidebarOptions active={activeOption === "More"} onClick={() => handleOptionClick("More")} Icon ={MoreHorizIcon} text="More"/>
        <Button variant='outlined' className='sidebar_tweet' fullWidth>POST</Button>

        
        
    </div>
  )
}

export default Sidebar