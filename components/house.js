import currencyFormatter from '@/helpers/currencyFormatter';
import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { navigationContext } from './app';
import BidList from './bidList';
import AddBid from './addBid';
import LoadingIndicator from './loadingIndicator';
import useBids from '@/hooks/useBids';
import loadingStatus from '@/helpers/loadingStatus';

function House() {

  const { param: house } = useContext(navigationContext);
  const {bids, loadingState, addBid} = useBids(house.id);

  if (loadingState !== loadingStatus.loaded)
    <LoadingIndicator loadingState={loadingState}/>

  return (
    <Box sx={{
      flexGrow: 1,
      margin: '2em'
    }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <img
              style={{
                borderRadius: '1em',
                maxHeight: '350px',
                maxWidth: '500px'

              }}
              src={
                house.photo ? `./assets/${house.photo}.jpeg` : "./assets/banner.jpg"
              }
            />
        </Grid>
        <Grid item xs={6}
          gap={'1em'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
          }}
        >
          <Typography variant='h5'>{house.country}</Typography>
          <Typography variant='h4'>{house.address}</Typography>
          <Typography variant='h3' color={'#60B8DC'}>{currencyFormatter.format(house.price)}</Typography>
          <Typography variant='body1'>{house.description}</Typography>
          <BidList bids={bids}/>
          <AddBid house={house} addBid={addBid}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default House;