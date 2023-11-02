export default function Loading() {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-80'>
      <div className='bg-white p-5 rounded-lg shadow-lg'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto'></div>
        <p className='mt-2 text-gray-600 text-center'>Loading...</p>
      </div>
    </div>
  );
}
