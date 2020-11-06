import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography";

export default function Strat(props) {
  return (
    <div className={props.centerBox}>
      <div className={props.style}>
        <Checkbox color="primary" onChange={() => {
          props.setState(!props.state)
        }}/>
        <Typography variant='h5'>
          {props.title}
        </Typography>
        <Typography variant='subtitle1'>
          {props.text}
        </Typography>
      </div>
    </div>
  )
}