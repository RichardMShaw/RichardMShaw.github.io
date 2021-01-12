import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  bg: {
    background: 'linear-gradient(rgba(0, 98, 98, 0.5),transparent)',
    backgroundColor: '#00712c',
    width: '100%',
  },
  footer: {
    flexGrow: 1,
    textShadow: '2px 2px #002479',
  },
  p: {
    margin: 0,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.bg}>
        <Typography className={classes.footer} variant="h6">
          <p className={classes.p}>Contact Me:</p>
          <p className={classes.p}>Email: richardmorganshaw@gmail.com</p>
          <p className={classes.p}>Phone Number: (949)-763-1376</p>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
