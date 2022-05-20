import "./Header.css";

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import {
    Avatar,
    Button,
    IconButton,
    Link,
    CircularProgress,
} from '@mui/material';


import SakuraLogo from './assets/sakura_logo.png';
import { useStateValue } from './StateProvider';
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";

function Header({ onToggle , onResToggle , show }) {
  const [{ user }, dispatch] = useStateValue();
  const location = useLocation();
  const navigate = useNavigate();

  const LinkWithIcon = (props) => (
    <Link to={props.link} component={RouterLink} >
      <div className={[
          'header__option',
          (location.pathname == props.link) ? ' header__option--active' : ''
        ].join(' ')
      }>
      {props.icon}
      </div>
    </Link>
  );

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
            <LinkWithIcon link="/" icon={<HomeIcon fontSize='large'/>}/>
            <LinkWithIcon link="/collection" icon={<BookOutlinedIcon fontSize='large'/>}/>
            <LinkWithIcon link="/review" icon={<CollectionsBookmarkOutlinedIcon fontSize='large'/>}/>
        </div>

        <div className="header__right">
            {user != null ? (
                <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
                <IconButton onClick={onToggle} >
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
            </div>
            ) : (
                <div className='loginbutton'><Button onClick={_ => navigate('/login')}>ロクイン</Button></div>
            )}
            
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
                    {user != null ? (
                        <div className="header__info">
                        <Avatar src={user.photoURL} />
                        <h4>{user.displayName}</h4>
                    </div>
                    ) : (
                        <Button onClick={_ => navigate('/login')}>ロクイン</Button>
                    )}
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

export default Header;