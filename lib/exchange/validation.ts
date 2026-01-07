/**
 * Validation logic for exchange inputs
 */

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate amount input
 * @param amount - The amount to validate
 * @param minAmount - Minimum allowed amount (optional)
 * @param maxAmount - Maximum allowed amount (optional)
 */
export function isValidAmount(
  amount: string | number,
  minAmount?: number,
  maxAmount?: number
): boolean {
  if (!amount) return false;

  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numAmount) || numAmount <= 0) return false;

  if (minAmount !== undefined && numAmount < minAmount) return false;
  if (maxAmount !== undefined && numAmount > maxAmount) return false;

  return true;
}

/**
 * Validate wallet address
 * @param address - The wallet address to validate
 * @param minLength - Minimum address length (default: 20)
 */
export function isValidAddress(address: string, minLength: number = 20): boolean {
  if (!address || typeof address !== 'string') return false;
  return address.trim().length >= minLength;
}

/**
 * Check if user can proceed to next step
 * @param step - Current step (1-4)
 * @param state - Exchange state
 */
export function canProceed(
  step: number,
  state: {
    fromAmount?: string | number;
    toAmount?: string | number;
    walletAddress?: string;
    fromAsset?: any;
    toAsset?: any;
  }
): boolean {
  switch (step) {
    case 1:
      // Step 1: Must have valid amount and assets
      return (
        !!state.fromAsset &&
        !!state.toAsset &&
        isValidAmount(state.fromAmount || state.toAmount || '')
      );

    case 2:
      // Step 2: Must have valid wallet address
      return isValidAddress(state.walletAddress || '');

    case 3:
      // Step 3: Can always proceed (confirmation step)
      return true;

    case 4:
      // Step 4: Already at final step
      return false;

    default:
      return false;
  }
}

/**
 * Validate amount with detailed error message
 */
export function validateAmount(
  amount: string | number,
  minAmount?: number,
  maxAmount?: number
): ValidationResult {
  if (!amount) {
    return { valid: false, error: 'Amount is required' };
  }

  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) {
    return { valid: false, error: 'Invalid amount format' };
  }

  if (numAmount <= 0) {
    return { valid: false, error: 'Amount must be greater than 0' };
  }

  if (minAmount !== undefined && numAmount < minAmount) {
    return { valid: false, error: `Minimum amount is ${minAmount}` };
  }

  if (maxAmount !== undefined && numAmount > maxAmount) {
    return { valid: false, error: `Maximum amount is ${maxAmount}` };
  }

  return { valid: true };
}

/**
 * Validate address with detailed error message
 */
export function validateAddress(
  address: string,
  minLength: number = 20
): ValidationResult {
  if (!address || typeof address !== 'string') {
    return { valid: false, error: 'Address is required' };
  }

  const trimmed = address.trim();

  if (trimmed.length < minLength) {
    return {
      valid: false,
      error: `Address must be at least ${minLength} characters`,
    };
  }

  return { valid: true };
}

