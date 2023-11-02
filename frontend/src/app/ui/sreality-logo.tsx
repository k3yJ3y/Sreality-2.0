import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SrealityLogo() {
  return (
    <div className={`flex flex-row items-center leading-none`}>
      {/* <GlobeAltIcon className='h-8 w-8 rotate-[15deg]' />
      {/* <p className='text-[25px]'>
        <span>S</span>reality 2.0
      </p> */}
      <Image
        src='https://www.sreality.cz/img/logo-sreality.svg'
        width='175'
        height='24'
        alt=''
        priority={true}
      />
    </div>
  );
}
