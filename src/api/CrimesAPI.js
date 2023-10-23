import esriRequest from "@arcgis/core/request.js";
import { featureLayerUrlMajorCrimeIndicators } from "../utils/variables";

const queryFeatureCrimes = async (offset, filter) => {

    var url = featureLayerUrlMajorCrimeIndicators+'/query?'+filter+'&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnExceededLimitFeatures=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset='+offset+'&maxRecordCount=2000&returnZ=false&returnM=false&quantizationParameters=&sqlFormat=none&f=json'
    var options = { responseType: "json" };

    const response = await esriRequest(url, options);
    return response;
}

export { queryFeatureCrimes } 