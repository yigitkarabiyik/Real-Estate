import { Button, Grid, Input } from '@mui/material';
import React, { useState } from 'react'

const AddBid = ({house, addBid}) => {

  const emptyBid = {
    houseId: house.id,
    bidder: "Bidder",
    amount: 0
  };
  const [newBid, setNewBid] = useState(emptyBid)

  const onBidSubmitClick = () => {
    addBid(newBid);
    setNewBid(emptyBid);
    console.log("New Bid", newBid)
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Input id="bidder" variant="standard" type="text" value={newBid.bidder}
          onChange={(e) => setNewBid({...newBid, bidder: e.target.value})}
        />
      </Grid>
      <Grid item xs={5}>
        <Input id="amount" variant="standard" type="number" value={newBid.amount}
          onChange={(e) => setNewBid({...newBid, amount: parseInt(e.target.value)})}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" size="small" type="number"
          onClick={onBidSubmitClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddBid;