import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-start pt-40 gap-10 items-center flex-col relative h-screen text-white bg-black/30">
      <Image
        src={'/error-bg.webp'}
        alt="err"
        width={100}
        height={100}
        className="w-full h-full top-0 left-0 -z-10 absolute"
        unoptimized
      />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        Looks Like You Are Lost.
      </h2>
      <p className="text-xl md:text-2xl font-light">
        We’re sorry, the page you were looking for could not be found.
      </p>
      <Link
        className="bg-green-base px-20 py-2 rounded-3xl duration-300 hover:scale-95"
        href="/"
      >
        Go to Home Page
      </Link>
    </div>
  );
}
