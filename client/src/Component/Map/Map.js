import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const MapPanel = () => {
    const Map = ReactMapboxGl({
        accessToken:
        'pk.eyJ1IjoibWFpdHJ1b25nZ2lhbmcyOTEyIiwiYSI6ImNrcXhsOXZyYTB6a20ydW1ud3VzZWxhajUifQ.OYwel2I6LtopcVQw3N8MBg'
    })

    return (
        <div className={'map-container'}>
            <Map
                style="mapbox://styles/mapbox/streets-v11"
                containerStyle={{
                    height: '100vh', //để 100% là nó bằng với thằng div bên ngoài
                    width: '100vw',
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>
        </div>
    )
}
export {MapPanel}

