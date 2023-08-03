// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TipLink } from '@tiplink/api';
import axios from 'axios'

type Data = {
  url: string
}


// Fill this array with (nft) objects
const _nfts = [
  {
    name: "you did it~",
    description: "",
    symbol: "",
    image: `https://updg8.com/imgdata/2FrXXupsvXMmrykrL192dzPbF8y8bR1fjoM1ckxC3c3A`,
    receiverAddress: ""
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Create a tiplink wallet
  const link = await TipLink.create()

  // Generate a new nft via underdog to tiplink wallet
  const config = {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY!}` }
  }

  let nft = _nfts[Math.floor(Math.random() * _nfts.length)]
  nft.receiverAddress = link.keypair.publicKey.toBase58()

  console.log(link.url.toString())

  console.log("MINTING")
  await axios.post(`${process.env.NEXT_PUBLIC_UNDERDOG_ENDPOINT}/v2/projects/${2}/nfts`, nft, config)

  console.log("DONE")


  // return url of tiplink wallet
  res.status(200).json({ url: link.url.toString() })
}
