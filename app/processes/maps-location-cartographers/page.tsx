import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const maps = [
  {
    number: '01',
    title: 'Brazil in South America',
    type: 'pdf',
    src: 'https://educa.ibge.gov.br/images/mapas/pdf/continentes-e-regioes-do-mundo-america-do-sul-politico-p-47.pdf',
    alt: 'IBGE political map of South America',
    description:
      'This map places Brazil in eastern and central South America, along the Atlantic coast. It also shows neighboring countries, the Equator, and the Tropic of Capricorn.',
    projection: 'Cylindrical Equidistant Meridional projection.',
    source:
      'https://educa.ibge.gov.br/images/mapas/pdf/continentes-e-regioes-do-mundo-america-do-sul-politico-p-47.pdf',
  },
  {
    number: '02',
    title: 'Extreme points and geographic extent',
    type: 'pdf',
    src: 'https://educa.ibge.gov.br/images/7a12/mapas/Brasil/mapa_pontos-extremosfronteiras.pdf',
    alt: 'IBGE map showing Brazil’s extreme points, borders, and lines of latitude',
    description:
      'The map identifies Brazil’s northern, southern, eastern, and western extreme points. The Equator and Tropic of Capricorn help show how far the country extends across tropical and temperate latitudes.',
    projection: 'Polyconic projection.',
    source:
      'https://educa.ibge.gov.br/images/7a12/mapas/Brasil/mapa_pontos-extremosfronteiras.pdf',
  },
  {
    number: '03',
    title: 'Brazil’s current political divisions',
    type: 'pdf',
    src: 'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/2/bn_2023_v31_art02.pdf#page=63',
    alt: 'IBGE political map of Brazil showing state boundaries',
    description:
      'This modern political map shows Brazil’s states, the Federal District, cities, and transportation routes. It gives a current reference for comparing today’s political organization with historical maps.',
    projection: 'Polyconic projection; SIRGAS 2000 horizontal datum.',
    source:
      'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/2/bn_2023_v31_art02.pdf',
  },
  {
    number: '04',
    title: 'The Empire of Brazil in 1868',
    type: 'image',
    src: 'https://media.davidrumsey.com/MediaManager/srvr?mediafile=%2FSize3%2FRUMSEY~8~1%2F179%2F11946024.jpg',
    alt: '1868 map of the Empire of Brazil showing electoral divisions, rivers, and mountains',
    description:
      'Created by Cândido Mendes de Almeida, this map shows the Empire’s electoral divisions and includes information about provinces, settlements, rivers, and mountains.',
    projection: 'The collection record does not specify a map projection.',
    source:
      'https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~305746~90076441:II-B--Imperio-do-Brazil--Divisao-El',
  },
  {
    number: '05',
    title: 'Changes in Brazil’s territorial divisions, 1872–2010',
    type: 'pdf',
    src: 'https://geoftp.ibge.gov.br/organizacao_do_territorio/estrutura_territorial/evolucao_da_divisao_territorial_do_brasil/evolucao_da_divisao_territorial_do_brasil_1872_2010/evolucao_da_divisao_territorial_mapas.pdf',
    alt: 'IBGE historical map series showing changes in Brazil’s territorial divisions',
    description:
      'This IBGE map series follows changes in state and municipal divisions from 1872 to 2010. It helps show how the political map changed as Brazil’s administrative organization developed.',
    projection: 'The series contains maps from different years; check each map’s notes for projection details.',
    source:
      'https://www.ibge.gov.br/geociencias/organizacao-do-territorio/estrutura-territorial/15771-evolucao-da-divisao-territorial-do-brasil.html',
  },
]

