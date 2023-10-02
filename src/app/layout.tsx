import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ducktracio",
    description: "Ducktracio game developer webpage",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={lexend.className}>{children}</body>
        </html>
    );
}
