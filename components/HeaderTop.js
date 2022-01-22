import Image from 'next/image';

const HeaderTop = ({ headerRef }) => {
  return (
    <div className="w-full h-20" ref={headerRef}>
      <div className="flex max-w-screen-xl m-auto items-center h-20 px-2 justify-between md:px-4 lg:px-6">
        <span className="float-left hidden cursor-pointer hover:text-pink-500 md:block">
          未来への本に出会う
        </span>
        <span className="float-left cursor-pointer h-full w-32 relative md:w-48 md:float-none md:mx-auto">
          <Image
            src="/images/logo.png"
            alt="logo.jpg"
            layout="fill"
            objectFit="cover"
            priority
          />
        </span>
        <span className="float-right h-full w-32 relative md:w-48">
          <Image
            alt="logo-left.png"
            src="/images/logo-left.png"
            layout="fill"
            objectFit="cover"
            priority
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
