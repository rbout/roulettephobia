import React from 'react'
import Button from '@material-ui/core/Button'
import Cookies from 'universal-cookie';
import {COOKIES} from "../utils/constants";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default function RuleButton(props) {

  const cookies = new Cookies()
  const {
      state,
      oneChecked,
      twoChecked,
      setState,
      color,
      max
  } = props


  return (
    <Button variant={"contained"} color={color} onClick={() => {
      let ruleOne = state.ruleOneNum
      let ruleTwo = state.ruleTwoNum
      if(!oneChecked)
        ruleOne = getRandomInt(max)
      if(!twoChecked)
        ruleTwo = getRandomInt(max)
      while(ruleOne === ruleTwo)
        ruleTwo = getRandomInt(max)
      setState({ruleOneNum: ruleOne, ruleTwoNum: ruleTwo})
      cookies.set(COOKIES.ruleOneNum, ruleOne, {path: '/'})
      cookies.set(COOKIES.ruleTwoNum, ruleTwo, {path: '/'})
    }}>
      Roll
    </Button>
  )
}