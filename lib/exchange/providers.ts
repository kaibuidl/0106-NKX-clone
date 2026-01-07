/**
 * Provider configurations for exchange quotes
 */

export interface ProviderConfig {
  id: string;
  name: string;
  spreadBps: number; // Spread in basis points (1 bps = 0.01%)
  networkFee: number; // Fixed network fee
  serviceFee: number; // Service fee as decimal (0.0025 = 0.25%)
  minAmount?: number;
  maxAmount?: number;
}

export const PROVIDERS: Record<string, ProviderConfig> = {
  NKX: {
    id: 'NKX',
    name: 'NKX',
    spreadBps: 20,
    networkFee: 0.0001,
    serviceFee: 0.0025,
  },
  Changelly: {
    id: 'Changelly',
    name: 'Changelly',
    spreadBps: 60,
    networkFee: 0.0001,
    serviceFee: 0.005,
  },
  ChangeNOW: {
    id: 'ChangeNOW',
    name: 'ChangeNOW',
    spreadBps: 40,
    networkFee: 0.00015,
    serviceFee: 0.003,
  },
};

export const PROVIDER_IDS = Object.keys(PROVIDERS);

export function getProvider(id: string): ProviderConfig | undefined {
  return PROVIDERS[id];
}

export function getAllProviders(): ProviderConfig[] {
  return Object.values(PROVIDERS);
}

