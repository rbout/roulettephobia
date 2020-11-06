import React from 'react'
import Button from '@material-ui/core/Button'
import Cookies from 'universal-cookie';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default function RuleButton(props) {

  const cookies = new Cookies()

  return (
    <Button variant={"contained"} color={props.color} onClick={() => {
      let ruleOne = props.state.ruleOneNum
      let ruleTwo = props.state.ruleTwoNum
      if(!props.oneChecked)
        ruleOne = getRandomInt(props.max)
      if(!props.twoChecked)
        ruleTwo = getRandomInt(props.max)
      while(ruleOne === ruleTwo)
        ruleTwo = getRandomInt(props.max)
      props.setState({ruleOneNum: ruleOne, ruleTwoNum: ruleTwo})
      cookies.set('ruleOneNum', ruleOne, {path: '/'})
      cookies.set('ruleTwoNum', ruleTwo, {path: '/'})
    }}>
      Roll
    </Button>
  )
}