// React imports
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


import Box from '@mui/material/Box';

import classes from './_Map.module.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJpem0xIiwiYSI6ImNsZTRjdmt6NzAxcDUzb2toYWt4a284dGUifQ.MwID8cUKZ-nCNH5opUuA6A';


const MapSection = (props) => { 

  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-77.03)
  const [lat, setLat]= useState(38.91);
  const [zoom, setZoom] = useState(9);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: zoom
  });
});

useEffect(() => { 
  if(!map.current) return; // wait for map to initialize
  map.current.on('move', () => { 
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
  })
})

  return (
  
      <div ref={mapContainer} className={classes['map-container']}></div>
  )
}

export default MapSection;