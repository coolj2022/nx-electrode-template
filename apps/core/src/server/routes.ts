import { ElectrodeFastifyInstance } from "@xarc/fastify-server";
import { addCoreRoute } from "./route-core";
// import { additionalRoutes } from "./route-support";

/**
 * Fastify plugin to setup application routes
 *
 * @remark - The export function name has to be `fastifyPlugin` because wml-server-fastify
 *   recognize that and automatically register it as a plugin with fastify.
 *
 * @param server - fastify server
 * @returns nothing
 */
export async function fastifyPlugin(server: ElectrodeFastifyInstance) {
  addCoreRoute(server);
  // additionalRoutes(server);
}
