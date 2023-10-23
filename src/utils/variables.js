import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

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
                    label: "Offence"
                },
                {
                    fieldName: "LOCATION_TYPE",
                    label: "Location Type"
                },
                {
                    fieldName: "PREMISES_TYPE",
                    label: "Premises Type"
                },
                {
                    fieldName: "DIVISION",
                    label: "Division"
                },
                {
                    fieldName: "NEIGHBOURHOOD_140",
                    label: "Neighbourhood 140"
                },
                {
                    fieldName: "HOOD_140",
                    label: "Hood 140 "
                },
                {
                    fieldName: "NEIGHBOURHOOD_158",
                    label: "Neighbourhood 158"
                },
                {
                    fieldName: "UCR_CODE",
                    label: "UCR_CODE"
                },
                {
                    fieldName: "UCR_EXT",
                    label: "UCR_EXT"
                },
            ]
        }
    ]
};


const getLast5Years = (today) => {
    var last5Years = today.getFullYear() - 4;
    var latestYear = today.getFullYear()

    var filterYearArray = [];
    do {
        filterYearArray.push(last5Years);
        last5Years += 1

    } while (last5Years <= latestYear);
    
    return filterYearArray
}

const getMonthsName = () => {
    const months = Array.from({ length: 12 }, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("en", { month: "long" });
    });

    return months
}

const navPages = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Data & Map",
        url: "data-map"
    },
    {
        name: "About",
        url: "about"
    }
]

const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center'
}));

const featureLayerUrl = {
    'majorCrimeIndicators': "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/Major_Crime_Indicators_Open_Data/FeatureServer/0",
    'tpsPoliceDivision': "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/TPS_POLICE_DIVISIONS/FeatureServer/0"
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export {popupFields, getLast5Years, getMonthsName, navPages, featureLayerUrl, ColorModeContext, GridItem}