"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { Button } from "./Button";
import { toast } from "./toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing OUT",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignInButton;
