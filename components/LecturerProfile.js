import Image from 'next/image';

const LecturerProfile = ({
  image,
  specialty,
  production,
  description,
  name,
  university,
  document,
}) => {
  return (
    <div className="w-full flex flex-col border-b-2 pb-4 mt-4 items-center border-gray-200 md:flex-row md:items-start">
      <span className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={name}
          priority
          objectFit="cover"
          layout="fill"
        />
      </span>
      <div className="flex flex-col items-center flex-1 md:ml-4 md:items-start">
        <h3 className="text-lg text-blue-500 hover:text-pink-500 cursor-pointer">
          {specialty.toUpperCase()}
        </h3>
        <h4 className="text-lg text-gray-800">{production}</h4>
        <h4 className="text-lg text-gray-800">{description}</h4>
        <p className="text-md text-gray-800 mt-2">{name}</p>
        <p className="text-md text-gray-600 mb-2">{university}</p>
        {document && (
          <div className="flex items-center">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <span>{document}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LecturerProfile;
