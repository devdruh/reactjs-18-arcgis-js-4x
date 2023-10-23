import { Container, Typography, Box, Link } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Box marginTop={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 1, gap: 10}}>
        <Typography variant='h4' textAlign='center'>
            Coming Soon!
        </Typography>
        <Typography variant='body2' textAlign='center' marginTop='10'>
          In the meantime, please visit the <Link href="/data-and-map" underline='none'>Data and Map</Link> page. 
        </Typography>
      </Box>
      <Box marginTop={5} sx={{display: 'flex', justifyContent: 'center', p: 1}}>
        
      </Box>
    </Container>
  )
}

export default Home