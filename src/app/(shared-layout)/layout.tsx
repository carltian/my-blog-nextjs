import { Navbar } from "@/components/web/Navbar";
import { Children } from "react";

export default function SharedLayout({children} : {children: React.ReactNode}) {
    return (
    <div>
    <Navbar />
    {children}
    </div>
)}