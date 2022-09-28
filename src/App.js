import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlacesData } from './api';
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { CssBaseline,Grid } from '@material-ui/core';

const App =()=> {

  const[places,setPlaces]=useState([]);
  const[coordinates,setCoordinates]=useState({lat:0,lng:0});
  const[bounds, setBounds]=useState({});
  const[loading,setLoading]=useState(false);
  const[rating, setRating]= useState('');
  const[filteredPlaces, setFilteredPlaces]=useState([]);
  const[type, setType]=useState('restaurants');


  useEffect(()=>{


    navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}})=>{
      setCoordinates({lat: latitude, lng:longitude});
    })


  },[]);

  useEffect(()=>{

    const filtered= places.filter((place)=>Number(place.rating)>rating);
    setFilteredPlaces(filtered);


  },[rating]);

  useEffect(()=>{
    console.log(coordinates,bounds);

    setLoading(true);

    getPlacesData(type,bounds.sw, bounds.ne)
      .then((data)=>{
          console.log(data);
        setLoading(false);
          setPlaces(data);
      })

     },[type,coordinates,bounds]);

  return (
    <div>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
        <List 
        places={filteredPlaces.length? filteredPlaces: places}
        type={type}
        setType={setType}
        loading={loading}
        rating={rating}
        setRating={setRating}
        />
        </Grid>
        <Grid item xs={12} md={8}>
         <Map 
         setCoordinates={setCoordinates}
         setBounds={setBounds} 
         coordinates={coordinates}
         />
         
         </Grid>
      </Grid>
    </div>
  );
}

export default App;
