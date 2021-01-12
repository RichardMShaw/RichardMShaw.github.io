import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    background: 'linear-gradient(rgba(250,0,0,0.5),transparent)',
    backgroundColor: 'orange',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textShadow: '2px 2px #ff0000',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
}))

const Navbar = ({ toggleDrawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bg}>
          <Typography className={classes.title} variant="h6" noWrap>
            Richard Morgan Shaw
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
