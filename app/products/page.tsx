import Header from '../components/Header'

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '48,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '35,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '89,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '35,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      href: '#',
      price: '48,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      price: '35,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      href: '#',
      price: '89,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '35,00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

export default function Products(){
    return(
        <main>
            <Header />
            <section className="">
                <div className="bg-black pt-6">
                <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-3xl lg:px-8">
                    <h2 className="text-white text-2xl font-semibold">Nossos produtos</h2>
                    <p className='text-neutral-300 mb-4 mt-1'>Temos 6 deliciosos sabores disponíveis!</p>
                    <div className="w-full border border-neutral-900 mb-10"></div>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-10 ssm:grid-cols-2 ssm:gap-x-2 sm:grid-cols-3 sm:gap-x-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-6 2xl:grid-cols-6">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-neutral-300">{product.name}</h3>
                        <p className="mt-1 text-lg font-medium text-white">R$ {product.price}</p>
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}