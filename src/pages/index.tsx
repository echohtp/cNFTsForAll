/**
 * This is a TypeScript React component that displays a loading screen with a spinning DNA animation
 * and redirects the user to a specified URL after a certain amount of time.
 * @param  - 1. `redirect` - a function imported from the `next/navigation` module that allows for
 * redirecting to a different page.
 * @returns The code is returning a React component called "Page" which displays a loading screen with
 * a spinning DNA animation. The component also includes a link to the Twitter profile of the creator.
 * The component receives a prop called "tiplink" which contains the URL to redirect to after a delay
 * of 7 seconds.
 */
import { redirect } from 'next/navigation';
import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner'

/* The `Page.getInitialProps` function is a special function in Next.js that allows you to fetch data
on the server side and pass it as props to your React component. In this case, it is fetching data
from the `/api/action` endpoint and returning it as the `tiplink` prop. */
Page.getInitialProps = async (ctx: NextPageContext) => {
  const url = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/action`)
  return { tiplink: await url.json() }
}

export default function Page({ tiplink }: { tiplink: any }) {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = tiplink.url
    }, 7000)
  }, [tiplink.url])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Creating beautiful art, please wait...
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mx-auto">

            <Dna
              visible={true}
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="mx-auto"
            />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Made with love by&nbsp;&nbsp;
            <a href="https://twitter.com/0xbanana" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              banana
            </a>
          </p>
        </div>
      </div>
    </>
  )
}