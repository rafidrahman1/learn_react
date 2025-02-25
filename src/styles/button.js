export const buttonStyles = (isLoading, isConnected) => ({
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
});