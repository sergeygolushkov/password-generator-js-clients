import type { NextSeoProps } from 'next-seo';

const defaultTitle = 'Password Generator';
const defaultDescription =
  'Generate strong and secure password with Password Generator';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const baseUrl = process.env.NEXT_PUBLIC_WEB_BASE_URL;

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: defaultTitle,
  defaultTitle: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/images/default.png`,
        width: 512,
        height: 512,
        alt: 'Password Generator logo',
        type: 'image/png',
      },
    ],
    siteName: 'Password Generator',
  },
  twitter: {
    site: 'password-generator',
    handle: 'Serhii Holushkov',
    cardType: 'summary_large_image',
  },
};
