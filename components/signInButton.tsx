"use client";
import { Button } from "@heroui/react";
import { login } from "@/lib/actions/auth";
export const SignInButton = () => {
  return <Button onPress={() => login()}>Sign in with GitHub</Button>;
};
