import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  bg: {
    backgroundImage: 'url(https://images7.alphacoders.com/415/415738.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    overflow: 'hidden',
    display: 'block',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
})

const Bg = () => {
  const classes = useStyles()
  return <div className={classes.bg}></div>
}
export default Bg
