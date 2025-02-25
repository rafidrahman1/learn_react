import env from "../config/env.config";

class FacebookAPI {
  static init() {
    return new Promise((resolve, reject) => {
      // Load the Facebook SDK
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: env.facebook.appId,
          cookie: true,
          xfbml: true,
          version: env.facebook.apiVersion
        });

        resolve();
      };

      // Load the SDK asynchronously if not already loaded
      if (typeof window.FB === "undefined") {
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, "script", "facebook-jssdk"));
      } else {
        resolve();
      }
    });
  }

  static getUserInfo() {
    return new Promise((resolve, reject) => {
      window.FB.api("/me", { fields: "id,name,email" }, (response) => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response?.error || "Error fetching user data");
        }
      });
    });
  }

  static async createPost(message) {
    return new Promise((resolve, reject) => {
      window.FB.api("/me/feed", "POST", { message }, (response) => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response?.error || "Error creating post");
        }
      });
    });
  }

  static checkLoginState() {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  }
}

export default FacebookAPI;