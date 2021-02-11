import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Button, List } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    backgroundColor: 'rgba(0, 98, 98, 0.90)',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '75%',
    },
  },
  header: {
    fontSize: '3rem',
    color: 'white',
    textAlign: 'center',
    textShadow: '1px 1px 0px black',
  },
  headerSmall: {
    fontSize: '2rem',
    color: 'white',
    textAlign: 'center',
    textShadow: '1px 1px 0px black',
  },
  textAddress: {
    textAlign: 'center',
    fontSize: '1rem',
    color: 'white',
    textShadow: '1px 1px 0px black',
  },
  text: {
    display: 'none',
    fontSize: '1rem',
    color: 'white',
    textShadow: '1px 1px 0px black',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  quote: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'none',
    color: 'white',
    fontSize: '2rem',
    textShadow: '1px 1px 0px black',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  textMobile: {
    display: 'block',
    fontSize: '1rem',
    color: 'white',
    textShadow: '1px 1px 0px black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  quoteMobile: {
    display: 'block',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    textShadow: '1px 1px 0px black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  list: {
    textAlign: 'center',
  },
  btn: {
    height: '3rem',
  },
}))

const IntroParagraph = () => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.header}
          >
            Richard Morgan Shaw
          </Typography>
          <hr></hr>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} className={classes.quote}>
              <Typography gutterBottom className={classes.quote}>
                <em>"Turning ideas into code to streamline every day life."</em>
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
                I'm a Full Stack Web Developer who specalizes in Backend
                development and Software Engineering roles.
              </Typography>
              <p></p>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                From mundane everyday life to hand crafted systems designed to
                ease workflow; My biggest focus is on making the lives of
                everyone easier through the power of programming. Beyond that, I
                love to use my skill to bring joy to others by entertaining them
                with basic apps I create in my free time.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.quoteMobile}
          >
            <em>"Turning ideas into code to streamline every day life."</em>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textMobile}
          >
            I'm a Full Stack Web Developer who specalizes in Backend development
            and Software Engineering roles.
          </Typography>
          <p></p>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textMobile}
          >
            From mundane everyday life to hand crafted systems designed to ease
            workflow; My biggest focus is on making the lives of everyone easier
            through the power of programming. Beyond that, I love to use my
            skill to bring joy to others by entertaining them with basic apps I
            create in my free time.
          </Typography>
          <hr></hr>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.header}
          >
            Contact Me
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textAddress}
          >
            238 Rochester St Costa Mesa, CA 92627, Apt B
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textAddress}
          >
            (949)-763-1376
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textAddress}
          >
            richardmorganshaw@gmail.com
          </Typography>
          <List className={classes.list}>
            <Button
              size="small"
              color="primary"
              href="https://github.com/RichardMShaw"
              target="_blank"
            >
              <img
                className={classes.btn}
                src="assets/githubIcon.png"
                alt="githubIcon"
              />
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.linkedin.com/in/richard-morgan-shaw/"
              target="_blank"
            >
              <img
                className={classes.btn}
                src="assets/linkIcon.png"
                alt="linkIcon"
              />
            </Button>
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default IntroParagraph
