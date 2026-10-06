"use client";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
const links = [["Início", "#hero"], ["Variedades", "#categorias"], ["Rodízio", "#rodizio"], ["Cardápio", "#cardapio"], ["Sobre", "#sobre"], ["Contato", "#localizacao"]] as const;
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent py-5">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#hero" className="group"><span className="block text-xs font-extrabold uppercase tracking-[0.3em] text-brandYellow">PIZZARIA</span><span className="block max-w-[220px] truncate text-2xl font-black tracking-tight text-white group-hover:text-brandYellow">{site.shortName}</span></a>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="py-1 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brandYellow">{label}</a>)}</nav>
      <a href="#localizacao" className="hidden items-center gap-2 rounded-full bg-brandYellow px-6 py-3 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-brandYellow/20 hover:scale-105 md:inline-flex"><Calendar className="h-4 w-4" /> Reservar mesa</a>
      <button type="button" onClick={() => setOpen(!open)} className="p-2 text-white md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}</button>
    </div>
    <div className={`${open ? "block" : "hidden"} border-b border-white/10 bg-darkCard px-4 pb-6 pt-4 md:hidden`}><div className="space-y-3">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-base font-bold text-gray-200 hover:bg-white/5 hover:text-brandYellow">{label}</a>)}<a href="#localizacao" onClick={() => setOpen(false)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brandYellow py-3 text-sm font-black uppercase text-black"><Calendar className="h-4 w-4" /> Reservar mesa</a></div></div>
  </header>;
}
