import {
  Search,
  Calculator,
  ArrowLeftRight,
  Tag,
  FileText,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/constants"

const services = [
  {
    icon: Search,
    title: "Encontrar o carro ideal",
    description: "Ajudo você a encontrar o veículo perfeito para seu perfil e necessidades.",
  },
  {
    icon: Calculator,
    title: "Simular financiamento",
    description: "Simulações personalizadas com as melhores taxas do mercado.",
  },
  {
    icon: ArrowLeftRight,
    title: "Avaliar seu veículo na troca",
    description: "Avaliação justa e transparente do seu carro atual.",
  },
  {
    icon: Tag,
    title: "Apresentar ofertas exclusivas",
    description: "Acesso a oportunidades especiais e condições diferenciadas.",
  },
  {
    icon: FileText,
    title: "Tirar dúvidas sobre documentação",
    description: "Orientação completa sobre transferência e regularização.",
  },
  {
    icon: Headphones,
    title: "Acompanhar todo o processo",
    description: "Suporte do início ao fim da sua jornada de compra.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Serviços
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como posso ajudar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Estou pronto para auxiliar em cada etapa da sua compra, desde a
            escolha do veículo até a entrega das chaves.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-secondary/30 p-5 transition-all duration-300 hover:border-accent/50 hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Falar sobre minha necessidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
