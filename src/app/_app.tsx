// src/app/_app.tsx OR src/pages/_app.tsx
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ Move the import here
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
