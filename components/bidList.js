import currencyFormatter from '@/helpers/currencyFormatter';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'

const BidList = ({bids}) => {

  return (
      <TableContainer style={{marginTop: '1em'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bidder</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bids.map(bid => (
              <TableRow
                key={bid.id}
                hover
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{bid.bidder}</TableCell>
                <TableCell>{currencyFormatter.format(bid.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default BidList;