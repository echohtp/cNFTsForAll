import { redirect } from 'next/navigation';
import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';
 

// This mints a new NFT to a NEW Tiplink Wallet and sends it to the Page object
Page.getInitialProps = async (ctx: NextPageContext) => {
  const url = await fetch('http://localhost:3000/api/action')
  return { tiplink: await url.json() }
}


export default function Page({ tiplink }: { tiplink: any }) {

  // Wait 5 seconds for TIPLINK to setup before redirecting the user
  useEffect(()=>{
    setTimeout(()=>{
      window.location.href = tiplink.url
    },5000)
    
  },[])

  // Get the users GPS location
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
  })

  // GPS State
  const [lat, setLat] = useState<any>()
  const [lon, setLon] = useState<any>()

  return (
  <>
    <p>Redirecting page</p>
    <p>Lat: {lat}</p>
    <p>Lon: {lon}</p>
  </>
  )

}