import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    backgroundColor: 'rgba(0, 98, 98, 0.90)',
    color: 'white',
    textShadow: '1px 1px 0px black',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '75%',
    },
    marginBottom: '2rem',
  },
  media: {
    height: 280,
  },
  desc: {
    color: 'white',
    textShadow: '1px 1px 0px black',
  },
  btn: {
    height: '3rem',
  },
}))

const Project = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h7" component="h3">
          {props.role}
        </Typography>
        <Typography gutterBottom variant="h7" component="h3">
          Description:
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          <em>{props.desc}</em>
        </Typography>
        <hr></hr>
        <Typography gutterBottom variant="h7" component="h3">
          Personal Experience:
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {props.experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.deploy}
          target="_blank"
        >
          <img
            className={classes.btn}
            src="assets/herokuIcon.png"
            alt="herokuIcon"
          />
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.github}
          target="_blank"
        >
          <img
            className={classes.btn}
            src="assets/githubIcon.png"
            alt="herokuIcon"
          />
        </Button>
      </CardActions>
    </Card>
  )
}

export default Project
