"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowRightCircleIcon} from '@heroicons/react/20/solid'
import Header from './components/Header'
import Image from 'next/image'

import logo from './images/logo.png'
import image1 from './images/image1.png'

const links = [
  { name: 'Nome Completo'},
  { name: 'Sabor (Verifique o Cardápio do Dia)'},
  { name: 'Tamanho'},
  { name: 'Retirada ou Entrega'},
]
const stats1 = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
const stats2 = [
  { id: 1, name: 'Segunda-Feira', value: '13h às 18h' },
  { id: 2, name: 'Terça à Sexta', value: '08h às 18h' },
  { id: 3, name: 'Sábado', value: '10h às 17h' },
  { id: 4, name: 'Domingo', value: 'Fechado' },
]
const features = [
  {
    name: 'Um mundo de delícias!',
    description: 'Com ingredientes cuidadosamente selecionados, mantemos o sabor irresistível de sempre, enquanto abrimos as portas para um mundo de delícias sem lactose.',
    icon: ArrowRightCircleIcon,
  },
  {
    name: 'Experimente!',
    description: 'Experimente hoje mesmo e descubra uma nova maneira de se deliciar! Venha nos visitar e faça parte dessa nova experiência.',
    icon: ArrowRightCircleIcon,
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className='bg-black text-white'>
      <Header />
      <div className="h-screen">

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#333333] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Diversos sabores todos os dias!😋.{' '}
                <a href="./products" className="font-semibold text-white hover:underline">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Ver Sabores <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Roscas e cucas gourmet ✨
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
              Sabe aquele café coletivo? Na sua empresa, trabalho, escola ou onde você quiser… Temos ótimas opções pra você servir nesses momentos! Quem prova se apaixona. Garanta seu cafezinho hoje mesmo!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="./products"
                  className="rounded-md bg-white px-10 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-transparent border transition-all duration-300 hover:text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ver Produtos
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#131212] to-[#d7d6db] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-neutral-800">Novidade!</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sem Lactose</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Para os intolerantes a lactose ou que não consomem leite de origem animal temos opção da rosca sem lactose feita com leite vegetal.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-neutral-700" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={image1}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Recado Importante!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ficamos com o WhatsApp aberto no computador, portanto os pedidos em áudios não conseguimos escutar.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Faça seu pedido em apenas um texto com as seguintes informações:
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                  <p>{link.name} <span aria-hidden="true">&rarr;</span></p>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-36 py-8 max-w-7xl lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center ssm:grid-cols-2 lg:grid-cols-4">
            {stats2.map((stat2) => (
              <div key={stat2.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-neutral-400">{stat2.name}</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat2.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>        
      <div className='mx-auto max-w-7xl border-t border-neutral-900'>
        <a href="./">Início</a>
        <a href="./products">Produtos</a>
        <a href="./about-us">Sobre nós</a>
        <button>Nos siga no Instagram</button>
        <h1>Desenvolvido por:</h1>
        <h1>Diovani de Oliveira</h1>
        <p>© 2024 | Diovani de Oliveira - Todos os Direitos Reservados</p>
      </div>
    </main>
  )
}