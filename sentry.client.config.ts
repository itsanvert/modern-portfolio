// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c0fcbbe85c1fe560dbafe733c0f02ac6@o4508100355358720.ingest.us.sentry.io/4508100356472832",

  // Add optional integrations for additional features


  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
  integrations: [
    Sentry.replayIntegration({
      maskAllText : true,
      blockAllMedia : true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      isEmailRequired: true,
    }),
  ],
});
