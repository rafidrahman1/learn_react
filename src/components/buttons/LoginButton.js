import React, { useEffect, useState } from "react";
import FacebookAPI from "../../utils/facebookAPI";

function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Initialize Facebook SDK when component mounts
    FacebookAPI.init()
      .then(() => {
        // Check if user is already logged in
        window.FB.getLoginStatus((response) => {
          setIsConnected(response.status === "connected");
        });
      })
      .catch((error) => {
        console.error("Failed to initialize Facebook SDK:", error);
      });
  }, []);

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    try {
      // Login with Facebook and request necessary permissions
      const response = await window.FB.login((response) => {
        if (response.authResponse) {
          setIsConnected(true);
          console.log("Successfully connected with Facebook");
          console.log("Access Token:", response.authResponse.accessToken);
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      }, {
        scope: "public_profile,email,pages_show_list,pages_read_engagement,pages_manage_posts",
        return_scopes: true
      });

      if (response?.authResponse) {
        // Get user information after successful login
        const userInfo = await FacebookAPI.getUserInfo();
        console.log("User info:", userInfo);
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
      style={{
        padding: "10px 20px",
        backgroundColor: "#1877F2", // Facebook blue
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: isLoading || isConnected ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "16px"
      }}
    >
      {isLoading ? (
        "Connecting..."
      ) : isConnected ? (
        "Connected with Facebook"
      ) : (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
          </svg>
          Connect with Facebook
        </>
      )}
    </button>
  );
}

export default LoginButton;
