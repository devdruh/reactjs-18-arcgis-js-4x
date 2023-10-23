import { useState, useMemo } from "react";
import { Grid, Box, Typography, Select, FormControl, MenuItem, InputLabel } from '@mui/material';
import { getLast5Years, getMonthsName, GridItem } from '../utils/variables';

const DataFilter = ({ filterOption, handleChangeFilter }) => {
    const [today,] = useState(new Date());
    const last5Years = useMemo(() => getLast5Years(today), [today]);
    const monthNames = useMemo(() => getMonthsName(), []);

    return (
        <>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <GridItem sx={{ height: 80, alignItems: 'center', display: 'flex' }}><Typography noWrap>Filter by: </Typography>
                        <Box paddingLeft={2}>
                            <FormControl size="small">
                                <InputLabel id="filter-year-select-label">Year</InputLabel>
                                <Select
                                    labelId="filter-year-select-label"
                                    id="filter-year-select"
                                    value={filterOption.year}
                                    label="Year"
                                    name="year"
                                    onChange={handleChangeFilter}
                                >
                                    {last5Years.map((item) => {
                                        return <MenuItem key={item} value={item}>{item}</MenuItem>
                                    })}
                                    
                                </Select>
                            </FormControl>
                            <FormControl sx={{ ml: 1, minWidth: 120 }} size="small">
                                <InputLabel id="filter-month-select-label">Month</InputLabel>
                                <Select
                                    labelId="filter-month-select-label"
                                    id="filter-month-select"
                                    value={filterOption.month}
                                    label="Month"
                                    name="month"
                                    onChange={handleChangeFilter}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {monthNames.map((item) => {
                                        return <MenuItem key={item} value={item}>{item}</MenuItem>
                                    })}
                                    
                                </Select>
                            </FormControl>
                        </Box>
                    </GridItem>
                </Grid>
            </Grid>
        </>
    )
}

export default DataFilter