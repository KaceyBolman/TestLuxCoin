// @flow
import BigNumber from 'bignumber.js';

export type LuxAccountPassphrase = string;
export type LuxWalletId = string;
export type LuxWalletBalance = BigNumber;
export type LuxBlockNumber = number;
export type LuxGas = string;
export type LuxGasPrice = BigNumber;
export type LuxTxHash = string;
export type LuxAddress = string;

export type LuxRecoveryPassphrase = Array<string>;

export type LuxAddresses = Array<LuxAddress>;
// export type LuxAccounts = Array<LuxWalletId>;
export type LuxAccounts = object;

// {
//   "hash" : "hash",     (string) the block hash (same as provided)
//   "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain
//   "size" : n,            (numeric) The block size
//   "height" : n,          (numeric) The block height or index
//   "version" : n,         (numeric) The block version
//   "merkleroot" : "xxxx", (string) The merkle root
//   "tx" : [               (array of string) The transaction ids
//      "transactionid"     (string) The transaction id
//      ,...
//   ],
//   "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)
//   "nonce" : n,           (numeric) The nonce
//   "bits" : "1d00ffff", (string) The bits
//   "difficulty" : x.xxx,  (numeric) The difficulty
//   "previousblockhash" : "hash",  (string) The hash of the previous block
//   "nextblockhash" : "hash"       (string) The hash of the next block
// }

export type LuxBlock = {
  time: number
};

export type LuxSyncProgress = ?{
  startingBlock: LuxBlock,
  currentBlock: LuxBlock,
  highestBlock: LuxBlock
};

// {
//   "account" : "Main",
//   "address" : "LbMBwLkw3sSB1AVeRdfP1mHcf8Zpgfwgi2",
//   "category" : "receive",
//   "amount" : 300.00000000,
//   "vout" : 3,
//   "confirmations" : 1517,
//   "bcconfirmations" : 1517,
//   "blockhash" : "000000000002926cde088c782abe82b8c9d1699836581eb2e29ceb28994df6d4",
//   "blockindex" : 1,
//   "blocktime" : 1520024670,
//   "txid" : "a6adfb188fac6716480ab68767b0bd99bd061ca14cf861412639849e50c7ccc1",
//   "walletconflicts" : [
//   ],
//   "time" : 1520024670,
//   "timereceived" : 1520122944
// },

export type LuxTransaction = {
  account: string,
  address: LuxWalletId,
  category: string,
  amount: BigNumber,
  fee: BigNumber,
  vout?: BigNumber,
  confirmations: number,
  bcconfirmations: number,
  txid: LuxTxHash,
  // nonce: string,
  blockhash: string,
  // blockNumber: LuxBlockNumber,
  blockindex: string,
  blocktime: number
  // value: string,
  // gasPrice: LuxGasPrice,
  // gas: LuxGas,
  // input: string,
};

export type LuxTransactions = Array<LuxTransaction>;

export type LuxInfo = {
  // version: number,
  // protocolversion: number,
  // walletversion: number,
  // balance: BigNumber,
  blocks: number,
  // timeoffset: number,
  // connections: number,
  // proxy: string,
  // difficulty: BigNumber//3007383866429.732,
  // testnet: boolean,
  // keypoololdest: number,
  // keypoolsize: number,
  // unlocked_until: number,
  // paytxfee: BigNumber,
  // relayfee: BigNumber,
  errors: string
};

export type LuxPeerInfo = {
  startingheight: number
};

export type LuxPeerInfos = Array<LuxPeerInfo>;
