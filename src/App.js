import Navbar from './components/Navbar'
import Project from './components/Project'
import IntroParagraph from './components/IntroParagraph'
import Bg from './components/Bg'
import Divider from './components/Divider'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Bg />
      <Navbar />
      <Divider text="About Me" />
      <IntroParagraph />
      <Divider text="Skills" />
      <Skills />
      <Divider text="Projects" />
      <Project
        image="https://soy-tofu-ca.herokuapp.com/static/media/dumplings.a1e2ebdf.jpg"
        alt="soyTofu.jpg"
        role="Role: Backend Developer/Database Manager"
        title="Rohst/Soy Tofu"
        desc="A fully functioning restaurant page with admin user authentication and online ordering."
        experience="The latest app I’ve worked on using and with the same team as the Fitness Edge app. Created within the short span of 9 days, I must say that I am proud of this one. We worked with an actual restaurant to model our database after and get the specifications for what our site should look like. We also settled on creating two websites for this app; One for the customers and another for the admins. On the customer side, I worked almost entirely on the menu page. I wanted it to be as user friendly as possible and went hard on the use of state management to achieve this goal. I had to keep in mind every sort of action a user might do and also what would be the most convenient for them while also keeping in mind that everything needed to be easy to understand at a glance. Not to mention their entire order needed to be saved somewhere temporarily so that we can send it to the database once they’ve finished. I also did a bit of work on the order forms by making sure the inputs were strict with what could be entered to prevent mistakes and also to make it easy for the easy to understand what’s going on. An example of this is adding dashes when entering credit card information and slashes when dates. On the Admin side of things, I was the sole developer on it. I created a page for the admin to add meals to the menu by inputting all the information on a form and submitting it to our database. Much like the Fitness Edge app, I did my best to ensure the form was easy to use and couldn’t take faulty data that could break the entire system. It was time consuming, but very much worth it in the end. At the moment, work on this app is on pause, but once the team and I wish to resume it, we will make sure it gets finished and used by our client."
        deploy="https://soy-tofu-ca.herokuapp.com/"
        github="https://github.com/nickdmrco/Soy_Tofu"
      />
      <Project
        image="https://raw.githubusercontent.com/ron-est/Fitness-Edge/main/public/assets/img/workout.jpg"
        alt="weightRack.jpg"
        role="Role: Backend Developer"
        title="Fitness Edge"
        desc="Have you wanted to start going to the gym but don't know where to start? Achieve your fitness goals with a plan in mind! Fitness Edge lets you add workouts from our database to a weekly schedule as well as input your own custom routines. Your body is your temple and every building always starts out with a solid blueprint. Starting planning your fitness journey today!"
        experience="I worked with a new team on this application and the results were a lot more successful than the last. We settled on a weekly calendar fitness app that allows users to register workouts into localstorage and even use pre-set regimes from our SQL database. I was tasked with managing the database, hooking it up to the front-end and adding functionality to the forms. I found the database management to be extremely easy and spent most of my time ensuring the forms were as polished as possible. I made sure that users couldn’t insert any faulty data through the use of error checking and I also kept in mind to check the data in localstorage when obtaining information from it. Error handling is a big priority for me as a developer, as I don’t want issues to arise later in development. In the end, we couldn’t get all our ideas in, but I’m proud with what we accomplished in a week."
        deploy="https://fitnessedge.herokuapp.com/"
        github="https://github.com/ron-est/Fitness-Edge"
      />
      <Project
        image="https://www.iqair.com/assets/img/enterprise/air-api/earth.jpg"
        alt="logo_squared.jpg"
        role="Role: Backend Developer"
        title="Breath Easy"
        desc="Curious what the air quality is at a local area, but you don't know the name? Not with this app! Using Google Map technology combined with Air Visual API, you can find how clean the air is by the simple push of a button!"
        experience="My first project working with a team and although it isn't finished, I learned a lot from it. We decided to use APIs, although we spent a good amount of time debating on what we should do. We settled on Google Maps and Air Visual APIs. I was tasked with reading the documentation and getting the functionality in place, while the rest of the team worked on the front-end. Figuring out how everything worked wasn’t as hard as I thought it would and ended up being rather simple. Sadly, there were errors caused due to us not using a server and we were pressed for time to finish. In the end, we couldn’t complete our app, but the knowledge I learned from it made it worth it."
        deploy="https://richardmshaw.github.io/Breath-Easy/"
        github="https://github.com/RichardMShaw/Breath-Easy"
      />
    </div>
  )
}

export default App
