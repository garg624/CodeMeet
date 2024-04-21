
import { currentUser, auth } from '@clerk/nextjs/server';
import Image from "next/image";
import logo from "@/public/codemeet_logo_png-removebg-preview.png"
import { SignOutButton, SignInButton } from "@clerk/nextjs";

import { useEffect } from 'react';
export default async function Home() {
  const user = await currentUser();
  const email = await user?.primaryEmailAddress?.emailAddress;
  const { userId } = auth();
  


  console.log(userId);
  // const imageUrl= await user?.profileImageUrl;
 
  return (
    <main className="">
      CodeMeet
      <Image src={logo} alt="logo" className="w-60 h-40" />
      <div>Hello {user?.firstName}</div>
      <h1>{user?.imageUrl}</h1>
      <h1>{email}</h1>
      <h1>User id : {userId}</h1>
      <SignOutButton />
      <SignInButton />
    </main>
  );
}
