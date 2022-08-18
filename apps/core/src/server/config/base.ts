import Fs from "fs";
import Path from "path";
import zlib from "zlib";
import {
  ConnectionConfig,
  PluginsConfig,
  PluginOptions,
} from "@xarc/fastify-server";

const defaultListenPort = 3000;

/**
 * Read list port from env.
 *
 * - `APP_SERVER_PORT` - in development, set this for the dev proxy
 * - `PORT` - when in production
 *
 * @returns port number app server should listen on
 */
export const portFromEnv = () => {
  const x = parseInt(process.env.APP_SERVER_PORT || process.env.PORT, 10);
  return x !== null && !isNaN(x) ? x : defaultListenPort;
};

/**
 * Read z64 file
 * @remark to create:
 * ```js
 * console.log(zlib.deflateSync(input).toString("base64").match(/.{1,70}/g).join("\n"))
 * ```
 *
 * @param filename
 * @returns
 */
export function readZ64File(filename: string): string {
  const input = Fs.readFileSync(filename, "utf-8");
  return zlib.inflateSync(Buffer.from(input, "base64")).toString();
}

/**
 * Get SOARI service key for QA env
 *
 * @returns SOARI service key for QA env
 */
export function getSoariQaKey(): string {
  return readZ64File(Path.join(__dirname, "../../../config/soari-qa-key.z64"));
}

/**
 * connection information for fastify
 */
export const connection: ConnectionConfig = {
  host: process.env.HOST,
  address: process.env.HOST_IP || "0.0.0.0",
  port: portFromEnv(),
};

/**
 * Specify plugins to register with fastify
 */
export const plugins: PluginsConfig = {
  "@xarc/app-dev": {
    priority: -1,
    enable: process.env.WEBPACK_DEV === "true",
  } as PluginOptions,

  // set require from path so can use "../routes" to load the routes plugin below
  requireFromPath: __dirname,
  /**
   * Register the plugin to setup routes
   */
  routes: {
    module: "../routes",
  },
};
