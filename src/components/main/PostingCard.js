import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostingCard = (posting) => {
  const [expanded, setExpanded] = React.useState(false);
  const [displayType, setDisplayType] = React.useState('-webkit-box');
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setDisplayType(expanded ? '-webkit-box' : 'block');
  };

  debugger;

  var contents = document.createElement('div');
  contents.innerHTML = posting.arr.htmlContent;

  let innerContent = '';
  contents.querySelectorAll('p').forEach((inner)=>{innerContent+=inner.innerText});

  const navigate = useNavigate();
  
  const CardClick = (param)=>{
    navigate(`/blogs/${posting.arr.blogID}/postings/${posting.arr.postingID}`);
  }

  return (
    <Card className='postingCard' sx={{ width: 340, minHeight: 455.08 }}
    onClick={CardClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`by ${posting.arr.homePostingUser.nickname}`}
        subheader={posting.arr.createDt.substring(0, posting.arr.createDt.indexOf('T'))}
      />
      <CardMedia
        component="img"
        height="194"
        image={posting.arr.thumbnailImageURL}
        alt="Paella dish"
      />
      <CardContent className='post'>
        {posting.arr.title}
        <Typography className='postContent' variant="body2" color="text.secondary" display={displayType}>
          {innerContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}

export default PostingCard;