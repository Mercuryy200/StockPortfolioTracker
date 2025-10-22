"use client";
import { Button } from "@heroui/react";
import { logout } from "@/lib/actions/auth";
export const SignOutButton = () => {
  return <Button onPress={() => logout()}>Sign out</Button>;
};
