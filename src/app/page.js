import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";

import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <header className=" lg:container ">
        <div className=" flex items-center justify-between lg:p-3 p-2 lg:flex-row flex-col">
          <div>
            <Image
              alt="ROOT"
              src={"/nexcent-logo.png"}
              width={1000}
              height={1000}
              className="  md:w-[160px] w-[100px]  "
            />
          </div>
          <nav>
            <ul className=" flex items-center md:gap-x-10 gap-4  md:text-sm text-xs mt-2">
              <li className=" cursor-pointer hover:underline">Home</li>
              <li className=" cursor-pointer hover:underline">Features</li>
              <li className=" cursor-pointer hover:underline">Community</li>
              <li className=" cursor-pointer hover:underline">Blog</li>

              <li className=" cursor-pointer hover:underline">Pricing</li>
              <button className=" bg-green-600 text-white rounded-lg p-3 lg:flex hidden hover:bg-green-900 ">
                Register Now
                <FaArrowRight className=" w-5 h-5 ml-5" />
              </button>
            </ul>
          </nav>
        </div>
      </header>

      <div className=" bg-gray-100 lg:py-10 ">
        <div className="container flex lg:flex-row flex-col gap-5 justify-between">
          <div className=" lg:mt-28 mt-10 gap-5">
            <h1 className=" text-5xl font-bold lg:p-2 mt-2">Lessons and insights</h1>
            <h2 className="text-5xl font-bold text-green-500 lg:p-2 mt-2">
              Form 8 Years
            </h2>
            <p className="  lg:p-4 mt-2">
              Where to grow your business and photgraphy : site or social media
            </p>
            <button className=" bg-green-600 text-white rounded-md hover:bg-green-900 p-3 mt-2">
              Register
            </button>
          </div>
          <div className=" lg:p-10 ">
            <Image
              width={400}
              height={350}
              src={
                "https://faheemonhub.github.io/Nexcent-Figma/assets/Illustration.svg"
              }
            ></Image>
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" lg:p-8">
          <h2 className=" text-center text-3xl font-bold ">Our Clients</h2>
          <p className=" text-center   p-2">
            We have been workink with some fortune 5000+ client
          </p>
          <div className="flex items-center justify-between lg:p-8">
            <div className=" w-20">
              <Image
                src="/logo 123.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className=" w-20">
              <Image
                src="/Logo (1).png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className=" w-20">
              <Image
                src="/Logo (2).png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className=" w-20">
              <Image
                src="/Logo (3).png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className=" w-20">
              <Image
                src="/Logo (4).png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className=" w-20 ">
              <Image
                src="/Logo (5).png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-center">
          <h2 className=" text-center  text-3xl font-bold ">
            Manage your entire community in a singel system
          </h2>
        </div>
        <p className="text-center p-3">Who is nextcent suitable for</p>
      </div>

      <div className="container p-8  grid lg:grid-cols-3 grid-cols-1 gap-10 text-center">
        <div className="  h-80 bg-white drop-shadow-md lg:p-8 p-3 rounded-lg  hover:bg-green-500">
          <div className=" w-20 h-20 mx-auto">
            <Image
              src="/Icon (1).png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <h2 className=" text-3xl font-semibold">Menbership Organization</h2>
          <p className=" mt-3 text-sm">
            Copyright ownership gives the owner the exclusive right to use the
            work, with some exceptions.
          </p>
        </div>

        <div className=" w-full h-80 bg-white drop-shadow-md lg:p-8 rounded-lg  hover:bg-green-500">
          <div className="w-20 h-20 mx-auto">
            <Image
              src="/Icon (2).png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <h2 className=" text-3xl font-semibold">National Associasion</h2>
          <p className=" mt-3 text-sm">
            Copyright ownership gives the owner the exclusive right to use the
            work, with some exceptions.
          </p>
        </div>

        <div className=" w-full h-80 bg-white drop-shadow-md lg:p-8 rounded-lg  hover:bg-green-500">
          <div className=" w-20 h-20 mx-auto ">
            <Image
              src="/Icon (3).png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <h2 className=" text-3xl font-semibold">Clubs and groups </h2>
          <p className=" mt-3 text-sm">
            Copyright ownership gives the owner the exclusive right to use the
            work, with some exceptions.
          </p>
        </div>
      </div>

      <div className="container grid lg:grid-cols-2 grid-cols-1  ">
        <div>
          <img
            className=" w-full"
            width={1000}
            height={1000}
            src="/Frame 35.png"
          ></img>
        </div>
        <div className=" flex flex-col justify-center lg:pr-20">
          <h2 className=" font-bold lg:text-4xl  text-3xl ">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className=" mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <button className=" bg-green-600 text-white rounded-lg p-3 hover:bg-green-900 w-40 mt-6">
            Register Now
          </button>
        </div>
      </div>

      <div className="container grid lg:grid-cols-2 grid-cols-1 p-10">
        <div>
          <img
            className=" w-full"
            width={1000}
            height={1000}
            src="/image 1.png"
          ></img>
        </div>
        <div className=" flex flex-col justify-center lg:pr-20">
          <h2 className=" font-bold lg:text-4xl text-3xl">
            How to design your site footer like we did
          </h2>
          <p className=" mt-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button className=" bg-green-600 text-white rounded-lg p-3 hover:bg-green-900 w-40 mt-6">
            Register Now
          </button>
        </div>
      </div>

      <div className=" bg-gray-100 lg:py-20">
        <div className="container grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h2 className=" font-bold text-3xl ">Helping a local </h2>
            <h2 className=" font-bold text-3xl text-green-500 mb-1">
              business reinvent itself
            </h2>
            <p className=" text-sm ">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className=" flex items-center w-full gap-2">
              <Image
                src="/Icon.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div>
                <h2 className=" font-bold text-lg">2,245,341</h2>
                <p className=" hover:underline text-sm">Members</p>
              </div>
            </div>
            <div className=" flex items-center w-full  gap-2">
              <Image
                src="/Icon (4).png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div>
                <h2 className=" font-bold text-lg">46,328</h2>
                <p className=" hover:underline text-sm">clubs</p>
              </div>
            </div>

            <div className=" flex items-center w-full  gap-2">
              <Image
                src="/Icon (5).png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div>
                <h2 className=" font-bold text-lg">828,867</h2>
                <p className=" hover:underline text-sm">Event Bookings</p>
              </div>
            </div>

            <div className="flex items-center w-full  gap-2">
              <Image
                src="/Icon (6).png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div>
                <h2 className=" font-bold text-lg">1,926,436</h2>
                <p className=" hover:underline text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 py-5 mt-6 ">
        <div className="container grid lg:grid-cols-3 grid-cols-1 lg:gap-7 gap-y-3">
          <div className=" w-full">
            <Image
              src="/image 9.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              className=" w-full"
            />
          </div>
          <div className=" w-full  flex flex-col justify-center lg:pr-20 col-span-2 gap-2">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h2 className="text-green-500 text-3xl font-bold mt-5">
              Tim Smith
            </h2>
            <p>British Dragon Boat Racing Association</p>

            <div className="flex lg:flex-row flex-col items-center justify-between ">
              <div className=" flex flex-row flex-wrap item center justify-between lg:gap-10 gap-2 mt-3">
                <div>
                  <Image
                    src="/Logo (6).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/Logo (1).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/Logo (2).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/Logo (3).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/Logo (4).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/Logo (5).png"
                    width={1000}
                    className=" w-10 h-10"
                    height={1000}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className="text-green-500 flex  items-center  font-bold lg:gap-3 ">
                {" "}
                <Link href="/">Meet all customers</Link>
                <FaArrowRight className=" h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className=" text-center lg:p-10 ">
          <h2 className=" font-bold text-3xl">Caring is the new marketing</h2>
          <p className=" mt-5 text-md">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.​
          </p>
        </div>
        <div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
            <div>
              <Image
                src="/1.png"
                width={1000}
                className=" w-full"
                height={1000}
                alt="Picture of the author"
              />
            </div>

            <div>
              <Image
                src="/2.png"
                width={1000}
                className=" w-full"
                height={1000}
                alt="Picture of the author"
              />
            </div>

            <div>
              <Image
                src="/3.png"
                width={1000}
                height={1000}
                className=" w-full"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 ">
        <div className=" text-center flex flex-col items-center justify-between">
          <h2 className=" font-bold text-2xl p-5">
            Pellentesque suscipit <br></br> fringilla libero eu.
          </h2>
          <button className=" bg-green-600 text-white rounded-md hover:bg-green-900 p-3 mt-5 w-40  flex ">
            Get a demo
            <FaArrowRight className=" h-6 w-6 ml-5 " />
          </button>
        </div>
        <div className=" bg-black w-full mt-5 py-10">
          <div className=" container  flex lg:flex-row flex-col justify-between text-white ">
            <div>
              <Image
                alt="ROOT"
                src={"/Logo.png"}
                width={1000}
                height={1000}
                className="  w-[160px]  "
              />

              <p className=" mt-8">Copyright © 2020 Landify UI Kit.</p>
              <p className=" mt-2">All rights reserved</p>

              <div className="flex mt-10 gap-5 ">
                <div>
                  <FaInstagram className=" h-8 w-8 " />
                </div>

                <div>
                  <LuFacebook className=" h-8 w-8 " />
                </div>

                <div>
                  <FiYoutube className=" h-8 w-8" />
                </div>

                <div>
                  <LuTwitter className=" h-8 w-8" />
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-10 ">
              <div>
                <h2 className=" font-bold text-lg  ">Company</h2>
                <div className=" text-sm mt-5 hover:underline">
                  <h2>About us</h2>
                  <h2 className=" mt-3">Blog</h2>
                  <h2 className=" mt-3">Contact us</h2>
                  <h2 className=" mt-3">Pricing</h2>
                  <h2 className=" mt-3">Testimonials</h2>
                </div>
              </div>

              <div>
                <h2 className=" font-bold text-lg  ">Support</h2>
                <div className=" text-sm mt-5 hover:underline">
                  <h2>Help center</h2>
                  <h2 className=" mt-3">Terms of service</h2>
                  <h2 className=" mt-3">Legal</h2>
                  <h2 className=" mt-3">Privacy policy</h2>
                  <h2 className=" mt-3">Status</h2>
                </div>
              </div>

              <div>
                <h2 className=" font-bold text-lg">Stay up to date</h2>
                <div className=" mt-5">
                  <label for="email">Enter your email</label><br></br>
                  <input className=" text-black px-4 py-1 rounded-md"type="email"id="email"placeholder="Your email"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
