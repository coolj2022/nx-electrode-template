// This config file is loaded if NODE_ENV is "production"
// It will be merged into the config partial from default.ts

import { PluginsConfig, PluginOptions } from "@walmart/wml-server-fastify";

export default {
  plugins: {
    "@gtpjs/sso-pingfed": {
      options: {
        // make sure to update kitt.yml to retrieve your client secrets from HashiCorp
        // and put them into /secrets/client-details.json
        authSource: "/secrets/client-details.json",
      },
    } as PluginOptions,
  } as PluginsConfig,
};
