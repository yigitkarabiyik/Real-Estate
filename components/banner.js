import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { navigationContext } from './app';
import navValues from '@/helpers/navValues';


function Banner({children}) {

  const { navigate } = useContext(navigationContext);

  return (
    <Box sx={{ 
      flexGrow: 1,
      margin: '2em'
      }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <img
              onClick={() => navigate(navValues.home)}
              style={{
                borderRadius: '1em',
                cursor: 'pointer'
              }}
              src="./assets/bannerLogo.jpg"
              height={'150px'}
            />
        </Grid>
        <Grid item xs={6}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
        >
          <Typography variant="h5" color={'#60B8DC'}
            style={{fontStyle: 'italic', fontWeight: 'bold'}}
          >
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Banner;