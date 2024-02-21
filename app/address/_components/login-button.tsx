'use client'

import { Button } from "@/app/_components/ui/button";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  const handleSignInClick = () => {
    signIn('google');
  }

  return (
    <Button onClick={handleSignInClick}>
      Fazer login
    </Button>
  );
}

export default LoginButton;