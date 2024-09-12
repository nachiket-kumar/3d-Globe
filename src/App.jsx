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


import React, { useRef, useState, useEffect } from 'react';
import Globe from 'react-globe.gl';

function App() {
  const globeRef = useRef();
  const [markerPosition, setMarkerPosition] = useState({ lat: 40, lng: -74 }); // Initial position (start of the arc)

//   // Arc data
//   const arcData = [{
//     startLat: 40, // Starting latitude
//     startLng: -74, // Starting longitude (New York)
//     endLat: 37, // Ending latitude
//     endLng: 122, // Ending longitude (San Francisco)
//     color: ['green', 'blue'] // Colors of the arc
//   }];

//   // Function to interpolate the position of the dot along the arc
//   const interpolatePosition = (t) => {
//     const lat = arcData[0].startLat + t * (arcData[0].endLat - arcData[0].startLat);
//     const lng = arcData[0].startLng + t * (arcData[0].endLng - arcData[0].startLng);
//     return { lat, lng };
//   };

//   useEffect(() => {
//     let animationFrame;
//     const animateDot = () => {
//       const time = Date.now() % 5000; // 5000ms animation cycle
//       const t = time / 5000; // Normalize time between 0 and 1
//       setMarkerPosition(interpolatePosition(t));
//       animationFrame = requestAnimationFrame(animateDot);
//     };

//     animateDot();
//     return () => cancelAnimationFrame(animationFrame); // Clean up animation on component unmount
//   }, []);

//   return (
//     <div style={{ height: '100vh', margin: 0 }}>
//       <Globe
//         ref={globeRef}
//         globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//         arcsData={arcData} // Use only one arc data
//         arcColor={'color'}
//         arcDashLength={0.5} // Dash length for arc
//         arcDashGap={0.2} // Gap between dashes
//         arcDashAnimateTime={5000} // Animation time for the arc in milliseconds
//         arcStroke={0.5} // Arc thickness
//         markersData={[markerPosition]} // Set marker position
//         markerLat={(d) => d.lat}
//         markerLng={(d) => d.lng}
//         markerColor={() => 'green'} // Color of the dot
//         markerRadius={0.3} // Size of the dot
//       />
//     </div>
//   );
// }

// export default App;
