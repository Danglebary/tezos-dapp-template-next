import { RpcClient, RpcClientCache } from '@taquito/rpc'

const rpcUrls = ['https://mainnet.api.tez.ie', 'https://teznode.letzbake.com']
const randomRpcUrl = rpcUrls[Math.floor(rpcUrls.length * Math.random())]

export const rpc = new RpcClientCache(new RpcClient(randomRpcUrl))
