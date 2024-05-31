import React, {useEffect, useMemo} from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./YaMap.css";


function YaMap() {
  if (!YMaps) {
    return null;
  }

  return (
    <>
    <div>
    <h2>Отследить по карте</h2>
  <br />
  <YMaps>
      <Map defaultState={{ center: [51.721574, 36.183856], zoom: 9 }} 
      width={'250px'}
      >
        <Placemark geometry={[51.721574, 36.183856]} />
      </Map>
    </YMaps>
      </div>
    </>
  );
}

export default YaMap;
