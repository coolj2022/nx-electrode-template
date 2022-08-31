import { PageRenderer } from "@xarc/react";
import { ElectrodeFastifyInstance } from "@xarc/fastify-server";

/**
 * A fastify route prehandler to set the cookie SSO_CRED with SSO auth credentials
 *
 * @param request
 * @param reply
 * @param done
 */
export const setSsoCredCookie = (request, reply, done) => {
  done();
};

/**
 * return auth prehandler for sso pingfed
 *
 * @param server
 * @param additionalHandlers
 * @returns
 */
export const getAuthPreHandler = (
  server: ElectrodeFastifyInstance,
  additionalHandlers = [setSsoCredCookie],
  _url: string = ""
): any => {
  // return (server as any).auth([server[authSchemeName]].concat(additionalHandlers), {
  //   run: "all",
  // });
};

/**
 * Register additional server routes here
 *
 * @param server
 */
export const additionalRoutes = (server: ElectrodeFastifyInstance): void => {};