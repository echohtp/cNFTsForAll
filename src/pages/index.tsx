import { redirect } from 'next/navigation';
import { NextPageContext } from 'next'
import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner'

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
            Made with love by&nbsp;
            <a href="https://twitter.com/0xbanana" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              banana
            </a>
          </p>
        </div>
      </div>
    </>
  )
}