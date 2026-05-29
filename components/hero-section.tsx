import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/constants"
import { MessageCircle, Car } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Seu próximo carro está mais perto do que você imagina
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Atendimento personalizado com Altair de Oliveira na Pirâmide
              Veículos. Encontre o veículo ideal com segurança, transparência e
              as melhores condições de negociação.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#servicos">
                  <Car className="mr-2 h-5 w-5" />
                  Ver serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
                alt="Carro premium moderno"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-background p-4 shadow-lg sm:-bottom-6 sm:-left-6 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Resposta Rápida</p>
                  <p className="text-xs text-muted-foreground">Via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
