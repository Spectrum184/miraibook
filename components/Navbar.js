import HeaderTop from './HeaderTop';
import clsx from 'clsx';

import { menuList } from 'mocks/data';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const headerRef = useRef();
  const headerMenuRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [onScroll, setOnScroll] = useState(false);
  const [onSearch, setOnSearch] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > headerRef.current?.clientHeight) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener('scroll', listenScrollEvent);
    }

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <HeaderTop headerRef={headerRef} />
      {/* never mind, add one div for fixed height of navbar menu, i can't set sticky */}
      {onScroll && (
        <div style={{ height: headerMenuRef.current?.clientHeight }}></div>
      )}
      <div
        ref={headerMenuRef}
        className={clsx('w-full bg-white z-50', {
          'shadow-md fixed top-0 transition ease-in-out duration-300': onScroll,
        })}
      >
        <div className="flex content-center relative justify-between max-w-screen-xl mx-auto lg:px-6">
          <span
            className="px-4 py-4 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </span>
          <ul
            className={clsx(
              'absolute top-14 z-50 w-full px-4 flex-col border-b-2 border-gray-300 lg:border-b-0 lg:flex lg:flex-row lg:items-center lg:relative lg:top-0 lg:px-0 bg-white',
              {
                flex: isOpen,
                hidden: !isOpen,
              }
            )}
          >
            <li className="px-4 py-4 w-full cursor-pointer border-t-2 border-gray-200 hover:text-pink-500 hover:border-pink-500 lg:border-transparent lg:w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </li>
            {menuList.map((item, index) => (
              <li
                className="px-4 py-4 cursor-pointer w-full lg:mx-2 border-t-2 border-gray-200 hover:text-pink-500 hover:border-pink-500 lg:border-transparent lg:w-fit"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center pr-4 relative">
            {onSearch && (
              <input
                type="search"
                className="px-4 py-1 w-32 text-gray-800 rounded-full border border-gray-400 outline-none mr-3"
                placeholder="search"
              />
            )}
            <svg
              onClick={() => setOnSearch(!onSearch)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 hover:text-pink-500 cursor-pointer text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-pink-500 cursor-pointer text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>
        <div
          className={clsx(
            'bottom-8 fixed cursor-pointer shadow-md right-8 top-auto z-50 left-auto w-10 h-10 bg-gray-400 flex items-center justify-center',
            {
              hidden: !onScroll,
              block: onScroll,
            }
          )}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
