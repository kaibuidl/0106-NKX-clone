/**
 * Exchange core module - reusable business logic
 * 
 * This module provides all the business logic for the exchange functionality,
 * decoupled from any specific UI implementation.
 */

// Assets
export { ASSETS, getAssetBySymbol, getAssetByCmcId, type Asset } from './assets';

// Providers
export {
  PROVIDERS,
  PROVIDER_IDS,
  getProvider,
  getAllProviders,
  type ProviderConfig,
} from './providers';

// Quote calculations
export {
  calculateQuote,
  calculateReverseQuote,
  calculateAllQuotes,
  getBestQuote,
  type QuoteResult,
} from './quote';

// Rate fetching
export { fetchPrice, clearPriceCache, getCachedRate } from './rates';

// Validation
export {
  isValidAmount,
  isValidAddress,
  canProceed,
  validateAmount,
  validateAddress,
  type ValidationResult,
} from './validation';

// Step management
export {
  STEPS,
  getStep,
  getAllSteps,
  canGoNext,
  canGoPrev,
  nextStep,
  prevStep,
  goToStep,
  isStepAccessible,
  type StepDefinition,
  type ExchangeState,
} from './steps';

