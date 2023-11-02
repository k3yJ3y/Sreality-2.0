'use client';
import { useState, useEffect } from 'react';

import Header from '../ui/header';
import Card from '../ui/card';

import { Property } from '../lib/definitions';
import Pagination from '../ui/pagination';
import Footer from '../ui/footer';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const currentPage = Number(searchParams?.page) || 1;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/properties?page=${currentPage}`
        );
        if (response.ok) {
          const data = await response.json();
          setProperties(data.properties);
        } else {
          console.error('Failed to fetch properties.');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, [currentPage]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/properties/pages`
        );
        if (response.ok) {
          const data = await response.json();
          setTotalPages(data.totalPages);
        } else {
          console.error('Failed to fetch pages.');
        }
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };
    fetchPages();
  }, []);

  return (
    <main className='flex min-h-screen flex-col '>
      <Header />
      <div className='container px-5 mx-auto mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {properties.map((property) => (
            <Card
              key={property.title + property.propertyid}
              title={property.title}
              imageUrl={property.image_url}
            />
          ))}
        </div>
        <div className='m-5 flex w-full justify-center'>
          {totalPages ? (
            <div className='bg-white rounded-lg shadow-lg p-5'>
              <Pagination totalPages={totalPages} />
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </main>
  );
}
