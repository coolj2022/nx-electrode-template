import { declareSubApp, xarcV2 } from "@xarc/react";

export const Layout = declareSubApp({
  name: "Layout",
  getModule: () => import("./layout"),
});

xarcV2.debug("app.tsx");
