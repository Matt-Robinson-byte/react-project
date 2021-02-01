import { React } from "react";

import { Map as MapQuest} from '@joeattardi/react-mapquest-static-map';

import {mapquestApiKey} from '../config'



function Map(props) {
    return(
    <section>
        
            <MapQuest apiKey={mapquestApiKey} center="Guatemala" />
            
    </section>
    )}

export default Map;