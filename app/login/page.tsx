import logo from '../images/logo.png'
import Header from '../components/Header'
import Image from 'next/image'
import Arrowback from '../icons/arrow-back.svg'

export default function Example() {
    return (
      <main className='bg-black'>
        <header className='absolute inset-x-0 top-0 z-50 p-6 lg:px-8 flex justify-between items-center'>
            <Image src={logo} alt="" className='h-10 w-auto'/>
            <a href="./" className='text-white font-semibold flex items-center'><Image src={Arrowback} alt='' className='w-7'/>Voltar</a>
        </header>
        <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Entre em sua conta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-300">
                  Endereço de E-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='nomesobrenome@email.com'
                    required
                    className="pl-4 bg-neutral-950 block w-full rounded-md py-1.5 text-neutral-300 shadow-sm  placeholder:text-neutral-400 border-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-300">
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-4 bg-neutral-950 block w-full rounded-md py-1.5 text-neutral-300 shadow-sm  placeholder:text-neutral-400 border-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-neutral-300">
              Não tem uma conta ainda?{' '}
              <a href="#" className="font-semibold leading-6 text-white">
                Crie sua conta agora.
              </a>
            </p>
          </div>
        </div>
      </main>
    )
  }