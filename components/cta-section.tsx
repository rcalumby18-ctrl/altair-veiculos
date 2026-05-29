import { Button } from "@/components/ui/button"
import { WHATSAPP_LINK } from "@/lib/constants"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-accent/10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Vamos encontrar o carro ideal para você?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/80">
              Entre em contato agora e receba atendimento personalizado
              diretamente comigo. Estou pronto para ajudar você a realizar o
              sonho do carro novo!
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-14 bg-accent px-8 text-lg text-accent-foreground hover:bg-accent/90"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Resposta em até 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
