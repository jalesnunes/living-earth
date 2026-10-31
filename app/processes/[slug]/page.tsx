import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const processes = {
  'maps-location-cartographers': ['01', 'Maps, Location, and Cartographers', 'How we locate, represent, and understand Brazil.'],
  'plate-tectonics-earthquakes-volcanoes': ['02', 'Plate Tectonics, Earthquakes, and Volcanoes', 'The deep forces beneath a changing surface.'],
  'weathering-mass-wasting-erosion': ['03', 'Weathering, Mass Wasting, and Erosion', 'How rock and soil move through the landscape.'],
  'fluvial-processes-oceans-coastlines': ['04', 'Fluvial Processes, Oceans, and Coastlines', 'Water as an architect of land and life.'],
  'climate-controls-biomes-climate-change': ['05', 'Climate Controls, Biomes, and Climate Change', 'The conditions that shape Brazil’s living systems.'],
} as const

export function generateStaticParams() { return Object.keys(processes).map((slug) => ({ slug })) }

export default async function ProcessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const process = processes[slug as keyof typeof processes]
  if (!process) notFound()
  return <main className="min-h-screen bg-[#f2eee6] text-[#1e3028]"><header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8"><Link href="/" className="font-serif text-xl">Living Earth<span className="text-[#b46c45]">.</span></Link><Link href="/" className="flex items-center gap-2 text-sm text-[#52625a]"><ArrowLeft size={16}/> All sections</Link></header><section className="mx-auto max-w-5xl px-6 pb-24 pt-16"><span className="font-mono text-sm text-[#b46c45]">{process[0]} / EARTH PROCESSES</span><h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[.95] tracking-[-.04em] sm:text-8xl">{process[1]}</h1><p className="mt-8 max-w-xl text-xl leading-8 text-[#52625a]">{process[2]}</p><div className="mt-20 grid gap-8 border-t border-[#1e3028]/15 pt-8 md:grid-cols-[.7fr_1.3fr]"><p className="font-mono text-xs uppercase tracking-[.16em] text-[#b46c45]">Research placeholder</p><div className="rounded-2xl bg-[#e6e7d8] p-8"><p className="font-serif text-3xl leading-tight">This section will be developed with research, maps, photographs, and visual evidence throughout the block.</p><p className="mt-5 leading-7 text-[#52625a]">Content for this topic will be added week by week as the course progresses.</p></div></div><Link href="/references" className="mt-12 inline-flex items-center gap-2 border-b border-[#1e3028] pb-2 text-sm font-semibold">View references <ArrowUpRight size={16}/></Link></section></main>
}
