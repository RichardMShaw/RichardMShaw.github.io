import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  bg: {
    background: 'linear-gradient(rgba(0, 98, 98, 0.5),transparent)',
    backgroundColor: '#00712c',
    width: '100%',
  },
  footer: {
    flexGrow: 1,
    textAlign: 'center',
    textShadow: '2px 2px #002479',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.bg}>
        <Grid container>
          <Grid item xs={3}>
            <Typography className={classes.footer} variant="h6" noWrap>
              Contact:Yay
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
