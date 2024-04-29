import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import HouseRow from './houseRow';
import useHouses from '@/hooks/useHouses';
import loadingStatus from '@/helpers/loadingStatus';
import LoadingIndicator from './loadingIndicator';

function HouseList({selectHouse}) {
  const {houses, setHouses, loadingState} = useHouses();

  if(loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState}/>

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        "id": houses.lenght,
        "address": "6th Revenue, New York",
        "country": "USA",
        "description": "This luxurious four bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
        "price": 600000,
        "photo": "164558"
      }
    ]
    )
  }

  return (
    <Stack style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'2em'}}>
      <Typography variant="h6" color={'#60B8DC'}>
        Houses currently on the market
      </Typography>
      <TableContainer style={{marginTop: '1em'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Asking Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {houses && houses.map(house => (
              <HouseRow key={house.id} house={house} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button 
        style={{alignSelf: 'start', marginTop: '1em'}}
        variant={"contained"}
        onClick={addHouse}
      >
        Add
      </Button>
    </Stack>
  )
}

export default HouseList;