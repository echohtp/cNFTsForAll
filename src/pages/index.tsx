import { redirect } from 'next/navigation';
import { NextPageContext } from 'next'
import { useEffect } from 'react';
 
Page.getInitialProps = async (ctx: NextPageContext) => {
  const url = await fetch('http://localhost:3000/api/action')
  return { tiplink: await url.json() }
}
 
export default function Page({ tiplink }: { tiplink: any }) {
  useEffect(()=>{
    window.location.href = tiplink.url
  },[])
  
  
}