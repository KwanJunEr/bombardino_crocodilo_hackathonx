import React from "react";
import SignInForm from "@/components/SignInForm";
import Image from "next/image";

const SignInPage: React.FC = () => {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left side - Sign In Form */}
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-center space-x-2">
            <Image src={"/fishinglogo.png"} width={50} height={50} alt="logo"/>
            <h1 className="text-2xl font-semibold tracking-tight">Pekan Hooked</h1>
          </div>
          
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          
          <div className="mt-8">
            <SignInForm />
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden overflow-hidden bg-gradient-to-br from-primary/90 to-primary/70 md:block">
        <div className="relative h-full w-full">
          <Image
            src="/justfish.jpg"
            width={800}
            height={1200}
            alt="Team collaboration"
            className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/60" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 max-w-md text-primary-foreground/90">
              Sign in to continue your fishing journey in Pekan.
              We're excited to have you back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
