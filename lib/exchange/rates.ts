/**
 * Rate fetching with caching and deduplication
 */

import { getAssetBySymbol } from './assets';

interface CacheEntry {
  rate: number;
  timestamp: number;
}

const priceCache = new Map<string, CacheEntry>();
const pendingRequests = new Map<string, Promise<number>>();

const CACHE_TTL = 10000; // 10 seconds

// Mock rates as fallback when API fails
const MOCK_RATES: Record<string, number> = {
  'BTC-ETH': 15.5,
  'ETH-BTC': 0.0645,
  'BTC-USDT': 43000,
  'USDT-BTC': 0.0000232,
  'ETH-USDT': 2300,
  'USDT-ETH': 0.000434,
  'BNB-USDT': 310,
  'SOL-USDT': 98,
  'USDC-USDT': 1.0001,
  'USDT-USDC': 0.9999,
  'BTC-USDC': 43000,
  'ETH-USDC': 2300,
  'BNB-ETH': 0.135,
  'SOL-ETH': 0.043,
};

/**
 * Fetch exchange rate from CoinGecko API with caching and deduplication
 * @param fromSymbol - Source asset symbol
 * @param toSymbol - Target asset symbol
 * @returns Exchange rate (from/to)
 */
export async function fetchPrice(
  fromSymbol: string,
  toSymbol: string
): Promise<number> {
  const key = `${fromSymbol}-${toSymbol}`;
  const now = Date.now();

  // Check cache
  const cached = priceCache.get(key);
  if (cached && now - cached.timestamp < CACHE_TTL) {
    return cached.rate;
  }

  // Check if request is pending (deduplication)
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key)!;
  }

  // Get asset metadata
  const fromAsset = getAssetBySymbol(fromSymbol);
  const toAsset = getAssetBySymbol(toSymbol);

  if (!fromAsset || !toAsset) {
    return 1;
  }

  // Create new request
  const promise = (async () => {
    try {
      // Using CoinGecko simple price API
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${fromAsset.cmcId},${toAsset.cmcId}&vs_currencies=usd`
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const fromPrice = data[fromAsset.cmcId]?.usd || 0;
      const toPrice = data[toAsset.cmcId]?.usd || 0;

      if (fromPrice === 0 || toPrice === 0) {
        throw new Error('Invalid price data');
      }

      const rate = fromPrice / toPrice;

      // Cache the result
      priceCache.set(key, { rate, timestamp: now });

      return rate;
    } catch (error) {
      console.error('Price fetch error:', error);

      // Fallback: return cached value if available
      if (cached) return cached.rate;

      // Otherwise use mock rate
      return MOCK_RATES[key] || 1;
    } finally {
      pendingRequests.delete(key);
    }
  })();

  pendingRequests.set(key, promise);
  return promise;
}

/**
 * Clear the price cache (useful for testing or manual refresh)
 */
export function clearPriceCache(): void {
  priceCache.clear();
}

/**
 * Get cached rate without fetching (returns undefined if not cached)
 */
export function getCachedRate(
  fromSymbol: string,
  toSymbol: string
): number | undefined {
  const key = `${fromSymbol}-${toSymbol}`;
  const cached = priceCache.get(key);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL) {
    return cached.rate;
  }

  return undefined;
}

