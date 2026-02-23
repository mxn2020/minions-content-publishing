/**
 * Minions Content-publishing SDK
 *
 * Publish queue, delivery receipts, and mode configuration
 *
 * @module @minions-content-publishing/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Content-publishing.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
