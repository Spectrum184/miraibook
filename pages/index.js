import BookItem from 'components/BookItem';
import Navbar from 'components/Navbar';
import SectionTitle from 'components/SectionTitle';
import Head from 'next/head';
import Image from 'next/image';
import LecturerProfile from 'components/LecturerProfile';
import MajorItem from 'components/MajorItem';

import { lecturerProfiles, listBook, listMajors, menuList } from 'mocks/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mirai Book</title>
        <meta
          name="description"
          content="Good friends, good books, and a sleepy conscience: this is the ideal life. --Mark Twain"
        />
        <meta property="og:title" content="Mirai book"></meta>
        <meta content="INDEX,FOLLOW" name="robots"></meta>
        <meta name="author" content="Thanh đẹp trai"></meta>
        <meta name="copyright" content="Thanh đẹp trai"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="jp_JP"></meta>
        <meta
          property="og:description"
          content="Bài test kiểm tra trình độ"
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sonobe/image/upload/v1639824550/iroppoi-social/busknbozkdp1mwcb10qp.jpg"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main className="bg-pink-primary min-h-screen">
        <Navbar />
        <div className="w-full bg-green-primary">
          <div className="max-w-screen-xl px-2 flex items-center mx-auto text-xl font-bold text-white h-36 md:text-3xl md:px-4 lg:px-6">
            <span>探究!につながるテーマ</span>
          </div>
        </div>
        <div id="content" className="w-full">
          <div className="max-w-screen-lg bg-white mx-auto shadow-sm my-7 rounded-sm p-2 md:p-4 lg:p-6">
            <section>
              <div className="flex items-center bg-gray-100 p-3 rounded-sm">
                <div className="relative w-20 h-20 z-0 cursor-pointer">
                  <Image
                    layout="fill"
                    alt="windmill"
                    src="/images/windmill.jpg"
                    className="object-cover -z-10"
                    priority
                  />
                </div>
                <p className="ml-3 font-bold text-gray-700 cursor-pointer hover:text-pink-500">
                  「エネルギー問題」に迫る
                </p>
              </div>
              <div className="text-gray-700 text-sm w-full mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                earum asperiores tenetur commodi qui sed odio, ratione ad minus
                numquam quidem vero sunt fugiat nulla ipsa natus cumque! Eos,
                voluptas!
              </div>
            </section>
            <section id="goals" className="mt-6 md:mt-10">
              <SectionTitle title="関連するSDGs" />
              <div className="mt-4">
                <span className="mr-3">
                  <Image
                    alt="sgd1"
                    src="/images/sgd1.jpg"
                    objectFit="cover"
                    width={80}
                    height={80}
                    priority
                  />
                </span>
                <span>
                  <Image
                    alt="sgd1"
                    src="/images/sgd2.jpg"
                    objectFit="cover"
                    width={80}
                    height={80}
                    priority
                  />
                </span>
              </div>
            </section>
            <section id="book" className="mt-6 md:mt-10">
              <SectionTitle title="本で深めよう" />
              <div className="flex flex-wrap w-full mt-3">
                {listBook.map((item, index) => (
                  <BookItem key={index} {...item} />
                ))}
              </div>
            </section>
            <section id="lecturer" className="mt-6 md:mt-10">
              <SectionTitle
                title="先生たちはこんな研究"
                subTitle="テーマで迫っている"
              />
              <div className="my-4">
                {lecturerProfiles.map((item, index) => (
                  <LecturerProfile key={index} {...item} />
                ))}
              </div>
            </section>
            <section id="majors" className="mt-6 md:mt-10">
              <div className="pattern-rhombus w-full p-3 flex justify-center flex-col text-white text-xl font-semibold rounded-sm">
                <span>大学の学問分野を選ぶなら</span>
                <span>〜学べる大学もわかる</span>
              </div>
              <div className="w-full p-4 my-4 border-2 border-gray-200 rounded-sm">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia maiores libero voluptatum eius veritatis quos veniam
                  sequi repellendus cumque rem natus aperiam quaerat eaque, vero
                  doloremque neque, facere impedit ipsam! Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Mollitia maiores libero
                  voluptatum eius veritatis quos veniam sequi repellendus cumque
                  rem natus aperiam quaerat eaque, vero doloremque neque, facere
                  impedit ipsam!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia maiores libero voluptatum eius veritatis quos veniam
                  sequi repellendus cumque rem natus aperiam quaerat eaque, vero
                  doloremque neque, facere impedit ipsam! Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Mollitia maiores libero
                  voluptatum eius veritatis quos veniam sequi repellendus cumque
                  rem natus aperiam quaerat eaque, vero doloremque neque, facere
                  impedit ipsam!
                </p>
                <div className="mt-4">
                  {listMajors.map((item, index) => (
                    <MajorItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>
            <section id="job" className="mt-6 md:mt-10 pb-10">
              <SectionTitle title="仕事を知ろう〜仕事から学問へ" />
              <div className="w-full grid grid-cols-1 gap-4 mt-3 md:grid-cols-2">
                <div className="flex items-center justify-between cursor-pointer p-3 border-2 border-blue-400 text-blue-400">
                  <span>自動車(輪車等も含む)</span>
                  <span>
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
                <div className="flex items-center justify-between cursor-pointer p-3 border-2 border-blue-400 text-blue-400">
                  <span>自動車関連</span>
                  <span>
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
            </section>
          </div>
          <footer className="w-full">
            <div className="w-full h-6 bg-gray-300"></div>
            <div className="w-full bg-gray-200">
              <div className="max-w-screen-xl mx-auto flex flex-wrap py-8 md:py-10 px-2 md:px-4 lg:px-6 text-gray-600 font-normal text-sm">
                <div className="w-full md:w-1/2 flex-col flex items-start">
                  <div className="w-32 h-20 relative cursor-pointer">
                    <Image
                      src="/images/logo.png"
                      alt="logo.jpg"
                      layout="fill"
                      priority
                    />
                  </div>
                  <div className="ml-4 flex items-center">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="h-6 w-6 mr-2 cursor-pointer"
                      viewBox="0 0 169.063 169.063"
                    >
                      <g>
                        <path
                          d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                        />
                        <path
                          d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                        />
                        <path
                          d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
                        />
                      </g>
                    </svg>
                    <span className="hover:text-pink-500 cursor-pointer">
                      miraibook
                    </span>
                  </div>
                  <p className="ml-4 mt-2 md:w-2/3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo deleniti debitis illum, quasi est distinctio quia enim.
                  </p>
                </div>
                <div className="flex-col flex items-start w-full mt-4 pl-4 md:mt-0 md:w-1/4 md:pl-0">
                  <h4 className="font-semibold text-base text-gray-700 mb-2">
                    コンテンツ
                  </h4>
                  <ul>
                    <li className="my-2">
                      <span className="mr-2">&#10093;</span>
                      <span className="hover:underline cursor-pointer">
                        Home
                      </span>
                    </li>
                    {menuList.map((item, index) => (
                      <li key={index} className="my-2">
                        <span className="mr-2">&#10093;</span>
                        <span className="hover:underline cursor-pointer">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-col flex items-start w-full mt-4 pl-4 md:mt-0 md:pl-0 md:w-1/4">
                  <h4 className="font-semibold text-base text-gray-700 mb-2">
                    グールプリンク
                  </h4>
                  <ul>
                    {[...Array(7)].map((item, index) => (
                      <li className="my-2" key={index}>
                        <span className="mr-2">&#10093;</span>
                        <span className="hover:underline cursor-pointer">
                          Lorem
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full bg-pink-second">
              <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between py-8 md:flex-row md:py-10 px-2 md:px-4 lg:px-6 text-gray-200 font-normal text-sm">
                <span>Copyrights © 2022</span>
                <span>プライバシーポリシー / Contact</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
