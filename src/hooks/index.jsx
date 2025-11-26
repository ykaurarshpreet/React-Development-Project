import { useState, useEffect } from "react";


export const useMap = (API_KEY) => {
    const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
    const [ipInfo, setIpInfo] = useState({});


    const fetchIpLocation = async (ip = "") => {
    console.log("Fetching IP:", ip);
    try {
         const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        
        setPosition({ lat: result.location.lat, lng: result.location.lng });

        setIpInfo({
        ip: result.ip,
        location: `${result.location.city}, ${result.location.region}, ${result.location.country}`,
        timezone: result.location.timezone,
        isp: result.isp
    });
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    fetchIpLocation();
  }, []);

    return {position, ipInfo, fetchIpLocation};
};



