import Link from 'next/link'
import { ArrowUpRight, Compass, Layers3, Menu, Mountain, Waves } from 'lucide-react'

const processLinks = [
  { href: '/processes/maps-location-cartographers', number: '01', title: 'Maps, Location, and Cartographers', icon: Compass },
  { href: '/processes/plate-tectonics-earthquakes-volcanoes', number: '02', title: 'Plate Tectonics, Earthquakes, and Volcanoes', icon: Mountain },
  { href: '/processes/weathering-mass-wasting-erosion', number: '03', title: 'Weathering, Mass Wasting, and Erosion', icon: Layers3 },
  { href: '/processes/fluvial-processes-oceans-coastlines', number: '04', title: 'Fluvial Processes, Oceans, and Coastlines', icon: Waves },
  { href: '/processes/climate-controls-biomes-climate-change', number: '05', title: 'Climate Controls, Biomes, and Climate Change', icon: Compass },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2eee6] text-[#1e3028]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="font-serif text-xl tracking-tight">Living Earth<span className="text-[#b46c45]">.</span></Link>
        <nav className="hidden items-center gap-8 text-sm text-[#52625a] md:flex">
          <Link className="transition-colors hover:text-[#1e3028]" href="/about">About</Link>
          <Link className="transition-colors hover:text-[#1e3028]" href="#processes">Earth processes</Link>
          <Link className="transition-colors hover:text-[#1e3028]" href="/references">References</Link>
        </nav>
        <button className="rounded-full border border-[#1e3028]/15 p-2 md:hidden" aria-label="Open navigation"><Menu /></button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#b46c45]">Earth science · Brazil</p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[.94] tracking-[-.045em] sm:text-7xl lg:text-[7.5rem]">A country shaped by <em className="text-[#b46c45]">living</em> forces.</h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-[#52625a]">An exploration of Brazil&apos;s landscapes, systems, and the geologic stories written across its vast territory.</p>
          <Link href="/about" className="mt-9 inline-flex items-center gap-2 border-b border-[#1e3028] pb-2 text-sm font-semibold">Explore the project <ArrowUpRight size={16} /></Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#c9d0bd]">
          <img src="/brazil-landscape.png" alt="Brazilian rainforest and coastline at golden hour" className="aspect-[4/5] w-full object-cover lg:aspect-[4/4.7]" />
          <div className="absolute bottom-5 left-5 rounded-full bg-[#f2eee6]/90 px-4 py-2 text-xs tracking-wide backdrop-blur">Brazil · South America</div>
        </div>
      </section>

      <section className="border-y border-[#1e3028]/10 bg-[#e6e7d8]" id="processes">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#b46c45]">The field notes</p><h2 className="mt-3 font-serif text-5xl tracking-[-.035em]">Five ways to read a landscape.</h2></div><p className="max-w-xs text-sm leading-6 text-[#52625a]">Research sections will be developed week by week throughout the block.</p></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#1e3028]/10 bg-[#1e3028]/10 md:grid-cols-2 lg:grid-cols-3">
            {processLinks.map(({ href, number, title, icon: Icon }) => <Link key={href} href={href} className="group flex min-h-52 flex-col justify-between bg-[#e6e7d8] p-6 transition-colors hover:bg-[#f2eee6]"><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#b46c45]">{number}</span><Icon className="text-[#52625a] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></div><h3 className="max-w-xs font-serif text-2xl leading-tight">{title}</h3></Link>)}
            <Link href="/references" className="group flex min-h-52 flex-col justify-between bg-[#1e3028] p-6 text-[#f2eee6] transition-colors hover:bg-[#b46c45]"><span className="font-mono text-xs text-[#d7aa8b]">Sources</span><div className="flex items-end justify-between"><h3 className="font-serif text-2xl">References &amp; field guide</h3><ArrowUpRight className="shrink-0" /></div></Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#52625a] md:flex-row md:items-center md:justify-between lg:px-10"><span>Living Earth · Brazil</span><span>Earth science project · 2026</span></footer>
    </main>
  )
}
