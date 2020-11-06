import React from 'react'
import RuleButton from "./components/RuleButton";

function App() {

  const rules = [
    '1 item for each person (flashlight is an item)',
    'Cannot walk with items, must throw them forward',
    'Can only leave an item in the house if you take one out. This includes useless items like cups and also counts useful items like keys. Cannot trade a house item for a house item',
    'No thermometer',
    'Floor is lava - no items on the floor',
    'Like clockwork - form a line to pass items to the ghost room (can find it with temps but no other items in inventory)',
    'No man left behind - bring EVERYTHING back to the van',
    'Leapfrog, jump over teammates',
    'No W key',
    'W key always',
    'Only S key',
    'Snake movement',
    'Crypt of The Necrodancer - Move to the beat of staying alive during hunts (must sing)',
    'Only one person can move at a time (only active when the ghost is not hunting)',
    'Complete optional objectives before finding evidence',
    'For every piece of evidence, must go in ghost room and say its name 3 times with lights off',
    'Deceptive communication only',
    'Deadset - Declare a type of evidence at spawn, you cannot leave the house until you find that evidence',
    'Everyone must confirm every type of evidence',
    'No cameras, head mounted camera only',
    'Can only use cameras to gather evidence.',
    '(Farmhouse only) You must throw a voodoo doll into a room to gain access to that room. Do not investigate a room until it has been voodooed',
    'Clever girl - Cannot leave house until you survive a hunt',
    'No lights',
    'Cannot find evidence above 0 sanity',
    'No closing doors',
    'One person in the house at a time, highest sanity goes',
    'Must keep wedgie board active at all times',
    'Final destination - pro asylum, no items',
    'We Don’t Discriminate - only accents',
    'The Hive - first person hides, next person tries to find them then the next person goes.',
    'Cyka Blyat - when ghost hunts, don’t stop yelling',
    'Helen Keller Experience - Controller buys all items, must direct other investigators. People in the house must close their eyes and be directed by the controller. If a ghost is not discovered before all other investigators die, controller must sacrifice themself.',
    'Diary of Anne Frank - Must hide (from the gestapo) and can only gather information in between hunts',
    'Adam’s Curse - No more cussing guys - Seriously it\'s not cool and its violent (if drinking, take a shot) (if not drinking, go to ghost room and stay in there 1 curse = 3 seconds)'
  ]

  const [state, setState] = React.useState({
    ruleOneNum: null,
    ruleTwoNum: null
  })

  return (
    <div>
      <div>
        <RuleButton setState={setState} max={rules.length}/>
      </div>
      {state.ruleOneNum !== null && <p>{rules[state.ruleOneNum]}</p>}
      {state.ruleTwoNum !== null && <p>{rules[state.ruleTwoNum]}</p>}
    </div>
  );
}

export default App;
