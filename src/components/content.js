import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh'
  },
  contentWrapper: {
    width: '75%',
    margin: '0 auto',
    paddingTop: 153,
    [theme.breakpoints.down('md')]: {
        width: '85%'
      },
  },
  mainHeader: {
    fontWeight: 800,
    fontSize: 62,
    lineHeight: '72px',
    color: '#000',
    [theme.breakpoints.only('xs')]: { // mobile
        fontSize: '13vw',
        lineHeight: '12vw',
        // display: 'inline',
      },
    [theme.breakpoints.only('sm')]:{
        fontSize: '49.92px',
    },
    [theme.breakpoints.only('md')]: { // mobile
        fontSize: '6.5vw'
    },  
  },
  para:{
      fontSize: 16
  },
  wrapper: {
    alignSelf: 'center',
    padding: '10px 25px 10px 0',
    cursor: 'pointer'
  },
  subTitle:{
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      marginBottom: 15
  },
  itemWrapper: {
    padding: '10px 0'
  },
  legendIcon:{
    width: 13,
    height: 13,
    marginRight: 10,
    float: 'left',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%'
  },
  legendText: {
    fontSize: 10,
    letterSpacing: '.01em',
    marginTop: 2
  },
  mainWrapper: {
    display: 'inline-grid',
    alignSelf: 'end',
    gridColumn: 3,
    gridRow: 2
  },
  legend:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    
    [theme.breakpoints.only('sm')]:{
       marginTop: 60
    },
  },
  categoryWrapper: {
    [theme.breakpoints.only('xs')]: { 
        display: 'none'
       },
  }
}));

export default function Content() {
  const classes = useStyles();
    const [items, setitems] = useState([
        { title: 'All' }, 
        { title: 'Food & Beverage' },
        { title: 'Media' },
        { title: 'Transport & Logistics' },
        { title: 'Banking & Finance' },
        { title: 'Lifestyle' },
        { title: 'Co-incubation' },
        { title: 'Healthcare' },
        { title: 'Retail & Entertainment' },
        { title: 'Telco' },
        { title: 'Others' },
        { title: 'Start-ups' },
    ])
    const [legends, setlegends] = useState([
        { title: 'App', src: 'url(https://www.codigo.co/img/ui/ico-app.svg)' },
        { title: 'WEB', src: 'url(https://www.codigo.co/img/ui/ico-web.svg)' },
        { title: 'CMS', src: 'url(https://www.codigo.co/img/ui/ico-cms.svg)' },
        { title: 'UI/UX', src: 'url(https://www.codigo.co/img/ui/ico-uiux.svg)' },
    ])
  return (
    <section className={classes.root}>
        <section className={classes.contentWrapper}>
            <Fade bottom duration={1500}>
                <p className={classes.mainHeader}>Here’s 5% of </p>
                <p className={classes.mainHeader}>our published work.</p>
                <p className={classes.mainHeader} style={{ color: '#d5333e' }}>See 100% of our power.</p>
           </Fade>
           <Fade bottom duration={1500} delay={100}>
                <Grid container style={{ marginTop: 48 }} className={classes.categoryWrapper}>
                <Grid item xs={9} sm={12} md={9}>
                    <Grid container>
                    {
                        items.map((item, i) => {
                            return(
                                <Grid item xs={4} key={i}>
                                    <div className={classes.wrapper}>
                                        <Typography className={classNames(classes.para, 'font_regular')}>{item.title}</Typography>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>
                <div className={classes.legend}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-end"
                        className="legendWrapper"
                    >
                        {
                            legends.map((item, i) => {
                                return(
                                    <React.Fragment key={i}>
                                        <div style={{width: '50%', paddingLeft: 20}} className={classes.itemWrapper}>
                                        <Grid item>
                                            <div className={classes.legendIcon} style={{ backgroundImage: item.src }}></div>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap className={classNames(classes.legendText, 'font_regular')}>{item.title}</Typography>
                                        </Grid>
                                        </div>
                                       
                                    </React.Fragment>
                                )
                            })
                        }
                           
                        </Grid>
                    </div>
            </Grid>
            </Fade>
        </section>
     
    </section>
  );
}
