import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { MatchContainer } from './StyledCardMatches'

const CardMatches = ({ name, photo, age }) => {
  
  return (
    <MatchContainer>
      <Avatar 
      src={photo}
      sx={{ 
        width: 52, 
        height: 52,
      }}
      />
      <Typography
        variant="p"
        component={"p"}
        sx={{
          ml: 2,
          fontSize: 20,
        }}
        >
        {name}, {age}.
      </Typography>
    </MatchContainer>
  )
}

export default CardMatches
