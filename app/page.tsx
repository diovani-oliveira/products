"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowRightCircleIcon} from '@heroicons/react/20/solid'
import Header from './components/Header'
import Image from 'next/image'

import logo from './images/logo.png'
import image1 from './images/image1.png'
import back from './icons/arrow-back.svg'
import star from './icons/estrela.png'
import instagram from './icons/instagram.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
                  className="rounded-md bg-white px-10 py-2.5 text-xs font-semibold text-black shadow-sm hover:bg-transparent border transition-all duration-300 hover:text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ver Produtos
                </a>
                <a
                  href="./products"
                  className="rounded-md bg-black px-10 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-transparent border transition-all duration-300 hover:text-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cardápio do Dia
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
      <div className="mb-8 sm:hidden">
        <div className="pb-5 mb-4 border-b border-neutral-800 mx-auto w-11/12 text-white text-xl font-bold"><h1>Cardápio da Semana</h1></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          pagination
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            "--swiper-pagination-color": "#c8c8c8",
            "--swiper-pagination-bullet-inactive-color": 'rgb(23, 23, 23)',
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
          } as any}
        >
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Segunda-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Queijo Mussarela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Erva Doce</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Terça-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Bacon</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maçã com Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Damasco com Chocolate Branco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quarta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Frango</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Banana cm Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate com Café</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quinta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Paçoca com Caramelo</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Churrasco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Nozes <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sexta-Feira</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Parmesão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Stikadinho</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Amendoas com Chocolate Meio Amargo</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sábado</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Castanha do Pará com Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate a Leite</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maça com Canela</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Gorgonzola <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mb-8 hidden sm:block lg:hidden">
        <div className="pb-5 mb-4 border-b border-neutral-800 mx-auto w-11/12 text-white text-xl font-bold"><h1>Cardápio da Semana</h1></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-10}
          pagination
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            "--swiper-pagination-color": "#c8c8c8",
            "--swiper-pagination-bullet-inactive-color": 'rgb(23, 23, 23)',
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
          } as any}
        >
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Segunda-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Queijo Mussarela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Erva Doce</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Terça-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Bacon</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maçã com Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Damasco com Chocolate Branco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quarta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Frango</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Banana cm Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate com Café</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quinta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Paçoca com Caramelo</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Churrasco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Nozes <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sexta-Feira</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Parmesão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Stikadinho</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Amendoas com Chocolate Meio Amargo</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sábado</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Castanha do Pará com Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate a Leite</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maça com Canela</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Gorgonzola <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mb-8 hidden lg:block max-w-screen-2xl mx-auto">
        <div className="pb-5 mb-4 border-b border-neutral-800 mx-auto w-11/12 text-white text-xl font-bold"><h1>Cardápio da Semana</h1></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-10}
          pagination
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            "--swiper-pagination-color": "#c8c8c8",
            "--swiper-pagination-bullet-inactive-color": 'rgb(23, 23, 23)',
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "3px"
          } as any}
        >
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Segunda-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Queijo Mussarela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Erva Doce</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Terça-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Bacon</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Prestígio</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maçã com Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Damasco com Chocolate Branco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quarta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Frango</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Banana cm Canela</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate com Café</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="w-11/12 mx-auto text-white mt-10">
            <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Quinta-Feira</h1>
            <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
              <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Paçoca com Caramelo</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate ao Leite</p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Churrasco <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Nozes <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
              <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sexta-Feira</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Focaccia</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Parmesão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Stikadinho</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Amendoas com Chocolate Meio Amargo</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 mx-auto text-white mt-10">
              <h1 className='text-lg font-semibold w-11/12 mx-auto mb-6'>Sábado</h1>
              <div className="bg-neutral-950 p-3 rounded-2xl mb-10">
                <p className='h-12 flex items-center text-sm w-11/12 mx-auto'>Tradicional</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Tomate com Manjericão</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Linguiça</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Alho Poró</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Castanha do Pará com Chocolate Branco</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Chocolate a Leite</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Maça com Canela</p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'>Gorgonzola <span className='absolute right-10 flex items-center'><Image src={star} alt="" className='mr-2 h-3 w-auto'/>Premium</span></p>
                <p className='h-12 flex items-center text-sm border-t border-neutral-900 w-11/12 mx-auto'> </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
      <div className='relative mx-auto w-full border-t border-neutral-900 pb-3 px-8'>
        <div className="w-full mx-auto max-w-7xl h-full py-6 lg:flex lg:justify-between">
            <div className="w-fit lg:w-4/12 lg:flex mx-auto lg:m-0">
              <Image src={logo} alt="" className='h-12 w-fit mx-auto my-auto'/>
            </div>
            <div className="my-4 mt-12 text-center lg:w-4/12 lg:my-auto lg:flex lg:justify-around lg:border-x border-neutral-800 px-8">
              <p className='border-b border-neutral-800 w-fit mx-auto pb-2 px-4 text-neutral-300 text-sm lg:hidden'>Links Rápidos</p>
              <a href='./' className='my-2'>Início</a>
              <a href='./products' className='my-2'>Produtos</a>
              <a href='./about-us' className='my-2'>Sobre nós</a>
            </div>
            <div className="lg:w-4/12 mt-12 lg:mt-0 flex items-center justify-center">
              <Image src={instagram} alt="" className='h-8 w-fit'/>
            </div>
        </div>
        <div className="bottom-0 top-full bg-white w-screen absolute left-0"><p className='text-black text-xs mx-auto w-fit py-2'>© 2024 | Diovani de Oliveira - Todos os Direitos Reservados</p></div>
      </div>
    </main>
  )
}