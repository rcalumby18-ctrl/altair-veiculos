import { VENDOR_INFO, WHATSAPP_LINK } from "@/lib/constants"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Info */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                {VENDOR_INFO.company}
              </span>
            </div>
            <p className="text-lg font-medium text-foreground">
              {VENDOR_INFO.name}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-accent md:justify-start"
            >
              <Phone className="h-4 w-4" />
              <span>{VENDOR_INFO.phone}</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4" />
              <span>{VENDOR_INFO.city}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {VENDOR_INFO.company}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
