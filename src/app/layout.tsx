import AppProvider from '@/contextApi/AppProvider';
import ReduxProvider from '@/redux/provider';
import { ToastContainer } from 'react-toastify';
import UseMousePointer from '@/utils/MouseCursorUtilis';
import { DirectionProvider } from '@/hooks/useDirection';
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import { Poppins, Caveat, Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400', // Instrument Serif only ships in 400 (plus 400 italic)
  variable: '--font-instrument-serif',
});

// Load Inter from Google Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "The Attic Studio",
  description: "The Attic Studio Dublin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${poppins.variable} ${caveat.variable}`}>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* Use the UseMousePointer component */}
          {/* <UseMousePointer /> */}
          <ReduxProvider>
            <AppProvider>
              <DirectionProvider>
              {children}
              </DirectionProvider>
            </AppProvider>
            <ToastContainer
              position="top-left"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReduxProvider>
      </body>
    </html>
  );
}