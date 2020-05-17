import React from "react";
import queryString from "query-string";
import Button from "./common/button";
import * as PKCEHelper from "../utils/PKCEHelper";
import config from "../config";

const ButtonOAuth2Login = () => {
  const handleOAuth2Login = async (e) => {
    e.preventDefault();

    // Create and store a randome state value
    const state = PKCEHelper.generateRandomString();
    localStorage.setItem("pkce_state", state);

    // Create and store a new PKCE code_verifier (the plaintext random secret)
    const code_verifier = PKCEHelper.generateRandomString();
    localStorage.setItem("pkce_code_verifier", code_verifier);

    // Hash and base64-urlencode the secret to use as the challenge
    const code_challenge = await PKCEHelper.pkceChallengeFromVerifier(
      code_verifier
    );

    // Use queryString lib for auto encodeURIComponent
    const paramStr = queryString.stringify({
      response_type: "code",
      client_id: config.client_id,
      state,
      scope: config.requested_scopes,
      redirect_uri: config.redirect_uri,
      code_challenge,
      code_challenge_method: "S256",
    });

    const url = config.authorization_endpoint + "?" + paramStr;

    // // Build the authorization URL
    // var url =
    //   config.authorization_endpoint +
    //   "?response_type=code" +
    //   "&client_id=" +
    //   encodeURIComponent(config.client_id) +
    //   "&state=" +
    //   encodeURIComponent(state) +
    //   "&scope=" +
    //   encodeURIComponent(config.requested_scopes) +
    //   "&redirect_uri=" +
    //   encodeURIComponent(config.redirect_uri) +
    //   "&code_challenge=" +
    //   encodeURIComponent(code_challenge) +
    //   "&code_challenge_method=S256";
    // Redirect to the authorization server

    window.location = url;
  };

  return <Button onClick={handleOAuth2Login}>Login with Okta</Button>;
};

export default ButtonOAuth2Login;
