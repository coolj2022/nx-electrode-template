import Path from "path";
import { WmlServerFastifyConfig, PluginOptions } from "@walmart/wml-server-fastify";
import { connection, plugins, services, readZ64File } from "./base";
import { SsoOptions } from "@gtpjs/sso-pingfed";

export default {
  connection,
  services,

  plugins: {
    "fastify-auth": {
      priority: -11,
      enable: true,
    } as PluginOptions,
    "@walmart/electrode-log-consumer": {
      enable: true,
      priority: -9999,
    } as PluginOptions,

    //
    // Register the SSO pingfed for handling auth.
    // For development, you will need to onboard to the Lab domain and get a
    // dev only user ID.
    // Link: https://walmartglobal.service-now.com/wm_sp?id=sc_cat_item_guide&sys_id=b3234c3b4fab8700e4cd49cf0310c7d7
    //
    "@gtpjs/sso-pingfed": {
      enable: true,
      priority: -10,
      options: {
        env: "dev",
        isSecure: true, // set HTTPS flag for cookies since we are doing https even in dev mode
        redirect: {
          protocol: "https",
          host: "dev.walmart.com",
          port: "443",
          path: "/loggedin",
        },
        logout: {
          protocol: "https",
          host: "dev.walmart.com",
          port: "443",
          path: "/logout",
        },
        authSource: JSON.parse(readZ64File(Path.join(__dirname, "../../../config/gtpjs-dev.z64"))),
      } as SsoOptions,
    } as PluginOptions,

    ...plugins,
  },
} as WmlServerFastifyConfig;
