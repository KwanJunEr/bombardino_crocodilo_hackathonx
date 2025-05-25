"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "./PasswordInput";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailError(isValid ? "" : "Please enter a valid email address");
    return isValid;
  };

  const validatePassword = (password: string): boolean => {
    const isValid = password.length >= 6;
    setPasswordError(isValid ? "" : "Password must be at least 6 characters");
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      setIsSubmitting(true);
      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Sign in with:", { email, password, rememberMe });
        // Handle successful sign in here
      } catch (error) {
        console.error("Sign in failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => email && validateEmail(email)}
            className={emailError ? "border-destructive focus-visible:ring-destructive" : ""}
            required
          />
          {emailError && <p className="text-sm font-medium text-destructive">{emailError}</p>}
        </div>

        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => password && validatePassword(password)}
          error={passwordError}
          placeholder="••••••••"
          required
          className="animate-slide-up [animation-delay:75ms]"
        />

        <div className="flex items-center justify-between animate-slide-up [animation-delay:150ms]">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked: any) => 
                setRememberMe(checked === true)
              }
            />
            <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
              Remember me
            </Label>
          </div>
          <Button variant="link" className="px-0 text-sm" type="button">
            Forgot password?
          </Button>
        </div>

        <Button 
          type="submit" 
          className="w-full animate-slide-up [animation-delay:200ms]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative animate-slide-up [animation-delay:250ms]">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 animate-slide-up [animation-delay:300ms]">
          <GoogleSignInButton />
        </div>
      </div>

      <div className="mt-6 text-center text-sm animate-slide-up [animation-delay:350ms]">
        <p className="text-muted-foreground">
          Don't have an account?{" "}
          <Link href={"/tourist/auth/register"} className="text-blue-600 hover:underline">
          <Button variant="link" className="p-0">
            <span className="flex items-center">
              Sign up <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;