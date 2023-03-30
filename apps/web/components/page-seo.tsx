import { NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';
import { useRouter } from 'next/router';
import { NEXT_SEO_DEFAULT } from '../configuration/default-seo';

export type PageSeoProps = {
  title: string;
  description?: string;
  images?: OpenGraphMedia[];
  noindex?: boolean;
};

export const PageSeo = ({
  title,
  description,
  images,
  noindex = false,
}: PageSeoProps) => {
  const router = useRouter();
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const baseUrl = process.env.NEXT_PUBLIC_WEB_BASE_URL;
  const canonicalUrl = `${baseUrl}${router.asPath}`;

  return (
    <NextSeo
      {...NEXT_SEO_DEFAULT}
      title={title}
      description={description}
      openGraph={{
        ...NEXT_SEO_DEFAULT.openGraph,
        title: title,
        description: description,
        images: images
          ? images.map((image) => ({
              ...image,
              url: `${baseUrl}${image.url}`,
            }))
          : NEXT_SEO_DEFAULT.openGraph?.images,
      }}
      canonical={canonicalUrl}
      noindex={noindex}
    />
  );
};
