import React from 'react';
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SakuraLogo from './assets/sakura_logo.png';

function Header() {
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
            {/* <div className="header__option">
                <StorefrontOutlinedIcon fontSize='large'/>
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize='large'/>
            </div> */}
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>タナトン・ホルム</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            {/* <IconButton>
                <ForumIcon />
            </IconButton> */}
                <IconButton>
            <NotificationsIcon />
                </IconButton>
            {/* <IconButton>
                <ExpandMoreIcon />
            </IconButton> */}
            
        </div>

    </div>
  )
}

export default Header