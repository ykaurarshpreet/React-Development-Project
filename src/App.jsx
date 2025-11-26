import { useState } from "react";
import MapView from "./components/MapView";
import { useMap } from "./hooks/index";

const API_KEY = "at_NRrw5z1AF3Qtq5EE2B72VJnUTc1AH";

function App() {
const [inputIp, setInputIp] = useState("");
const { position, ipInfo, fetchIpLocation } = useMap(API_KEY);

  return(
    <div>
      <h1>IP Address Tracker</h1>

      <input 
        type="text" 
        placeholder="Search for any IP address or domain"
        value={inputIp}
        onChange={(e) => setInputIp(e.target.value)}
        />

      <button onClick={() => fetchIpLocation(inputIp)}>Search</button>
     
      <MapView position={position}/>

     <div className="info"> 
      <p>IP: {ipInfo.ip}</p>
        <p>Location: {ipInfo.location}</p>
        <p>Timezone: {ipInfo.timezone}</p>
        <p>ISP: {ipInfo.isp}</p>
    </div>
       </div>
  );
}

export default App;
