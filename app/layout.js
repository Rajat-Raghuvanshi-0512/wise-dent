import './globals.css';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/acid-grotesk-regular.otf',
});

export const metadata = {
  title: 'WiseDent',
  description: 'Best dental care all across the world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/home-banner.webp" as="image" />
        <link rel="preload" href="/mobile-banner-bg.webp" as="image" />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
