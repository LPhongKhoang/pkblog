export default {
  client_id: process.env.REACT_APP_CLIENT_ID || "0oacfvu0xfMreQjBB4x6",
  redirect_uri:
    process.env.REACT_APP_REDIRECT_URI ||
    "http://localhost:3000/login/callback",
  authorization_endpoint: "https://github.com/login/oauth/authorize",
  token_endpoint: "https://github.com/login/oauth/access_token",
  requested_scopes: "openid",
};
