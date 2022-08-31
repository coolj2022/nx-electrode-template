import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './style.module.css';

export interface HeaderProps {
  isNavOpened: boolean;
  onNavOpen?: (status: boolean) => void;
};

export const Header = ({ isNavOpened, onNavOpen }: HeaderProps) => {
  const history = useHistory();

  const handleNavOpen = () => {
    onNavOpen && onNavOpen(!isNavOpened);
  }

  const routeChange = (path: string) => {
    history.push(path);
  };

  return (
    <div className={styles['header']}>
      <div className={styles['left-nav']}>
        <Typography variant='h4' component='h2'>
          Electrode App
        </Typography>
        <Icon className={styles['nav-spark']}>face</Icon>
      </div>
      <div className={styles['right-nav']}>
        <Button size='small' variant='text' onClick={() => routeChange('/')} >
          <HomeIcon /> Home
        </Button>
        <form method='get' action='/logout'>
          <Button type='submit' size='small' variant='text'>
            <LogoutIcon /> Logout
          </Button>
        </form>
        <IconButton size='medium' onClick={handleNavOpen} className={styles['nav-toggle']}>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

Header.defaultProps = {
  isNavOpened: false
};

export default Header;