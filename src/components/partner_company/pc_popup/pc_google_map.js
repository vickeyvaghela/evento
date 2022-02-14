import React, { useState,useEffect } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const GoogleMapPicker = ({ setFormField }) => {

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
        setFormField("let", lat)
        setFormField("long", lng)
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    } 

    function handleResetLocation(e) {
        e.preventDefault()
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    useEffect(() => {
        // handleChangeLocation(DefaultLocation.lat,DefaultLocation.lng)
    }, [])
    

    return (
        <>
            {/* <button onClick={handleResetLocation}>Reset Location</button> */}
            <label>Latitute:</label><input type='text' value={location.lat} disabled />
            <label>Longitute:</label><input type='text' value={location.lng} disabled />
            <label>Zoom:</label><input type='text' value={zoom} disabled />

            <MapPicker defaultLocation={defaultLocation}
                zoom={zoom}
                mapTypeId="roadmap"
                style={{ height: '80vh', width: '80vw', zIndex: 5 }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey='AIzaSyCBwqd6PfosZUtTb8bMWPOVocydrwwlKIY' />
        </>
    );
}


export default GoogleMapPicker;