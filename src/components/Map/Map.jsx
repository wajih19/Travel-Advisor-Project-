import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from './styles.js';
import mapStyles from "./mapStyles.js";


const Map=({setCoordinates,setBounds,coordinates, weatherData})=>{

    const classes= useStyles();
    const isMobile= useMediaQuery('(min-width:600px)');


return(
        <div className={classes.container}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyDdxDk-WTTI1ggcs8dVHS4YhelNsT3e0m4'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e)=>{
                    console.log(e);

                    setCoordinates({lat:e.center.lat, lng :e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}>

                {/* {weatherData?.list?.length && weatherData.list.map((data,i)=>(
                    <div  key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />

                    </div>
))} */}
                

            </GoogleMapReact>
        </div>

);

};

export default Map;