import Map from 'ol/Map.js'
import TileJSON from 'ol/source/TileJSON.js'
import { fromLonLat } from 'ol/proj'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import React, { useEffect, useMemo, useState } from 'react'
import Styles from '../styles/map.module.scss'
function MapView() {
  const [map, setMap] = useState(undefined)
  const mapSetting = useMemo(() => {
    console.log('render')
    setMap(
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new TileJSON({
              url:
                'https://api.maptiler.com/maps/toner-v2/tiles.json?key=DRXRruQnUR6AdIH5MYcL',
              tileSize: 512,
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([34.989571, 32.794044]),
          zoom: 2,
        }),
      }),
    )
  }, [])

  useEffect(() => {
    mapSetting
  }, [])
  return <div id="map" className={Styles['map']}></div>
}

export default MapView
