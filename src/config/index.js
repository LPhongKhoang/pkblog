export default {
  client_id: process.env.REACT_APP_CLIENT_ID || "0oacfvu0xfMreQjBB4x6",
  redirect_uri:
    process.env.REACT_APP_REDIRECT_URI ||
    "http://localhost:3000/login/callback",
  authorization_endpoint: "https://dev-185023.okta.com/oauth2/default/v1/auth",
  token_endpoint: "https://dev-185023.okta.com/oauth2/default/v1/token",
  requested_scopes: "openid",
};