export default function MapsLocationCartographersPage() {
  return (
    <main className="min-h-screen bg-[#f2eee6] text-[#1e3028]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <Link href="/" className="font-serif text-xl">
          Terra Viva
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-[#52625a]"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-12 pt-12">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#b46c45]">
          Brazil · Maps and place
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[.95] tracking-[-.04em] sm:text-8xl">
          Maps, location, and cartographers.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52625a]">
          Maps show Brazil at different scales and moments in time: its
          position in South America, its geographic extent, its present-day
          political divisions, and the changing boundaries of its territory.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {maps.map((map) => (
            <article
              key={map.number}
              className="overflow-hidden rounded-2xl border border-[#1e3028]/10 bg-[#e6e7d8]"
            >
              <div className="flex items-center justify-between px-6 pt-6">
                <span className="font-mono text-xs text-[#b46c45]">
                  MAP {map.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#52625a]">
                  Brazil
                </span>
              </div>

              <h2 className="px-6 pt-3 font-serif text-3xl leading-tight">
                {map.title}
              </h2>

              <div className="mx-6 mt-5 overflow-hidden rounded-xl border border-[#1e3028]/10 bg-white">
                {map.type === 'image' ? (
                  <img
                    src={map.src}
                    alt={map.alt}
                    loading="lazy"
                    className="h-[25rem] w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={map.src}
                    title={map.alt}
                    loading="lazy"
                    className="h-[25rem] w-full"
                  />
                )}
              </div>

              <div className="space-y-3 p-6">
                <p className="text-sm leading-6 text-[#52625a]">
                  {map.description}
                </p>
                <p className="text-xs leading-5 text-[#52625a]">
                  <strong className="text-[#1e3028]">Projection:</strong>{' '}
                  {map.projection}
                </p>
                <a
                  href={map.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[#1e3028]/40 pb-1 text-xs font-semibold text-[#1e3028] hover:border-[#b46c45] hover:text-[#b46c45]"
                >
                  Open map and source
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1e3028]/10 bg-[#e6e7d8]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#b46c45]">
            Reading the maps
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-.035em]">
            Four questions about Brazil.
          </h2>

          <div className="mt-12 space-y-10">
            <div className="grid gap-4 border-t border-[#1e3028]/15 pt-6 md:grid-cols-[.7fr_1.3fr]">
              <h3 className="font-mono text-xs uppercase tracking-[.16em] text-[#b46c45]">
                01 · Continent and region
              </h3>
              <p className="max-w-2xl leading-7 text-[#52625a]">
                Brazil is in South America. It occupies a large part of the
                continent’s eastern and central areas and has a long coastline
                on the Atlantic Ocean (Instituto Brasileiro de Geografia e
                Estatística [IBGE], n.d.).
              </p>
            </div>

            <div className="grid gap-4 border-t border-[#1e3028]/15 pt-6 md:grid-cols-[.7fr_1.3fr]">
              <h3 className="font-mono text-xs uppercase tracking-[.16em] text-[#b46c45]">
                02 · Latitudinal range
              </h3>
              <p className="max-w-2xl leading-7 text-[#52625a]">
                The Brazilian mainland extends from 5°16′19″ N at the source
                of the Ailã River in Roraima to 33°45′04″ S at Arroio Chuí in
                Rio Grande do Sul. These IBGE coordinates exclude oceanic
                islands (IBGE, 2023).
              </p>
            </div>

            <div className="grid gap-4 border-t border-[#1e3028]/15 pt-6 md:grid-cols-[.7fr_1.3fr]">
              <h3 className="font-mono text-xs uppercase tracking-[.16em] text-[#b46c45]">
                03 · Years and political periods
              </h3>
              <p className="max-w-2xl leading-7 text-[#52625a]">
                Brazil proclaimed independence in 1822 and became the Empire
                of Brazil. The Empire ended when the Republic was proclaimed
                in 1889; Brazil has been a republic since then. Portugal
                formally recognized Brazilian independence in 1825 (IBGE,
                2011; Ministério das Relações Exteriores, 1825).
              </p>
            </div>

            <div className="grid gap-6 border-t border-[#1e3028]/15 pt-6 md:grid-cols-[.7fr_1.3fr]">
              <h3 className="font-mono text-xs uppercase tracking-[.16em] text-[#b46c45]">
                04 · A Brazilian cartographer
              </h3>

              <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
                <figure>
                  <img
                    src="https://www25.senado.leg.br/senadores-portlet/img/senador-portrait.png"
                    alt="Portrait of Cândido Mendes de Almeida"
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-xl bg-[#d7cbbb] object-cover"
                  />
                  <figcaption className="mt-2 text-xs leading-5 text-[#52625a]">
                    Cândido Mendes de Almeida. Image: Federal Senate of Brazil.
                  </figcaption>
                </figure>

                <div>
                  <h4 className="font-serif text-3xl">
                    Cândido Mendes de Almeida (1818–1881)
                  </h4>
                  <p className="mt-4 leading-7 text-[#52625a]">
                    Mendes was a Brazilian lawyer, professor, public servant,
                    and politician from Maranhão. He taught history and
                    geography and organized the{' '}
                    <em>Atlas do Império do Brazil</em> in 1868. The atlas
                    brought together maps of the provinces and information
                    about administrative, electoral, ecclesiastical, and
                    judicial divisions, as well as rivers, mountains, and
                    population. It is considered a landmark in Brazilian
                    cartography and was used as a reference for later works
                    (Câmara dos Deputados, n.d.; Senado Federal, n.d.).
                  </p>
                  <p className="mt-4 leading-7 text-[#52625a]">
                    One major accomplishment was organizing a broad national
                    atlas at a time when Brazil’s internal and international
                    boundaries were still being defined. The 1868 map above
                    shows how cartography recorded the Empire’s political
                    organization, while also reflecting the limits of
                    geographic knowledge at that time (Câmara dos Deputados,
                    n.d.; Mendes, 1868).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#b46c45]">
          Sources
        </p>
        <h2 className="mt-4 font-serif text-4xl">References</h2>

        <ol className="mt-8 space-y-5 text-sm leading-6 text-[#52625a]">
          <li className="border-t border-[#1e3028]/10 pt-4">
            Câmara dos Deputados. (n.d.).{' '}
            <em>Atlas do Império do Brazil</em> [Digital collection].{' '}
            <a
              className="underline"
              href="https://bd.camara.leg.br/bd/items/703dc909-1fca-41fb-b75c-f7b045c94b75"
              target="_blank"
              rel="noreferrer"
            >
              https://bd.camara.leg.br/bd/items/703dc909-1fca-41fb-b75c-f7b045c94b75
            </a>
          </li>

          <li>
            IBGE. (n.d.). <em>South America: Political</em> [Map]. Educa IBGE.{' '}
            <a
              className="underline"
              href="https://educa.ibge.gov.br/images/mapas/pdf/continentes-e-regioes-do-mundo-america-do-sul-politico-p-47.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://educa.ibge.gov.br/images/mapas/pdf/continentes-e-regioes-do-mundo-america-do-sul-politico-p-47.pdf
            </a>
          </li>

          <li>
            IBGE. (2011).{' '}
            <em>Evolução da divisão territorial do Brasil: 1872–2010</em>{' '}
            [Map series].{' '}
            <a
              className="underline"
              href="https://www.ibge.gov.br/geociencias/organizacao-do-territorio/estrutura-territorial/15771-evolucao-da-divisao-territorial-do-brasil.html"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ibge.gov.br/geociencias/organizacao-do-territorio/estrutura-territorial/15771-evolucao-da-divisao-territorial-do-brasil.html
            </a>
          </li>

          <li>
            IBGE. (2017). <em>Pontos extremos e fronteiras</em> [Map].{' '}
            <a
              className="underline"
              href="https://educa.ibge.gov.br/images/7a12/mapas/Brasil/mapa_pontos-extremosfronteiras.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://educa.ibge.gov.br/images/7a12/mapas/Brasil/mapa_pontos-extremosfronteiras.pdf
            </a>
          </li>

          <li>
            IBGE. (2023). <em>Brasil em números</em> (Vol. 31).{' '}
            <a
              className="underline"
              href="https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/2/bn_2023_v31_art02.pdf"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/2/bn_2023_v31_art02.pdf
            </a>
          </li>

          <li>
            Mendes, C. (1868).{' '}
            <em>
              Atlas do imperio do Brazil: comprehendendo as respectivas
              divisões administrativas, ecclesiasticas, eleitoraes e
              judiciarias
            </em>{' '}
            [Atlas]. Library of Congress.{' '}
            <a
              className="underline"
              href="https://www.loc.gov/item/map50000029/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.loc.gov/item/map50000029/
            </a>
          </li>

          <li>
            Mendes, C. (1868).{' '}
            <em>II B. Imperio do Brazil. Divisao Electoral</em> [Map]. David
            Rumsey Map Collection.{' '}
            <a
              className="underline"
              href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~305746~90076441:II-B--Imperio-do-Brazil--Divisao-El"
              target="_blank"
              rel="noreferrer"
            >
              https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~305746~90076441:II-B--Imperio-do-Brazil--Divisao-El
            </a>
          </li>

          <li>
            Ministério das Relações Exteriores. (1825).{' '}
            <em>Tratado original entre Portugal e Brasil</em> [Treaty]. Itamaraty
            Digital.{' '}
            <a
              className="underline"
              href="https://atom.itamaraty.gov.br/index.php/trat-p17-m25-1825-08-29-04?sf_culture=pt"
              target="_blank"
              rel="noreferrer"
            >
              https://atom.itamaraty.gov.br/index.php/trat-p17-m25-1825-08-29-04?sf_culture=pt
            </a>
          </li>

          <li>
            Senado Federal. (n.d.). <em>Cândido Mendes</em> [Photograph and
            biographical profile].{' '}
            <a
              className="underline"
              href="https://www25.senado.leg.br/pt_BR/web/senadores/senador/-/perfil/1535"
              target="_blank"
              rel="noreferrer"
            >
              https://www25.senado.leg.br/pt_BR/web/senadores/senador/-/perfil/1535
            </a>
          </li>

          <li>
            OpenAI. (2026). <em>ChatGPT</em> [Large language model].{' '}
            <a
              className="underline"
              href="https://chatgpt.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://chatgpt.com/
            </a>
          </li>
        </ol>

        <p className="mt-8 max-w-3xl border-l-2 border-[#b46c45] pl-4 text-xs leading-5 text-[#52625a]">
          AI-use note: ChatGPT helped organize this research draft. The facts
          and maps are linked to the sources above. Review the sources and
          revise the wording in your own voice before submitting.
        </p>
      </section>

      <footer className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-xs text-[#52625a] md:flex-row md:items-center md:justify-between">
        <span>Terra Viva · Brazil</span>
        <span>Earth science project · 2026</span>
      </footer>
    </main>
  )
}