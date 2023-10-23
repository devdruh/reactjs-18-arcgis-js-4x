import { Grid, Box, CircularProgress } from "@mui/material";
import { GridItem } from "../utils/variables";
import DataFilter from "./DataFilter";

const DisplayData = ({filterOption, isLoading, countCrimeByCat, handleChangeFilter}) => {
    
    return (
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Grid item md={2} xs={12}>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <GridItem sx={{ height: 80, alignItems: 'center', display: 'flex' }}>
                                Total Crimes: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.total}
                            </GridItem>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Grid container rowGap={1} columnSpacing={1}>
                        <Grid item md={7} xs={5}>
                            <GridItem sx={{ alignItems: 'center', display: 'flex' }}>Assault: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.assault}</GridItem>
                        </Grid>
                        <Grid item md={5} xs={7}>
                            <GridItem sx={{ alignItems: 'center', display: 'flex' }}>Break and Enter: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.breakAndEnter}</GridItem>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <GridItem sx={{ alignItems: 'center', display: 'flex' }}>Auto Theft: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.autoTheft}</GridItem>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <GridItem sx={{ alignItems: 'center', display: 'flex' }}>Robbery: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.robbery}</GridItem>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <GridItem sx={{ alignItems: 'center', display: 'flex' }}>Thief Over: {isLoading ? <Box sx={{ pl: 1 }}><CircularProgress size={10} /></Box> : countCrimeByCat.theftOver}</GridItem>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={12}>
                    <DataFilter filterOption={filterOption} handleChangeFilter={handleChangeFilter} isDisabled={isLoading}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DisplayData