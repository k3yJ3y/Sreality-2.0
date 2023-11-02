import Link from 'next/link';
import Header from './ui/header';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col '>
      <Header />
      <div className='relative isolate px-6'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Your Perfect Home Awaits.
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              enim mollitia et vero fuga harum, delectus quis assumenda eligendi
              culpa similique provident architecto totam dolor dolorum
              consequatur dolore, suscipit voluptatum. Sit, possimus? Quaerat
              aut rerum laborum, beatae sapiente quasi omnis.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/properties'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Find your dream house
              </Link>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more about us <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
