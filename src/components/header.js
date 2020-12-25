
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  logoStyle: {
    width: 145,
    height: 19,
    position: 'absolute',
    top: 45,
    [theme.breakpoints.down('sm')]: { 
      top: '40%',
      width: 110,
      left: 20
    },
    
  },
  root: {
    background: '#fff',
    boxShadow: 'none'
  },
  navWrap: {
    display: 'flex',
    position: 'absolute',
    right: 100,
    alignItems: 'baseline',
    right: 44,
    top: 30
  },
  navItemStyle: {
    cursor: 'pointer',
    fontSize: 14,
    color: '#1f1f1f',
    fontWeight: '700',
    display: 'inline-block',
    marginRight: 60,
    paddingTop: 2
  },
  btnStyle :{
    borderRadius: 50,
    textTransform: 'initial',
    padding: '12px 23px',
    fontSize: 14,
    background: '#3a2837'
  }
}));
export default function Header(props) {
  const [navItems, setnavItems] = useState([
    {
      title: 'Work', active: true
    },
    {
      title: 'Solutions', active: false
    },
    {
      title: 'Services', active: false
    },
    {
      title: 'About us', active: false
    },
    {
      title: 'Blog', active: false
    }
  ])
  const classes = useStyles();
  const desktopToolbar = (
      <React.Fragment>
        <Toolbar style={{ height: 100, padding: 50 }}>
            <Typography
            component="div"
            color="inherit"
            align="left"
            noWrap
          >
            <Router>
              <Link to='/'>
                  <img src="https://www.codigo.co/img/ui/logo-codigo-red.svg" className={classes.logoStyle} alt="" />
              </Link>
            </Router>
          </Typography>
         
          <div className={classes.navWrap}>
          {
            navItems.map((item, i) => {
              return(
                <Typography key={i} component="p" className={classNames(classes.navItemStyle, item.active ? 'font_regular' : 'font_light')} >
                  {item.title}
               </Typography>
              )
            })
          }
          <Button variant="contained" color="secondary" className={classNames(classes.btnStyle, 'font_regular')}>
           Request a quote
          </Button>
            </div>
        
        </Toolbar>
      </React.Fragment>
  )
  const mobileToobar = (
    <React.Fragment>
      <Toolbar style={{ height: 70 }}>
        <Typography
          component="div"
          color="inherit"
          align="left"
          noWrap
        >
          <Router>
            <Link to='/'>
                <img src="https://www.codigo.co/img/ui/logo-codigo-red.svg" className={classes.logoStyle} alt="" />
            </Link>
          </Router>
        </Typography>

      </Toolbar>
      
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
      <Fade in={true} timeout={4000} >
        <AppBar classes={{
          root: classes.root,
        }}>
        <Hidden smDown>
          {desktopToolbar}
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          {mobileToobar}
        </Hidden>
          
        </AppBar>
      </Fade>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}