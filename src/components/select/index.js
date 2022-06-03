import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  Select as MuiSelect,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  selectContainer: {
    minWidth: '20%',
    marginRight: '0.8rem'
  },
  select: {}
})

// TODO: Add props -> options
const Select = ({ value, setValue, label }) => {
  const classes = useStyles()

  return (
    <FormControl variant='outlined' className={classes.selectContainer}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        className={classes.select}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MuiSelect>
    </FormControl>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  setValue: PropTypes.func
}

export default Select
