const MajorItem = ({ star, name, description }) => {
  return (
    <div className="flex p-3 flex-wrap bg-white border border-gray-200 my-4 items-center flex-col md:flex-row">
      <div className="w-32">
        <span className="bg-green-600 p-3 rounded-3xl flex mx-auto w-fit">
          {[...Array(star)].map((item, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </span>
      </div>
      <div className="flex justify-between flex-1 items-center flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start my-2 md:my-0">
          <h4 className="text-lg font-medium hover:text-pink-500 cursor-pointer">
            {name}
          </h4>
          <p>{description}</p>
        </div>
        <span className="rounded-full cursor-pointer p-2 flex-shrink-0 text-gray-600 bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MajorItem;
