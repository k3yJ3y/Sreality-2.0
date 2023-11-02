'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = currentPage - 5; i <= currentPage + 5; i++) {
      if (i > 0 && i <= totalPages) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <Link key={pageNumber} href={createPageURL(pageNumber)}>
        <div
          className={clsx('px-2 py-1 rounded-md', {
            'bg-gray-500 text-white': currentPage === pageNumber,
            'bg-white text-gray-500': currentPage !== pageNumber,
          })}
        >
          {pageNumber}
        </div>
      </Link>
    ));
  };

  return (
    <div className='flex justify-center items-center space-x-2'>
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)}>
          <div className='px-2 py-1 rounded-md bg-gray-500 text-white'>
            <ArrowLeftIcon className='w-5 h-5' />
          </div>
        </Link>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)}>
          <div className='px-2 py-1 rounded-md bg-gray-500 text-white'>
            <ArrowRightIcon className='w-5 h-5' />
          </div>
        </Link>
      )}
    </div>
  );
}
