"use server";
import Hero from "@/components/layout/Hero";
import Image from "next/image";
import { SignInButton } from "@/components/signInButton";
import { SignOutButton } from "@/components/signOutButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="">
        <h1>Welcome {session.user.name}</h1>
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        )}
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="">
      <Hero></Hero>
      <SignInButton />
    </div>
  );
}
