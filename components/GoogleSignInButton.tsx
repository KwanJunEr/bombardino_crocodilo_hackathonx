import React from "react";
import { Button } from "@/components/ui/button";


export const GoogleSignInButton: React.FC = () => {
  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
    console.log("Sign in with Google");
  };

  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2 animate-fade-in"
      onClick={handleGoogleSignIn}
    >
      {/* <GoogleIcon className="h-4 w-4" /> */}
      <span>Sign in with Google</span>
    </Button>
  );
};