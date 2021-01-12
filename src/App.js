import { makeStyles } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import Project from './components/Project'
import IntroParagraph from './components/IntroParagraph'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root:{
    backgroundColor: "#2424244f",
  },
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

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.bg}></div>
      <Navbar />
      <IntroParagraph />
      <h2>Projects</h2>
      <Project
        image="https://raw.githubusercontent.com/ron-est/Fitness-Edge/main/public/assets/img/workout.jpg"
        alt="weightRack.jpg"
        role="Role: Backend Developer"
        title="Fitness Edge"
        desc="Have you wanted to start going to the gym but don't know where to start? Achieve your fitness goals with a plan in mind! Fitness Edge lets you add workouts from our database to a weekly schedule as well as input your own custom routines. Your body is your temple and every building always starts out with a solid blueprint. Starting planning your fitness journey today!"
        deploy="https://fitnessedge.herokuapp.com/"
        github="https://github.com/ron-est/Fitness-Edge"
      />
      <Project
        image="https://www.iqair.com/assets/img/enterprise/air-api/earth.jpg"
        alt="logo_squared.jpg"
        role="Role: Backend Developer"
        title="Breath Easy"
        desc="Curious what the air quality is at a local area, but you don't know the name? Not with this app! Using Google Map technology combined with Air Visual API, you can find how clean the air is by the simple push of a button!"
        deploy="https://richardmshaw.github.io/Breath-Easy/"
        github="https://github.com/RichardMShaw/Breath-Easy"
      />
    </div>
  )
}

export default App
