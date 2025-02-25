const FacebookAPI = {
  init: () =>
    new Promise((resolve, reject) => {
      if (window.FB) {
        window.FB.init({
          appId: "1439623623666012", // Replace with your Facebook App ID
          cookie: true,
          xfbml: true,
          version: "v22.0"
        });
        resolve();
      } else {
        reject(new Error("Facebook SDK not loaded"));
      }
    }),

  getUserInfo: () =>
    new Promise((resolve, reject) => {
      window.FB.api("/me", { fields: "id,name,email" }, (response) => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response?.error || "Failed to fetch user info");
        }
      });
    })
};

export default FacebookAPI;