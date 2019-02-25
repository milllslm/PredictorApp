import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandIcon from '@material-ui/icons/MoreHoriz';
import ChatIcon from '@material-ui/icons/Chat';
import CheckedIcon from '@material-ui/icons/CheckCircleOutline';


const styles = theme => ({
  card: {
    display: 'flex',
    maxWidth: 300,
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit/2,
    paddingBottom: theme.spacing.unit/2,
  },
});

function WTB_Card(props) {
  const { classes, theme } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h4" variant="h4">
          {props.data.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {props.data.description}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Rate: ${props.data.rate} per {props.data.rateQualifier}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Will need for: {props.data.maxDuration}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {props.data.category}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <a href={props.data.likeThisLink}>Like This</a>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <ExpandIcon  />
          </IconButton>
          <IconButton>
            <CheckedIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

WTB_Card.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(WTB_Card);