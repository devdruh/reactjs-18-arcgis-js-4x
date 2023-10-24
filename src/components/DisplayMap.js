import { useRef, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import { featureLayerUrl, popupFields } from '../utils/variables';
import { useTheme } from '@mui/material/styles';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

const DisplayMap = ({ filterOption }) => {

    const theme = useTheme();
    const mapDiv = useRef(null);

    useEffect(() => {
      
        if (mapDiv.current) {

            const map = new Map({
                basemap: theme.palette.mode === 'dark' ? "dark-gray-vector" : "gray-vector"
            });

            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [-79.34600830076083, 43.755225053060066],
                zoom: 10
            });

            let params = 'OCC_YEAR = \'' + filterOption.year + '\'';
            if (filterOption.month) {
                params += ' AND OCC_MONTH=\'' + filterOption.month + '\''
            }

            const featureLayerCrimes = new FeatureLayer({
                url: featureLayerUrl.majorCrimeIndicators,
                popupTemplate: popupFields,
                definitionExpression: params
            });

            const featureLayerDivision = new FeatureLayer({
                url: featureLayerUrl.tpsPoliceDivision
            });

            map.addMany([featureLayerCrimes, featureLayerDivision]);

            const legend = new Legend({
                view: view
            });

            const expandLegend = new Expand({
                content: legend,
                view: view,
                expandTooltip: "Legend"
            });

            view.ui.add(expandLegend, "bottom-right");
        }

    }, [mapDiv, theme.palette.mode, filterOption.month, filterOption.year]);

    return (
        <>
            <Grid item xs={12}>
                <Container disableGutters sx={{ bottom: 0 }}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Box className="viewDiv"  ref={mapDiv}></Box>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}

export default DisplayMap