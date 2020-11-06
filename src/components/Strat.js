import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography";

export default function Strat(props) {
  return (
    <div className={props.centerBox}>
      <Checkbox color="primary" onChange={() => {
        props.setState(!props.state)
        console.log(props.state)
      }}/>
      <Typography variant='body1' className={props.style}>
        {props.text}
      </Typography>
    </div>
  )
}