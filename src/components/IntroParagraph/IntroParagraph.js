import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '75%',
    },
  },
  text: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  quote: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  textMobile: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  quoteMobile: {
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const IntroParagraph = () => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} className={classes.quote}>
              <Typography gutterBottom variant="h5" component="h2">
                "Turning ideas into code to streamline every day life."
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                Richard Morgan Shaw is my name and I'm a Full Stack Web
                Developer who specalizes in Backend development and Software
                Engineering roles. From mundane everyday life to hand crafted
                systems designed to ease workflow; My biggest focus is on making
                the lives of everyone easier through the power of programming.
                Beyond that, I love to use my skill to bring joy to others by
                entertaining them with basic apps I create in my free time.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.quoteMobile}
          >
            "Turning ideas into code to streamline every day life."
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textMobile}
          >
            Richard Morgan Shaw is my name and I'm a Full Stack Web Developer
            who specalizes in Backend development and Software Engineering
            roles. From mundane everyday life to hand crafted systems designed
            to ease workflow; My biggest focus is on making the lives of
            everyone easier through the power of programming. Beyond that, I
            love to use my skill to bring joy to others by entertaining them
            with basic apps I create in my free time.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default IntroParagraph
