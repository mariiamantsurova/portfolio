import Map from 'ol/Map.js'
import TileJSON from 'ol/source/TileJSON.js'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import React, { useEffect, useRef } from 'react'

function MapView({ zoom = 1 }) {
  const ref = useRef(null)
  const mapRef = useRef(null)
  useEffect(() => {
    console.log("I'm mounting!")
    if (ref.current && !mapRef.current) {
      mapRef.current = new Map({
        layers: [
          new TileLayer({
            source: new TileJSON({
              url:
                'https://api.maptiler.com/maps/toner-v2/tiles.json?key=DRXRruQnUR6AdIH5MYcL',
              tileSize: 512,
            }),
          }),
        ],
        view: new View({ center: [0, 0], zoom: 1 }),
        target: ref.current,
      })
    }
  }, [ref, mapRef])

  useEffect(() => {
    mapRef.current?.getView().setZoom(zoom)
  }, [mapRef, zoom])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}

export default MapView

//   useEffect(() => {
//     if (map === undefined) {
//       setMap(
//         new Map({
//           target: map,
//           layers: [
//             new TileLayer({

//             }),
//           ],
//           view: new View({
//             center: fromLonLat([34.989571, 32.794044]),
//             zoom: 2,
//           }),
//         }),
//       )
//     }
//   }, [])
