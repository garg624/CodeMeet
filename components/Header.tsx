import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import logo from "@/public/codemeet_logo_png-removebg-preview.png"
export function Header() {
    return (
        <div className='mx-auto bg-gradient-to-br from-orange-400 to-red-300 dark:bg-gradient-to-r dark:from-purple-800 dark:to-indigo-700 
        flex  items-center container justify-between py-1'>
            <div className="">
                <Image src={logo} alt="logo" className="w-28 " />
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="">
                    <SignedIn>
                        {/* Mount the UserButton component */}
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        {/* Signed out users get sign in button */}
                        <SignInButton />
                    </SignedOut>
                </div>
                <ModeToggle />
            </div>
        </div>
    )
}