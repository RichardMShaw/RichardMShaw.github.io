import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
  },
}))

const IntroParagraph = () => {
  const classes = useStyles()

  return (
    <>
    <p className={classes.body}>
    </p>
    </>
  )
}

export default IntroParagraph