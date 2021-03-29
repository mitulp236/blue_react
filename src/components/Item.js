import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"#CAD5E2"
  },
  media: {
    height: 140,
  },
});

function Item( props ) {

  const classes = useStyles();
  const { item } = props;

  const onPlay = (video_link) => {
    window.location.href = `${video_link}`
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${item.thumbnail_link}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
          <Typography 
            style={{height:"20px", 
              overflow:"hidden",
              fontFamily: 'Lobster, cursive',
              fontFamily: 'Titillium Web, sans-serif',
              fontWeight:"bold"
            }} 
            variant="body2" color="textSecondary" 
            component="p">
              {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{textAlign:"right"}}>
        <Button variant="contained" size="small" >
          Share
        </Button>
        <Button onClick={() => onPlay(item.video_link)}  variant="contained" size="small" color="primary">
          Play <PlayCircleFilledIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item