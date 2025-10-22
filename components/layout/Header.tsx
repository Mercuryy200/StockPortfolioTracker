"use server";
import { NavbarLoggedIn, NavbarLoggedOut } from "@/components/layout/Navbar";

import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();
  if (session?.user) {
    return <NavbarLoggedIn />;
  }
  return <NavbarLoggedOut />;
}
