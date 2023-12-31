import { useState, useEffect, useRef, useCallback } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { queryFeatureCrimes } from "../api/CrimesAPI";
import DisplayData from "../components/DisplayData";
import DisplayMap from '../components/DisplayMap';

const DataAndMap = () => {

    const [today,] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true);
    const [filterOption, setFilterOption] = useState({ 'year': today.getFullYear(), 'month': '' });
    const [countCrimeByCat, setCountCrimeByCat] = useState({ 'assault': 0, 'autoTheft': 0, 'breakAndEnter': 0, 'robbery': 0, 'theftOver': 0, 'total': 0 });
    const [queryFeaturesArray, setQueryFeaturesArray] = useState([]);
    const resultOffset = useRef(0);
    const theme = useTheme();

    const handleChangeFilter = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setQueryFeaturesArray(() => []);
        setFilterOption({
            ...filterOption,
            [event.target.name] : event.target.value,
        });
    }

    const filterFeatures = useCallback((features) => {

        const countAssault = features.filter((item) => item.attributes.MCI_CATEGORY === 'Assault').length;
        const countAutoTheft = features.filter((item) => item.attributes.MCI_CATEGORY === 'Auto Theft').length;
        const countBreakAndEnter = features.filter((item) => item.attributes.MCI_CATEGORY === 'Break and Enter').length;
        const countRobbery = features.filter((item) => item.attributes.MCI_CATEGORY === 'Robbery').length;
        const countTheftOver = features.filter((item) => item.attributes.MCI_CATEGORY === 'Theft Over').length;

        setCountCrimeByCat((item) => ({
            ...item,
            assault: countAssault,
            autoTheft: countAutoTheft,
            breakAndEnter: countBreakAndEnter,
            robbery: countRobbery,
            theftOver: countTheftOver,
            total: countAssault + countAutoTheft + countBreakAndEnter + countRobbery + countTheftOver
        }));

        setIsLoading(false);

    }, []);
    
    const queryFeatures = useCallback(() => {
        
        var params = 'where='
        
        for (const key in filterOption) {
            if (Object.hasOwnProperty.call(filterOption, key)) {
                const element = filterOption[key];
                if (element) {
                    if (key === 'year') {
                        params += 'OCC_YEAR=\'' + element + '\''
                    }
                    if (key === 'month') {
                        params += ' AND OCC_MONTH=\'' + element + '\''
                    }
                }
            }
        }
        
        queryFeatureCrimes(resultOffset.current, params).then((response) => {
            var items = response.data.features;
            
            if (response.data.exceededTransferLimit) {

                setQueryFeaturesArray([
                    ...queryFeaturesArray,
                    ...items
                ]);

                resultOffset.current += items.length;

            } else {

                const featuresArray = [...queryFeaturesArray, ...items];
                filterFeatures(featuresArray);
                resultOffset.current = 0;

            }

        }).catch((error) => {
            console.log(error,"<< error")
        })

    },[filterOption, queryFeaturesArray, resultOffset, filterFeatures])

    useEffect(() => {
        
        queryFeatures();

    }, [queryFeatures]);
    
    return (
        <>
            <Grid sx={{ flexGrow: 1 }}>

                <Box sx={{ height: 180 }}>
                    <Box sx={{ textAlign: "center", borderBottom: "solid 1px", borderBottomColor: theme.palette.divider, marginBottom: 2}} bgcolor='primary'>
                        <Typography variant="h5" sx={{fontWeight: 100, padding: 2}}>Major Crime Indicators - Toronto, York Region, Ontario</Typography>
                    </Box>
                    <DisplayData filterOption={filterOption} handleChangeFilter={handleChangeFilter} isLoading={ isLoading } countCrimeByCat={countCrimeByCat} />
                </Box>
                <DisplayMap filterOption={filterOption}/>
            </Grid>
        </>
    )
}

export default DataAndMap