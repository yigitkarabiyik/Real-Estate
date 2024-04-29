import navValues from '@/helpers/navValues'
import React from 'react'
import HouseList from './houseList'
import House from './house'
import { Typography } from '@mui/material'

const ComponentPicker = ({currentNavLocation}) => {

  switch (currentNavLocation){
    case navValues.home:
      return <HouseList/>
    case navValues.house:
      return <House/>
    default:
      return(
        <Typography variant='h3'>
          No component for navigation value
          {currentNavLocation} found
        </Typography>
      );
  }
};

export default ComponentPicker;