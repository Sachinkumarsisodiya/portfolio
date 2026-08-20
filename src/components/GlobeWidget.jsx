import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeWidget({ allMarkers }) {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Fetch countries borders for deep details
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error("Error loading country borders:", err));
  }, []);

  useEffect(() => {
    // We use a small polling mechanism because react-globe.gl takes a moment to initialize controls
    const initControls = () => {
      if (globeEl.current && globeEl.current.controls()) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 1.0;
        globeEl.current.controls().enableZoom = false;
        globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 1.7 });
      } else {
        setTimeout(initControls, 100);
      }
    };
    initControls();
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={380}
      height={380}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      polygonsData={countries.features}
      polygonAltitude={0.01}
      polygonCapColor={() => 'rgba(200, 200, 200, 0.02)'}
      polygonSideColor={() => 'rgba(200, 200, 200, 0.02)'}
      polygonStrokeColor={() => '#333333'} // Dark grey borders
      htmlElementsData={allMarkers}
      htmlElement={d => {
        const el = document.createElement('div');
        const isVisitor = d.name.includes('Jaipur');
        const fontSize = isVisitor ? '13px' : '10px';
        const dotSize = isVisitor ? '8px' : '4px';
        const fontWeight = isVisitor ? '800' : '600';
        const textShadow = '0 0 6px #000, 0 0 6px #000, 0 0 6px #000'; // Strong shadow for readability
        
        el.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); pointer-events: none;">
            <div style="color: ${d.color}; font-size: ${fontSize}; font-weight: ${fontWeight}; font-family: ui-sans-serif, system-ui, sans-serif; white-space: nowrap; text-shadow: ${textShadow}; letter-spacing: 0.5px;">${d.name}</div>
            <div style="width: ${dotSize}; height: ${dotSize}; background: ${d.color}; border-radius: 50%; box-shadow: 0 0 10px ${d.color}; margin-top: 4px;"></div>
          </div>
        `;
        return el;
      }}
      atmosphereColor="#a3e635"
      atmosphereAltitude={0.15}
    />
  );
}
