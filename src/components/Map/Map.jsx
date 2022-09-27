import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from './styles.js';


const Map=()=>{

    const coordinates={lat:0 , lng: 0};

    const classes= useStyles();
    const isMobile= useMediaQuery('(min-width:600px)');

return(
        <div className={classes.container}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyBXxUt3ZIqVv4wpFrHu2Jsk-C79ykIRmHc'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}>

            </GoogleMapReact>
        </div>

);

}

export default Map;