import { redirect } from 'next/navigation';
import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';
 

// This mints a new NFT to a NEW Tiplink Wallet and sends it to the Page object
Page.getInitialProps = async (ctx: NextPageContext) => {
  // const url = await fetch('http://localhost:3000/api/action')
  // return { tiplink: await url.json() }
  return {tiplink : ""}
}


export default function Page({ tiplink }: { tiplink: any }) {

  // Wait 5 seconds for TIPLINK to setup before redirecting the user
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     window.location.href = tiplink.url
  //   },5000)  
  // },[])

  // Get the users GPS location
  useEffect(()=> {
    // your secret location 
    const s_lat = 50
    const s_lon = -50
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("gps")
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      if (calcCrow(lat, lon, s_lat, s_lon) < 1){
        setMintable(true)
      }
    });
  })

  // GPS State
  const [lat, setLat] = useState<any>()
  const [lon, setLon] = useState<any>()
  const [mintable, setMintable ] = useState<boolean>(true)


  // Calculate distance formulas
  function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) 
  {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(value: any) 
  {
      return value * Math.PI / 180;
  }


  return (
  <>
    <p>Redirecting page</p>
    <p>Lat: {lat}</p>
    <p>Lon: {lon}</p>
    {/* <p>Crow: {}</p> */}
    <button disabled={mintable}>Mint me here</button>
  </>
  )

}