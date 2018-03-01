// @flow
import BigNumber from 'bignumber.js';
import { request } from './lib/request';
import { LUX_API_HOST, LUX_API_PORT, LUX_API_USER, LUX_API_PWD } from './index';
import type { LuxTransactions } from './types';

export type GetLuxTransactionsParams = {
  walletId: string,
  count: number,
  skip: number,
};

export const getLuxTransactions = (
  { walletId, count, skip }: GetLuxTransactionsParams
): Promise<LuxTransactions> => (
  request({
    hostname: LUX_API_HOST,
    method: 'POST',
    port: LUX_API_PORT,
    auth: LUX_API_USER + ':' + LUX_API_PWD
  }, {
    jsonrpc: '2.0',
    method: 'listtransactions',
    params: [
      walletId,
      count,
      skip
    ],
  })
);
