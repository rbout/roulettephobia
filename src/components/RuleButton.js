import React from 'react'
import Button from '@material-ui/core/Button'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default function RuleButton(props) {
  return (
    <Button variant={"contained"} onClick={() => {
      let ruleOne = getRandomInt(props.max)
      let ruleTwo = getRandomInt(props.max)
      while(ruleOne === ruleTwo)
        ruleTwo = getRandomInt(props.max)
      props.setState({ruleOneNum: ruleOne, ruleTwoNum: ruleTwo})
    }}>
      Roll
    </Button>
  )
}