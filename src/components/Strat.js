import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Cookies from "universal-cookie";

export default function Strat(props) {

  const cookies = new Cookies()

  const {
    centerBox,
      style,
      state,
      cookieName,
      title,
      text
  } = props

  return (
    <div className={centerBox}>
      <Paper className={style} variant="outlined">
        <Checkbox color="primary" checked={state} onChange={() => {
          cookies.set(cookieName, !state, {path: '/'})
          props.setState(!state)
        }}/>
        <Typography variant='h5'>
          {title}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          {text}
        </Typography>
      </Paper>
    </div>
  )
}