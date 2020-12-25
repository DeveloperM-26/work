
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    marginTop: 60
  },
 
  titleBar: {
    // background:
    //   'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    //   'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
 
  customImg:{
    width: 'calc(100% + 2px)',
    pointerEvents: 'none',
    objectFit: 'cover',
  },
  tile: {
      display: 'grid'
  }
}));

const tileData = [
       {
         img: 'https://cdn.codigo.co/uploads/2018/04/711.jpg',
         title: 'Retail & Entertainment',
         category: '7Rewards',
         cols: {
             sm: 3, // ipad 
             lg: 1.5, // desktop
             md: 2 // ipad Pro
         },
       },
       {
           img: 'https://cdn.codigo.co/uploads/2018/12/MYR.jpg',
           title: 'MyRepublic Mobile',
           category: 'Telco',
           cols: {
                sm: 1.5,
                lg: 0.75,
                md:  1

           },
       },
       {
            img: 'https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg',
            title: 'ComfortDelGro',
            category: 'Transport & Logistics',
            cols: {
                sm: 1.5,
                lg: 0.75,
                md:  2

            }
        },
        {
            img: 'https://cdn.codigo.co/uploads/2018/08/FPOL.jpg',
            title: 'FairPrice Online',
            category: 'Retail & Entertainment',
            cols: {
                sm: 3,
                lg: 1.5,
                md: 1

            }
        },
        {
          img: 'https://cdn.codigo.co/uploads/2018/12/ck.jpg',
          title: 'Charles & Keith / Pedro',
          category: 'Retail & Entertainment', 
          cols: {
              sm: 3,
              lg: 1.5,
             md: 2
        }
      },
      {
       img: 'https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg',
       title: 'Justice League',
       category: 'Retail & Entertainment',
       cols: {
           sm: 3,
           lg: 1.5,
         md: 1
    }
        },
        {
            img: 'https://cdn.codigo.co/uploads/2018/12/FF-1.jpg',
            title: 'FastFast',
            category: 'Transport & Logistics, Co-incubation, Start-ups',
            cols: {
                sm: 3,
                lg: 1.5,
             md: 2
        }
        },
        {
            img: 'https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg',
            title: 'Fullerton Health',
            category: 'Healthcare',
            cols: {
                sm: 1.5,
                lg: 0.8,
             md: 1
        }
        },
        {
        img: 'https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg',
        title: 'Sky Premium',
        category: 'Lifestyle',
        cols: {
            sm: 1.5,
            lg: 0.8,
         md: 2
    }
        },
        {
            img: 'https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg',
            title: 'T Singapore',
            category: 'Lifestyle',
            cols: {
                sm: 3,
                lg: 1.4,
             md: 1
        }
        },
        {
            img: 'https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg',
            title: 'SingPost',
            category: 'Transport & Logistics',
            cols: {
                sm: 1.5,
                lg: 0.75,
             md: 2
        }
             },
             
             {
                 img: 'https://cdn.codigo.co/uploads/2018/12/dineinn.jpg',
                 title: 'Dine Inn',
                 category: 'Co-incubation, Start-ups, Food & Beverage',
                 cols: {
                     sm: 1.5,
                     lg: 0.75,
                     md: 1
                }
             },
             {
             img: 'https://cdn.codigo.co/uploads/2018/11/siemens.jpg',
             title: 'Siemens Engineering',
             category: 'Transport & Logistics',
             cols: {
                 sm: 1.5,
                 lg: 0.75,
                 md: 1
            }
             },
             {
                img: 'https://cdn.codigo.co/uploads/2018/12/f1.jpg',
                title: 'Singapore Grand Prix',
                category: 'Co-incubation, Start-ups, Food & Beverage',
                cols: {
                    sm: 1.5,
                    lg: 0.75,
                 md: 1
            }
            },
            {
            img: 'https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg',
            title: "McDonald's",
            category: 'Food & Beverage',
            cols: {
                sm: 1.5,
                lg: 0.75,
             md: 1
        }
            },
     ];

function Cards(props) {
  const classes = useStyles();
  const imgHeight =  props.width === 'xs' ? 280 : props.width === 'md' ? 430 : props.width === 'sm' ? 322.5 : 443
  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" cols={3} style={{ margin: 0 }}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} classes={{
            tile: classes.tile,
            
          }} className="ss" style={{ display: 'grid', padding: 0 }} cols={ props.width === 'lg' ? tile.cols.lg : props.width === 'md' ? tile.cols.md : props.width === 'sm' ? tile.cols.sm : 3} rows={1} >
            <img src={tile.img} alt={tile.title} className={classes.customImg} style={{ height: imgHeight }} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default withWidth()(Cards)