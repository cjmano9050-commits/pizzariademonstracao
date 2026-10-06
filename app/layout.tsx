import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
export const metadata: Metadata = { title: `${site.name} | Pizza, Delivery e Reservas`, description: site.heroText, openGraph: { title: site.name, description: site.heroText, images: [{ url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80", width: 1200, height: 800, alt: "Pizza artesanal" }], locale: "pt_BR", type: "website" }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className="scroll-smooth"><body>{children}</body></html>}
