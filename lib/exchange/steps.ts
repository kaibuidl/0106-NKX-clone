/**
 * Step management and state machine for exchange flow
 */

import { canProceed } from './validation';

export interface StepDefinition {
  id: number;
  title: string;
  description: string;
}

export const STEPS: StepDefinition[] = [
  {
    id: 1,
    title: 'Select pair',
    description: 'Choose assets and enter amount',
  },
  {
    id: 2,
    title: 'Enter address',
    description: 'Provide recipient wallet address',
  },
  {
    id: 3,
    title: 'Send funds',
    description: 'Review and confirm transaction',
  },
  {
    id: 4,
    title: 'Wait for the exchange',
    description: 'Transaction is being processed',
  },
];

export interface ExchangeState {
  step: number;
  fromAsset?: any;
  toAsset?: any;
  fromAmount?: string | number;
  toAmount?: string | number;
  walletAddress?: string;
  selectedProvider?: string;
  mode?: 'realtime' | 'fixed';
  rate?: number;
  processing?: boolean;
}

/**
 * Get step definition by ID
 */
export function getStep(stepId: number): StepDefinition | undefined {
  return STEPS.find((s) => s.id === stepId);
}

/**
 * Get all steps
 */
export function getAllSteps(): StepDefinition[] {
  return STEPS;
}

/**
 * Check if can move to next step
 */
export function canGoNext(state: ExchangeState): boolean {
  if (state.step >= 4) return false;
  return canProceed(state.step, state);
}

/**
 * Check if can move to previous step
 */
export function canGoPrev(state: ExchangeState): boolean {
  return state.step > 1;
}

/**
 * Move to next step
 * @param state - Current state
 * @param onProcessing - Optional callback for step 3->4 processing delay
 * @returns New step number
 */
export function nextStep(
  state: ExchangeState,
  onProcessing?: (processing: boolean) => void
): number {
  if (!canGoNext(state)) return state.step;

  const newStep = state.step + 1;

  // Special handling for step 3 -> 4 (simulate processing)
  if (state.step === 3 && onProcessing) {
    onProcessing(true);
    // UI should handle the actual delay and call this again
  }

  return newStep;
}

/**
 * Move to previous step
 */
export function prevStep(state: ExchangeState): number {
  if (!canGoPrev(state)) return state.step;
  return state.step - 1;
}

/**
 * Jump to specific step (with validation)
 */
export function goToStep(state: ExchangeState, targetStep: number): number {
  if (targetStep < 1 || targetStep > 4) return state.step;

  // Can always go back
  if (targetStep < state.step) return targetStep;

  // Going forward requires validation of all intermediate steps
  for (let step = state.step; step < targetStep; step++) {
    if (!canProceed(step, state)) {
      return state.step; // Cannot proceed, stay at current step
    }
  }

  return targetStep;
}

/**
 * Check if step is accessible (can navigate to it)
 */
export function isStepAccessible(state: ExchangeState, targetStep: number): boolean {
  if (targetStep < 1 || targetStep > 4) return false;
  if (targetStep <= state.step) return true; // Can always go back

  // Check if all intermediate steps are valid
  for (let step = state.step; step < targetStep; step++) {
    if (!canProceed(step, state)) return false;
  }

  return true;
}

