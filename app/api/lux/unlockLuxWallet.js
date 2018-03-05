// @flow
import BigNumber from 'bignumber.js';
import { request } from './lib/request';
import { LUX_API_HOST, LUX_API_PORT, LUX_API_USER, LUX_API_PWD } from './index';

export type UnlockLuxWalletParams = {
  password: string,
  timeout: number
};

export const unlockLuxWallet = ({ password, timeout }: UnlockLuxWalletParams): Promise<any> =>
  request(
    {
      hostname: LUX_API_HOST,
      method: 'POST',
      port: LUX_API_PORT,
      auth: LUX_API_USER + ':' + LUX_API_PWD
    },
    {
      jsonrpc: '2.0',
      method: 'walletpassphrase',
      params: [password, timeout]
    }
  );
