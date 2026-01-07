/**
 * Asset definitions for the exchange
 */

export interface Asset {
  symbol: string;
  name: string;
  network: string;
  networkTag?: string;
  icon: string;
  cmcId: string;
  decimals: number;
}

export const ASSETS: Asset[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    network: 'Bitcoin',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    cmcId: 'bitcoin',
    decimals: 8,
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    network: 'Ethereum',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    cmcId: 'ethereum',
    decimals: 18,
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    network: 'Binance Smart Chain',
    networkTag: 'BSC',
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    cmcId: 'tether',
    decimals: 6,
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    network: 'BNB Smart Chain',
    networkTag: 'BSC',
    icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    cmcId: 'binancecoin',
    decimals: 18,
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    network: 'Solana',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    cmcId: 'solana',
    decimals: 9,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    network: 'Ethereum',
    networkTag: 'ETH',
    icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    cmcId: 'usd-coin',
    decimals: 6,
  },
];

export function getAssetBySymbol(symbol: string): Asset | undefined {
  return ASSETS.find((a) => a.symbol === symbol);
}

export function getAssetByCmcId(cmcId: string): Asset | undefined {
  return ASSETS.find((a) => a.cmcId === cmcId);
}

