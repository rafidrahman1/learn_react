import React, { useEffect, useState } from "react";
import FacebookAPI from "../../utils/facebookAPI";
import { buttonStyles } from "../../styles/button";
import FacebookIcon from "../icons/FacebookIcon";

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const initializeFacebookSDK = async () => {
      try {
        await FacebookAPI.init();
        window.FB.getLoginStatus((response) => {
          setIsConnected(response.status === "connected");
        });
      } catch (error) {
        console.error("Failed to initialize Facebook SDK:", error);
      }
    };

    initializeFacebookSDK();
  }, []);

  const handleFacebookLogin = async () => {
    setIsLoading(true);

    try {
      const response = await new Promise((resolve) =>
        window.FB.login(resolve, {
          scope: "public_profile,email,pages_manage_posts,pages_read_engagement",
          auth_type: "rerequest",
          return_scopes: true
        })
      );

      if (response.authResponse) {
        setIsConnected(true);
        console.log("Successfully connected with Facebook");
        console.log("Access Token:", response.authResponse.accessToken);

        // Fetch user information
        const userInfo = await FacebookAPI.getUserInfo();
        console.log("User info:", userInfo);
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    } catch (error) {
      console.error("Facebook login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleFacebookLogin}
      disabled={isLoading || isConnected}
      style={buttonStyles(isLoading, isConnected)}
    >
      {isLoading ? (
        "Connecting..."
      ) : isConnected ? (
        "Connected with Facebook"
      ) : (
        <>
          <FacebookIcon />
          Connect with Facebook
        </>
      )}
    </button>
  );
};

export default LoginButton;