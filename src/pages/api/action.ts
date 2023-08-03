// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TipLink } from '@tiplink/api';
import axios from 'axios'
import bs58 from 'bs58'
import { Connection, Keypair, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from '@solana/web3.js';


const TIPLINK_MINIMUM_LAMPORTS = 4083560;


type Data = {
  url: string
}

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

  try {
    console.log("MINTING")
    await axios.post(`${process.env.NEXT_PUBLIC_UNDERDOG_ENDPOINT}/v2/projects/${2}/nfts`, nft, config)
  } catch { }

  console.log("DONE")
  // fund tiplink wallet
  // load keypair for the payer
  // const SKua = bs58.decode(process.env.BANK_PK!)
  // const payer = Keypair.fromSecretKey(SKua)

  // let transaction = new Transaction();
  // let connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

  // transaction.add(
  //   SystemProgram.transfer({
  //     fromPubkey: payer.publicKey,
  //     toPubkey: link.keypair.publicKey,
  //     lamports: TIPLINK_MINIMUM_LAMPORTS,
  //   }),
  // );

  // try {
  //   await sendAndConfirmTransaction(connection, transaction, [payer], { commitment: "confirmed" });
  // } catch { }

  // return url of tiplink wallet
  res.status(200).json({ url: link.url.toString() })
}
