import { React, } from '@xarc/react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';

const Header = ({ isNavOpened, onNavOpen }) => {
  const history = useHistory();

  const handleNavOpen = () => {
    onNavOpen(!isNavOpened);
  }

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <div className='header'>
      <div className='left-nav'>
        <Typography variant='h4' component='h2'>
          Walmart
        </Typography>
        <Icon className='nav-spark'>face</Icon>
      </div>
      <div className='right-nav'>
        <Button size='small' variant='text' onClick={() => routeChange('/')} >
          <HomeIcon /> Home
        </Button>
        <form method='get' action='/logout'>
          <Button type='submit' size='small' variant='text'>
            <LogoutIcon /> Logout
          </Button>
        </form>
        <IconButton size='medium' onClick={handleNavOpen} className='nav-toggle'>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
