import Image from 'next/image';

const BookItem = ({ image, name }) => {
  return (
    <div className="flex flex-col w-full items-center px-2 my-4 md:my-0 md:px-4 lg:px-6 md:mb-4 md:w-1/2 lg:w-1/4">
      <span className="relative w-full h-64 rounded-sm overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </span>
      <p className="text-md mt-3 font-semibold text-gray-700 cursor-pointer hover:text-pink-500">
        {name}
      </p>
    </div>
  );
};

export default BookItem;
