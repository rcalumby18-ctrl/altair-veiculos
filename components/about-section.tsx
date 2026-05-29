import Image from "next/image"
import { VENDOR_INFO } from "@/lib/constants"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wVkzLNDiYltoJV68l89pqTSfKGXW38.png"
                alt="Altair de Oliveira - Consultor de Vendas"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-lg sm:-bottom-6 sm:-right-6 sm:p-6">
              <p className="text-2xl font-bold text-primary-foreground sm:text-3xl">100%</p>
              <p className="text-xs text-primary-foreground/80 sm:text-sm">Comprometido</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-0">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              Conheça o consultor
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quem é {VENDOR_INFO.name}?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Com atendimento próximo e transparente, auxilio meus clientes a
              encontrarem o veículo ideal, oferecendo suporte durante todo o
              processo de compra, financiamento e negociação.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Na {VENDOR_INFO.company}, em {VENDOR_INFO.city}, você encontra uma
              equipe preparada para oferecer as melhores oportunidades do
              mercado, sempre com foco na sua satisfação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
