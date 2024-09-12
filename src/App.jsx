import React, { useRef } from 'react';
import Globe from 'react-globe.gl';

function App() {
  const globeRef = useRef();

  // Arc data between New York and San Francisco
  const arcData = [{
    startLat: 40, // Starting latitude
    startLng: -74, // Starting longitude (New York)
    endLat: 37, // Ending latitude
    endLng: 122, // Ending longitude (San Francisco)
    color: ['green', 'blue'] // Colors of the arc
  }];

  // Add a green dot somewhere along the arc
  const dotData = [{
    lat: 38.5, // Latitude of the dot (somewhere between NY and SF)
    lng: -100, // Longitude of the dot
    size: 0.5, // Size of the dot
    color: 'green' // Color of the dot
  }];

  return (
    <div style={{ height: '100vh', margin: 0 }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        arcsData={arcData} // Arc data
        arcColor={'color'}
        arcDashLength={0.5} // Dash length for the arc
        arcDashGap={0.2} // Gap between dashes
        arcDashAnimateTime={5000} // Animation time for the arc in milliseconds
        arcStroke={0.5} // Arc thickness

        // Add custom dots
        customLayerData={dotData}
        customLayerLabel={() => ''} // No label on hover
        customLayerAltitude={0.01} // Altitude of the dot (just above the globe)
        customLayerRadius={() => 0.2} // Radius of the dot
        customLayerColor={(d) => d.color} // Color of the dot
      />
    </div>
  );
}

export default App;


