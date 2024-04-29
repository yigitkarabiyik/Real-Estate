import navValues from '@/helpers/navValues';
import { TableCell, TableRow } from '@mui/material';
import React, { useContext } from 'react'
import { navigationContext } from './app';
import currencyFormatter from '@/helpers/currencyFormatter';

function HouseRow({house}) {

  const { navigate } = useContext(navigationContext);

  return (
    <TableRow
      onClick={() => navigate(navValues.house, house)}
      style={{cursor: 'pointer'}}
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{house.address}</TableCell>
      <TableCell>{house.country}</TableCell>
      <TableCell>{currencyFormatter.format(house.price)}</TableCell>
    </TableRow>
  )
}

export default HouseRow;
