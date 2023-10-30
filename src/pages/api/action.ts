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
    name: "I met banana",
    description: "This POAP commemorates the delightful encounter with the one and only Banana. A meeting filled with zest, humor, and unforgettable memories, it's a token to cherish our unique connection.",
    symbol: "",
    image: `https://bafybeia5ds3v7n2x76yqjhfjzxyv6fnyb6reavzlmq4wnzsbqor5tgpgta.ipfs.nftstorage.link/1.png`,
    receiverAddress: ""
  },
  {
    name: "I met banana",
    description: "This POAP commemorates the delightful encounter with the one and only Banana. A meeting filled with zest, humor, and unforgettable memories, it's a token to cherish our unique connection.",
    symbol: "",
    image: `https://bafybeia5ds3v7n2x76yqjhfjzxyv6fnyb6reavzlmq4wnzsbqor5tgpgta.ipfs.nftstorage.link/2.png`,
    receiverAddress: ""
  },
  {
    name: "I met banana",
    description: "This POAP commemorates the delightful encounter with the one and only Banana. A meeting filled with zest, humor, and unforgettable memories, it's a token to cherish our unique connection.",
    symbol: "",
    image: `https://bafybeia5ds3v7n2x76yqjhfjzxyv6fnyb6reavzlmq4wnzsbqor5tgpgta.ipfs.nftstorage.link/3.png`,
    receiverAddress: ""
  },
  {
    name: "I met banana",
    description: "This POAP commemorates the delightful encounter with the one and only Banana. A meeting filled with zest, humor, and unforgettable memories, it's a token to cherish our unique connection.",
    symbol: "",
    image: `https://bafybeia5ds3v7n2x76yqjhfjzxyv6fnyb6reavzlmq4wnzsbqor5tgpgta.ipfs.nftstorage.link/4.png`,
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

  const options = {
    // method: 'PUT',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY!}`
    }
  };
  

  let nft = _nfts[Math.floor(Math.random() * _nfts.length)]
  nft.receiverAddress = link.keypair.publicKey.toBase58()

  // get total so far so we can number them correctly 
  const totRes = await axios.get(`${process.env.NEXT_PUBLIC_UNDERDOG_ENDPOINT}/v2/projects/4?page=1&limit=10`, options)
  const totalResults = totRes.data.nfts.totalResults

  nft.name += ` #${totalResults}`

  console.log(nft)

  console.log(link.url.toString())

  console.log("MINTING")
  await axios.post(`${process.env.NEXT_PUBLIC_UNDERDOG_ENDPOINT}/v2/projects/${process.env.NEXT_PUBLIC_UNDERDOG_PROJECT_ID}/nfts`, nft, options)

  console.log("DONE")


  // return url of tiplink wallet
  res.status(200).json({ url: link.url.toString() })
}
