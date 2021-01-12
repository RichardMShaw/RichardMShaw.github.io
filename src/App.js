import Navbar from './components/Navbar'
import Project from './components/Project'
import IntroParagraph from './components/IntroParagraph'
import Footer from './components/Footer'
import Bg from './components/Bg'
import Divider from './components/Divider'

const App = () => {
  return (
    <div>
      <Bg />
      <Navbar />
      <Divider text="About Me" />
      <IntroParagraph />
      <Divider text="Projects" />
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
      <Footer />
    </div>
  )
}

export default App
