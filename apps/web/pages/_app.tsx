import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import createEmotionCache from '../helpers/create-emotion-cache';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '../styles/global-styles.scss';
import themeV1 from 'web-ui/theme/theme-v1';
import { AnimationPresence, DefaultLayout, ErrorFallback } from 'web-ui/common';
import { ClipboardProvider, NavigationProvider } from '../providers';
import { NotificationProvider } from '../providers/notification-provider';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../configuration/default-seo';
import Image from 'next/image';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { ErrorBoundary } from 'react-error-boundary';

const theme = themeV1;

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IMyAppProps) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <NavigationProvider>
            <ClipboardProvider>
              <NotificationProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <DefaultLayout
                    logo={
                      <Image
                        src={'/favicon-32x32.png'}
                        width={32}
                        height={32}
                        alt="logo"
                        priority
                      />
                    }
                  >
                    <AnimationPresence>
                      <Component {...pageProps} key={router.route} />
                    </AnimationPresence>
                  </DefaultLayout>
                </ErrorBoundary>
              </NotificationProvider>
            </ClipboardProvider>
          </NavigationProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
