import React from 'react';

import Image from 'next/image';

const Card = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
      <Image
        src={imageUrl}
        alt={`Card Image for ${title}`}
        className='w-full h-40 object-cover'
        width={247}
        height={185}
        priority={false}
      />
      <div className='p-4'>
        <h2 className='text-xl font-semibold'>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
