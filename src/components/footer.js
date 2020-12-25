import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '100px 0 50px',
    position: 'relative',
    backgroundColor: '#fafafa',
    zIndex: 10
  },
  paper: {
    height: 100,
    float: 'left',
    padding: '20px 25px',
    cursor: 'pointer',
    borderRight: '1px solid rgba(0,0,0,.1)',
    '&:last-child': {borderRight: 0},
    [theme.breakpoints.down('sm')]: { 
     padding: 0,
     border: 0,
     borderBottom: '1px solid rgba(0,0,0,.1)'
    },
  },
  footerHeader: {
    fontWeight: 800,
    fontSize: 36,
    textAlign: 'center',
    color: '#d5333e',
    marginBottom: 75,
    display: 'block',
    [theme.breakpoints.down('sm')]: { 
      marginBottom: 35
    },

    
  },
  wrapper: {
    width: '90%',
    maxWidth: 1400,
    margin: '0 auto 85px',
    
  },
  item:{
    display: 'table',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: { 
      display: 'block',
      paddingTop: 20
    },
  },
  trustHeader:{
    display: 'inline-block',
    marginBottom: 3,
    [theme.breakpoints.down('sm')]: { 
      width: '100%'
    },
  },
  socialWrapper: {
    width: '90%',
    maxWidth: 220,
    textAlign: 'center',
    margin: '0 auto 30px',
    display: 'table'
  },
  para: {
    textAlign: 'center',
    fontSize: 14
  },
  iconStyle: {
    width: 20,
    height: 20,
    width: '20%',
    textAlign: 'center'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [items, setitems] = useState([
      { title: 'Build', description: 'Help you build something' },
      { title: 'Co-incubate', description: 'Co-incubate an idea together' },
      { title: 'Customise', description: 'Customise a solution for your business' },
      { title: 'Organise', description: 'Organise learning sessions with us' }
    ])
    const [socialIcons, setsocialIcons] = useState([
        { link: 'https://www.facebook.com/codigo.co/', src: "https://www.codigo.co/img/icons/social-facebook.svg" },
        { link: 'https://twitter.com/CodigoApps', src: "https://www.codigo.co/img/icons/social-twitter.svg" },
        { link: 'https://www.instagram.com/hellocodigo/', src: "https://www.codigo.co/img/icons/social-instagram.svg" },
        { link: 'https://www.linkedin.com/company/codigo-pte-ltd', src: "https://www.codigo.co/img/icons/social-linkedIn.svg" },
        
    ])

  return (
    <footer className={classes.root}>
        <span className={classes.footerHeader}>Let's have a chat</span>
       
        <Grid container className={classes.wrapper} >
            {
                items.map((item, i) => {
                    return(
                        <Grid item xs={12} md={3} sm={12} className={classes.paper} key={i}>
                            <div className={classes.item}>
                                <Box fontWeight="fontWeightBold" fontSize={26} className={`test ${classes.trustHeader} `}>{item.title}</Box>
                                <div className="font_regular">{item.description}</div>
                            </div>
                        </Grid>
                    )
                })
            }
            
        </Grid>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item md={12}>
                <div className={classes.socialWrapper}>
                    {
                        socialIcons.map((item, i) => {
                            return(
                                <a href={item.link} key={i} target="_blank" >
                                    <img src={item.src} className={classes.iconStyle} />
                                </a>
                            )
                        })
                    }
                    
                </div>
                <div className={classNames(classes.para, 'font_regular')}>Copyright © Codigo - Mobile App Developer Singapore</div>
                <div className={classNames(classes.para, 'font_regular')} style={{ marginTop: 15 }}>+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</div>
            </Grid>
        </Grid>
     </footer>
  );
}
