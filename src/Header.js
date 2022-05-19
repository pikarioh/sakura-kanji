import React from 'react';
import "./Header.css";
import { useState, useCallback } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SakuraLogo from './assets/sakura_logo.png';
import { useStateValue } from './StateProvider';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ onToggle , onResToggle , show }) {
    const [{ user }, dispatch] = useStateValue();
   
  return (
    <div className="header">
        <div className="header__left">
            <img src={SakuraLogo} />
            <div className="header__input">
                <SearchIcon />
                <input placeholder='漢字検索' type="text" />
            </div>
        </div>
            
        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize='large'/>
            </div>
            <div className="header__option">
                <BookOutlinedIcon fontSize='large'/>
            </div>
            <div className="header__option">
                <CollectionsBookmarkOutlinedIcon fontSize='large'/>
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton onClick={onToggle} >
                <AddIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
        </div>

        <div className="header__res">
            <IconButton onClick={onResToggle}>
                <MenuIcon fontSize='large'/>
            </IconButton>
        </div>
        
        {show && ( <>
            <div className="header__resmenuspace" onClick={onResToggle}></div>
            <div className="header__resmenu">
                <div className="header__resmenutop">
                    <div className="header__resoption" onClick={onResToggle}>
                        <HomeIcon fontSize='large'/>
                        ホーム
                    </div>
                    <div className="header__resoption" onClick={onResToggle}>
                        <BookOutlinedIcon fontSize='large'/>
                        コレクション
                    </div>
                    <div className="header__resoption" onClick={onResToggle}>
                        <CollectionsBookmarkOutlinedIcon fontSize='large'/>
                        化合物
                    </div>
                </div>

                <div className="header__resmenubottom">
                    <div className="header__info">
                        <Avatar src={user.photoURL} />
                        <h4>{user.displayName}</h4>
                    </div>
                    <div className='header__resoptionbtm' onClick={(e)=>{onToggle(); onResToggle();}} >
                        <AddIcon fontSize='large'/>
                        漢字追加
                    </div>
                    <div className='header__resoptionbtm' >
                        <NotificationsIcon fontSize='large'/>
                        通知
                    </div>
                </div>
            </div>
            
        

        </>)}
        
    </div>
  )
}

export default Header