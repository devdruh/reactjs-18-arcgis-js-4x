import { Container } from '@mui/material'
import React from 'react'
import DisplayMap from '../components/DisplayMap'

const DataAndMaps = () => {
    return (
        <Container disableGutters sx={{ top: 65, bottom: 0, position: 'absolute'}}>
            <DisplayMap/>
        </Container>
  )
}

export default DataAndMaps