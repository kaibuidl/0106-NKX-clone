/**
 * Quote calculation logic
 */

import { PROVIDERS, type ProviderConfig } from './providers';

export interface QuoteResult {
  amount: number;
  provider: string;
  spread: number;
  networkFee: number;
  serviceFee: number;
}

/**
 * Calculate output amount given input amount
 * @param baseRate - The base exchange rate (from/to)
 * @param providerId - The provider ID (NKX, Changelly, ChangeNOW)
 * @param fromAmount - The input amount
 * @returns The output amount after fees and spread
 */
export function calculateQuote(
  baseRate: number,
  providerId: string,
  fromAmount: number | string
): number {
  if (!baseRate || !fromAmount) return 0;

  const provider = PROVIDERS[providerId];
  if (!provider) return 0;

  const amount = typeof fromAmount === 'string' ? parseFloat(fromAmount) : fromAmount;
  if (isNaN(amount) || amount <= 0) return 0;

  const spread = 1 - provider.spreadBps / 10000;
  const result = amount * baseRate * spread - provider.networkFee;

  return Math.max(0, result);
}

/**
 * Calculate input amount given desired output amount (reverse calculation)
 * @param baseRate - The base exchange rate (from/to)
 * @param providerId - The provider ID
 * @param toAmount - The desired output amount
 * @returns The required input amount
 */
export function calculateReverseQuote(
  baseRate: number,
  providerId: string,
  toAmount: number | string
): number {
  if (!baseRate || !toAmount) return 0;

  const provider = PROVIDERS[providerId];
  if (!provider) return 0;

  const amount = typeof toAmount === 'string' ? parseFloat(toAmount) : toAmount;
  if (isNaN(amount) || amount <= 0) return 0;

  const spread = 1 - provider.spreadBps / 10000;
  const result = (amount + provider.networkFee) / (baseRate * spread);

  return Math.max(0, result);
}

/**
 * Calculate quotes from all providers
 * @param baseRate - The base exchange rate
 * @param fromAmount - The input amount
 * @returns Array of quotes from all providers, sorted by best rate
 */
export function calculateAllQuotes(
  baseRate: number,
  fromAmount: number | string
): QuoteResult[] {
  const quotes = Object.values(PROVIDERS).map((provider) => {
    const amount = calculateQuote(baseRate, provider.id, fromAmount);
    return {
      amount,
      provider: provider.id,
      spread: provider.spreadBps / 10000,
      networkFee: provider.networkFee,
      serviceFee: provider.serviceFee,
    };
  });

  // Sort by amount descending (best quote first)
  return quotes.sort((a, b) => b.amount - a.amount);
}

/**
 * Get the best quote (highest output amount)
 */
export function getBestQuote(
  baseRate: number,
  fromAmount: number | string
): QuoteResult | null {
  const quotes = calculateAllQuotes(baseRate, fromAmount);
  return quotes.length > 0 ? quotes[0] : null;
}

