import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Children } from "react";
import { ArrowLeft } from "lucide-react";

export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link className={buttonVariants({ variant: "secondary" })} href="/"><ArrowLeft className="size-4" /> Go back</Link>
            </div>
            <div className="w-full max-w-md mx-auto">
                {children}
            </div>
        </div>
    )
}