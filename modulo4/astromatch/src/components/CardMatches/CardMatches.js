import { Avatar, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 8px;
`


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
          fontSize: 24,
        }}
        >
        {name}, {age}.
      </Typography>
    </MatchContainer>
  )
}

export default CardMatches
