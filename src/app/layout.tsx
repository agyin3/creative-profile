import type { Metadata } from "next";
import { Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({
    variable: "--font-shrikhand",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Buddy Agyin",
    description: "A peek into the mind of Buddy Agyin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${shrikhand.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
