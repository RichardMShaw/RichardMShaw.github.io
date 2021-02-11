import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { List, Tooltip } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '95%',
    margin: 'auto',
    backgroundColor: 'rgba(0, 98, 98, 0.90)',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '75%',
    },
  },
  title: {
    fontSize: '3rem',
    color: 'white',
    textShadow: '1px 1px 0px black',
  },
  workflow: {
    fontSize: '1.5rem',
    color: 'white',
    textShadow: '1px 1px 0px black',
  },

  icon: {
    height: '5rem',
    margin: '0.5rem',
  },
}))

const Skills = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom className={classes.title}>
          Programming Languages & Tools
        </Typography>
        <List>
          <Tooltip title="HTML 5" aria-label="html5">
            <img
              src="assets/html5Icon.png"
              alt="html5Icon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="CSS 3" aria-label="css3">
            <img
              src="assets/cssIcon.png"
              alt="cssIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="Javescript" aria-label="javascript">
            <img
              src="assets/jsIcon.png"
              alt="jsIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="Node.js" aria-label="nodejs">
            <img
              src="assets/nodeIcon.png"
              alt="nodeIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="React Native" aria-label="react-native">
            <img
              src="assets/reactIcon.png"
              alt="reactIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="SQL" aria-label="sql">
            <img
              src="assets/sqlIcon.png"
              alt="sqlIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="Mongodb" aria-label="mongodb">
            <img
              src="assets/mongodbIcon.png"
              alt="mongodbIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="Python" aria-label="python">
            <img
              src="assets/pythonIcon.png"
              alt="pythonIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="C++" aria-label="c++">
            <img
              src="assets/cplusplusIcon.png"
              alt="cplusplusIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="C#" aria-label="c#">
            <img
              src="assets/csharpIcon.png"
              alt="csharpIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="Java" aria-label="java">
            <img
              src="assets/javaIcon.png"
              alt="javaIcon"
              className={classes.icon}
            />
          </Tooltip>
          <Tooltip title="VS Code" aria-label="vscode">
            <img
              src="assets/vscodeIcon.png"
              alt="vscodeIcon"
              className={classes.icon}
            />
          </Tooltip>
        </List>
        <Typography gutterBottom className={classes.title}>
          Workflow
        </Typography>
        <Typography gutterBottom className={classes.workflow}>
          -Modular
        </Typography>
        <Typography gutterBottom className={classes.workflow}>
          -Agile Methodology
        </Typography>
        <Typography gutterBottom className={classes.workflow}>
          -MERN Stack Developer
        </Typography>
        <Typography gutterBottom className={classes.workflow}>
          -Team Oriented
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Skills
