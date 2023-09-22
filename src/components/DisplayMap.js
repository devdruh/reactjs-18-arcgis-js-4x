import { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import { Box } from "@mui/material";


const DisplayMap = () => {

    const mapDiv = useRef(null);

    useEffect(() => {
      
        if (mapDiv.current) {
            const popupFields = {
                title: "Offence Category: {MCI_CATEGORY}",
                content: [
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "REPORT_DATE",
                                label: "Report Date"
                            },
                            {
                                fieldName: "OCC_DATE",
                                label: "Occured Date"
                            },
                            {
                                fieldName: "OFFENCE",
                                label: "OFFENCE"
                            },
                            {
                                fieldName: "LOCATION_TYPE",
                                label: "LOCATION_TYPE"
                            },
                            {
                                fieldName: "PREMISES_TYPE",
                                label: "PREMISES_TYPE"
                            },
                            {
                                fieldName: "DIVISION",
                                label: "DIVISION"
                            },
                            {
                                fieldName: "NEIGHBOURHOOD_140",
                                label: "NEIGHBOURHOOD_140"
                            },
                            {
                                fieldName: "HOOD_140",
                                label: "HOOD_140 "
                            },
                            {
                                fieldName: "NEIGHBOURHOOD_158",
                                label: "NEIGHBOURHOOD_158"
                            },
                        ]
                    }
                ]
            };

           
            const map = new Map({
                basemap: "dark-gray-vector"
            });

            const view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [-79.34600830076083, 43.755225053060066],
                zoom: 9
            });

            const featureLayer = new FeatureLayer({
                url: "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Major_Crime_Indicators_Open_Data/FeatureServer/0",
                popupTemplate: popupFields
            });
            
            map.add(featureLayer);

            const legend = new Legend({
                view: view
            });

            const expandLegend = new Expand({
                content: legend,
                view: view,
                expandTooltip: "Legend"
            });

            view.ui.add(expandLegend, "bottom-right");

            reactiveUtils.when(() =>
                view.stationary === true,
                () => {

                    // console.log(view.extent,"<<< extent");
                    // console.log(view.center,"<<< center");
                }
            );
            
        }
        
    }, []);

    return <Box className="viewDiv" ref={mapDiv}></Box>

}

export default DisplayMap