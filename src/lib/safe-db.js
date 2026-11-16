import prisma from '@/lib/prisma';

/**
 * Resilient database query wrapper.
 * Attempts the query, reconnects on failure, and falls back gracefully
 * to avoid throwing unhandled 500 runtime errors if MySQL has a momentary blip.
 */
export async function safeDbQuery(queryFn, fallbackValue = null) {
  try {
    return await queryFn();
  } catch (error) {
    console.warn(`[SafeDB] Initial query failed (${error?.message || error}). Reconnecting...`);
    try {
      await prisma.$connect();
      return await queryFn();
    } catch (retryError) {
      console.error(`[SafeDB] Query failed after reconnect, returning fallback:`, retryError?.message || retryError);
      return fallbackValue;
    }
  }
}
