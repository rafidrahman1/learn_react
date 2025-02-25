import env from "./env.config";

const FACEBOOK_CONFIG = {
  appId: env.facebook.appId,
  version: env.facebook.apiVersion,
  cookie: true,
  xfbml: true,
  status: true
};

export default FACEBOOK_CONFIG;