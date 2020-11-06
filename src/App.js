import React from 'react'
import RuleButton from "./components/RuleButton"
import {makeStyles} from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Strat from "./components/Strat";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  rule: {
    textAlign: "center",
    marginTop: 10,
    display: 'inline-block',
    width: 600,
    padding: 10

  },
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 75
  },
  footerText: {
    fontSize: 13,
    color: '#c2c2c2',
    textAlign: "center"
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff784e',
      main: '#ff5722',
      dark: '#b23c17'
    },
    secondary: {
      light: '#834bff',
      main: '#651fff',
      dark: '#4615b2'
    },
    type: 'dark'
  }
})

function App() {

  const rules = [
    {
      title: 'Financially responsible',
      text: 'One item for each person (flashlight is an item)',
    },
    {
      title: 'Butter fingers',
      text: 'Cannot walk with items, must throw them forward',
    },
    {
      title: 'Illuminati',
      text: 'Only 3 items left in the house at a time',
    },
    {
      title: 'Barter system',
      text: 'Can only leave an item in the house if you take one out. This includes items like cups and keys. Cannot trade a house item for a house item',
    },
    {
      title: 'Is it cold or just me?',
      text: 'No thermometer',
    },
    {
      title: 'Floor is lava',
      text: 'No items on the floor',
    },
    {
      title: 'Like clockwork',
      text: 'Form a line to pass items to the ghost room (can find it with temps but no other items in inventory)',
    },
    {
      title: 'No man left behind',
      text: 'Bring EVERYTHING back to the van',
    },
    {
      title: 'Go pro or no go',
      text: 'No cameras, head mounted camera only',
    },
    {
      title: 'Leapfrog',
      text: '“jump” over teammates',
    },
    {
      title: 'Can’t stop won’t stop',
      text: 'W key always',
    },
    {
      title: 'Moonwalkin',
      text: 'Only S key',
    },
    {
      title: 'Run boy run (Felt)',
      text: 'Follow the leader in a snake like movement pattern',
    },
    {
      title: 'Crypt of The Necrodancer',
      text: 'Move to the beat of staying alive during hunts (must sing)',
    },
    {
      title: 'Whose turn is it anyway?',
      text: 'Only one person can move at a time (only active when the ghost is not hunting)',
    },
    {
      title: 'Platinum trophiend',
      text: 'Complete optional objectives before finding evidence',
    },
    {
      title: 'Bloody who?',
      text: 'For every piece of evidence, must go in ghost room and say its name 3 times with the lights off',
    },
    {
      title: 'Speech *100*',
      text: 'Deceptive communication only',
    },
    {
      title: 'Deadset',
      text: ' Declare a type of evidence at spawn, you cannot leave the house until you find that evidence',
    },
    {
      title: 'Skeptics',
      text: 'Everyone must confirm every type of evidence',
    },
    {
      title: 'Mr. Parker',
      text: 'Can only use cameras to gather evidence',
    },
    {
      title: 'I don\'t believe in that kinda stuff',
      text: '(Farmhouse only) You must throw a voodoo doll into a room to gain access to that room. Do not investigate a room until it has been voodooed',
    },
    {
      title: 'Clever girl',
      text: 'Cannot leave house until you survive a hunt',
    },
    {
      title: 'Homie in the dark night',
      text: 'No lights',
    },
    {
      title: 'I see dead people',
      text: 'Cannot find evidence above 0 sanity',
    },
    {
      title: 'They’re vampires right?',
      text: 'No closing doors',
    },
    {
      title: 'Lonely at the top',
      text: 'One person in the house at a time, highest sanity goes',
    },
    {
      title: 'Medium at Large',
      text: 'Must keep Ouiji board active at all times',
    },
    {
      title: 'Final destination',
      text: 'Pro asylum, no items',
    },
    {
      title: 'Mr. Worldwide',
      text: 'Only accents',
    },
    {
      title: 'Hide and Go Die',
      text: 'First person hides, next person tries to find them then the next person goes. Each person gives one clue when next person starts searching (Don’t look at map)',
    },
    {
      title: 'Cyka Blyat',
      text: 'When ghost hunts, don’t stop yelling',
    },
    {
      title: 'Remote Control',
      text: 'Controller buys all items, must direct other investigators. People in the house must close their eyes and be directed by the controller. If a ghost is not discovered before all other investigators die, controller must sacrifice themself.',
    },
    {
      title: 'Camouflage Cuties',
      text: 'Must hide and can only gather information in between hunts',
    },
    {
      title: 'Adam’s Curse',
      text: 'No more cussing guys - Seriously it\'s not cool and its violent (if drinking, take a shot) (if not drinking, go to ghost room and stay in there 1 curse = x seconds)',
    },
    {
      title: 'Where we dropping boys?',
      text: 'Every time you enter the house: for x seconds close your eyes and walk around in the house in random directions',
    },
    {
      title: 'Winner, winner, chicken dinner',
      text: 'Only one investigator survives',
    },
  ]

  const styles = useStyles()

  const [state, setState] = React.useState({
    ruleOneNum: null,
    ruleTwoNum: null
  })

  const [oneChecked, setOneChecked] = React.useState(false)
  const [twoChecked, setTwoChecked] = React.useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <div className={styles.centerBox}>
          <RuleButton setState={setState}
                      state={state}
                      max={rules.length}
                      color="secondary"
                      oneChecked={oneChecked}
                      twoChecked={twoChecked}
          />
        </div>
        {state.ruleOneNum !== null &&
        <Strat text={rules[state.ruleOneNum].text}
               title={rules[state.ruleOneNum].title}
               style={styles.rule}
               centerBox={styles.centerBox}
               setState={setOneChecked}
               state={oneChecked}
        />}
        {state.ruleTwoNum !== null &&
          <Strat text={rules[state.ruleTwoNum].text}
                 title={rules[state.ruleTwoNum].title}
                 style={styles.rule}
                 centerBox={styles.centerBox}
                 setState={setTwoChecked}
                 state={twoChecked}
          />}
      </div>
      <div className={styles.footer}>

        <Divider />
        <div className={styles.centerBox}>
          <Typography variant="body2" gutterBottom className={styles.footerText}>
            Made with <i className="fas fa-heart" /> by Robert Boutillier
            <br />
            {/* TODO add link to my github and link to google form */}
            <i className="fab fa-github" /> GitHub
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
