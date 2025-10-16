import { UserManager } from 'oidc-client-ts';

const config = {
  authority: 'https://b43bfbb3.demo.pocket-id.org/',      // URL SSO
  client_id: '88d6e790-5092-4505-a666-d910b948fdc3',
  redirect_uri: 'http://localhost:3000/callback', // route Vue nhận code
  response_type: 'code',                         // Authorization Code Flow
   scope: 'openid profile email',                 // scope muốn lấy                // scope cần
  post_logout_redirect_uri: 'http://localhost:3000',
  automaticSilentRenew: true                     // tự động refresh token
};

export const userManager = new UserManager(config);
