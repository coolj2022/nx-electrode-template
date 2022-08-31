import { Layout } from "../app";
import { PageRenderer, createTemplateTags as cTT } from "@xarc/react";
import { ElectrodeFastifyInstance } from "@xarc/fastify-server";
// import { getAuthPreHandler } from "./route-support";

/**
 * Register the default home route at URL `/`
 *
 * @param server
 */
export function addCoreRoute(server: ElectrodeFastifyInstance) {
  const homeRenderer: PageRenderer = new PageRenderer({
    pageTitle: "Electrode Web App",
    subApps: [
      { name: Layout.name, ssr: false },
    ],
    templateInserts: {
      head: {
        begin: cTT`<meta name='viewport' content='width=device-width, initial-scale=1.0' /><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />`,
        contextReady: [
          (context) => `<link${context.user.styleNonceAttr} href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`,
          (context) => `<style${context.user.styleNonceAttr}>:root{--header-height:51px;--side-nav1-width:92px;--side-nav2-width:256px}*,:after,:before{box-sizing:border-box}body,html{width:100%;height:100%;margin:0}</style>`
        ],
      },
    },
  });

  server.route({
    method: "GET",
    url: "/*",
    // preHandler: getAuthPreHandler(server),
    async handler(request, reply) {
      try {
        const context = await homeRenderer.render({ request });
        reply.type("text/html");

        if (context.user.cspHeader) {
          reply.header(`content-security-policy`, context.user.cspHeader);
        }

        reply.send(context.result);
      } catch (error) {
        reply.send(error.stack);
      }
    },
  });
}
