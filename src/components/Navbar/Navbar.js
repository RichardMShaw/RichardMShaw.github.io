import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
    title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleMobile: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    textAlign:'center'
  }
}))

const Navbar = ({ toggleDrawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Richard Morgan Shaw
          </Typography>
          <Typography className={classes.titleMobile} variant="h6" noWrap>
            Richard Morgan Shaw
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
