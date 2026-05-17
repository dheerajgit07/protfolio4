// Import and initialize Vercel Speed Insights
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights when the script loads
injectSpeedInsights({
  debug: false // Set to true if you want to see debug logs in development
});
