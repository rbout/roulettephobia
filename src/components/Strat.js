import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Cookies from "universal-cookie";

export default function Strat(props) {

  const cookies = new Cookies()

  return (
    <div className={props.centerBox}>
      <Paper className={props.style} variant="outlined">
        <Checkbox color="primary" checked={props.state} onChange={() => {
          cookies.set(props.name, !props.state, {path: '/'})
          props.setState(!props.state)
        }}/>
        <Typography variant='h5'>
          {props.rule.title}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          {props.rule.text}
        </Typography>
      </Paper>
    </div>
  )
}