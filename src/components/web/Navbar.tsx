import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar(): React.ReactNode {
  return (
    <div>
      <nav className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
            <Link href="/">
            <h1 className="text-3xl font-bold">Next<span className="text-blue-500">Pro</span></h1>
            </Link>

            <div className="flex items-center gap-2">
                <Link className={buttonVariants({ variant: "ghost" })} href="/">Home</Link>
                <Link
                    className={buttonVariants({ variant: "ghost" })}
                    href="/blog">Blog</Link>
                <Link
                    href="/create"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                >
                    Create
                </Link>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <Link className={cn(buttonVariants({ variant: 'outline'}))} href="/auth/sign-up">Sign Up</Link>
            <Link href="/auth/log-in">LogIn</Link>
            <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
