import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '700',
  },
}))

const Divider = (props) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.text}>{props.text}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Divider
