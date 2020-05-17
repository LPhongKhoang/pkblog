import React from "react";
import queryString from "query-string";
import axios from "axios";
import config from "../config";

const LoginCallBack = ({ location }) => {
  const queryObj = queryString.parse(location.search);
  console.log("Location.search ", location.search);

  // Check if the server returned an error string
  if (queryObj.error) {
    console.error("Server return error", queryString);
  }

  // If the server returned an authorization code, attempt to exchange it for an access token
  if (queryObj.code) {
    // Verify state matches what we set at the beginning
    if (localStorage.getItem("pkce_state") !== queryObj.state) {
      alert("Invalid state");
    } else {
      // Exchange the authorization code for an access token
      axios
        .post(config.token_endpoint, {
          grant_type: "authorization_code",
          code: queryObj.code,
          client_id: config.client_id,
          redirect_uri: config.redirect_uri,
          code_verifier: localStorage.getItem("pkce_code_verifier"),
        })
        .then(({ data }) => {
          // Initialize your application now that you have an access token.
          // Here we just display it in the browser.
          console.log("Access token", data.access_token);

          // Replace the history entry to remove the auth code from the browser address bar
          window.history.replaceState({}, null, "/");
        })
        .catch((error) => {
          // This could be an error response from the OAuth server, or an error because the
          // request failed such as if the OAuth server doesn't allow CORS requests
          console.error("OAuth Server doesn't allow CORS: ", error);
        });
    }

    // Clean these up since we don't need them anymore
    localStorage.removeItem("pkce_state");
    localStorage.removeItem("pkce_code_verifier");
  }

  return <div>Callback Route</div>;
};

export default LoginCallBack;
