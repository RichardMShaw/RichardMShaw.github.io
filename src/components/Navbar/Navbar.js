import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    background: 'linear-gradient(rgba(0, 98, 98, 0.5),transparent)',
    backgroundColor: '#00712c',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    textShadow: '2px 2px #002479',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  button: {
    color: 'white',
    fontSize: '1rem',
    display: 'none',
    textShadow: '2px 2px #002479',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
          <Button
            className={classes.button}
            size="small"
            color="primary"
            href="https://drive.google.com/file/d/1vTpKn-WlTTuLsVjV0Itq_NTzNT6rsZdT/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
          <Button
            className={classes.button}
            size="small"
            color="primary"
            href="https://github.com/RichardMShaw"
            target="_blank"
          >
            Github
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
