import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from "@xarc/react";
import electrodePng from "../../static/electrode.png";
import { docsLink } from "../info";
import Cookies from "@walmart/electrode-cookies";

const User = () => {
  const ssoCred = Cookies.get("SSO_CRED");
  const ssoInfo = JSON.parse(decodeURIComponent(ssoCred || "{}"));
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <a href="https://www.electrode.io">
          Electrode <img src={electrodePng} />
        </a>
      </h1>
      <h1>SSO Pingfed Demo</h1>
      <div style={{ padding: "5px", border: "solid", marginLeft: "15%", marginRight: "15%" }}>
        <h2>User credentials were passed from server to client in cookie SSO_CRED.</h2>
        <p>Name: {ssoInfo.name}</p>
        <p>Email: {ssoInfo.email}</p>
        <p>Login ID: {ssoInfo.loginId}</p>
        <form method="get" action="/logout">
          <button type="submit">
            <h3>logout</h3>
          </button>
        </form>
        <p>
          <a href={docsLink}>Electrode Docs</a>
        </p>
      </div>
    </div>
  );
};

export const subapp: ReactSubApp = {
  Component: User,
};
