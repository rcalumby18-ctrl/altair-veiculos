import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Altair de Oliveira | Pirâmide Veículos - Pato Branco PR',
  description: 'Encontre o veículo ideal com Altair de Oliveira na Pirâmide Veículos. Atendimento personalizado, financiamento facilitado e as melhores condições em carros novos, seminovos e usados em Pato Branco - PR.',
  keywords: ['carros', 'veículos', 'seminovos', 'usados', 'novos', 'Pato Branco', 'Pirâmide Veículos', 'Altair de Oliveira', 'financiamento', 'troca'],
  authors: [{ name: 'Altair de Oliveira' }],
  openGraph: {
    title: 'Altair de Oliveira | Pirâmide Veículos',
    description: 'Seu próximo carro está mais perto do que você imagina. Atendimento personalizado com as melhores condições.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
