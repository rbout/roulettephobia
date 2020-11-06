import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function Strat(props) {
  return (
    <div className={props.centerBox}>
      <Paper className={props.style} variant="outlined">
        <Checkbox color="primary" onChange={() => {
          props.setState(!props.state)
        }}/>
        <Typography variant='h5'>
          {props.title}
        </Typography>
        <Typography variant='subtitle1'>
          {props.text}
        </Typography>
      </Paper>
    </div>
  )
}