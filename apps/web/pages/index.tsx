import { Divider } from '@mui/material';
import { NextPage } from 'next';
import {
  PageContent,
  HomeStartSection,
  PageTransitionAnimation,
  HomeMobileSection,
  HomeDesktopSection,
  HomeApiSection,
  HomeFooterSection,
  ExternalLink,
  ILinkViewModel,
} from 'web-ui';
import Image from 'next/image';
import MacAppStoreIcon from './../public/images/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import WindowsStoreIcon from './../public/images/English_get it from MS_864X312.svg';
import IosAppStoreIcon from './../public/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import GooglePlayIcon from './../public/images/google-play-badge.png';
import {
  GOOGLE_PLAY_URL,
  IOS_APP_STORE_URL,
  MAC_APP_STORE_URL,
  WINDOWS_STORE_URL,
} from 'shared';
import { PageSeo } from '../components';

const pageTitle = 'Password Generator | Create secure passwords';
const pageDescription = `Cross platform, open sourced password generator.`;

const storeImageWidth = 154;
const storeImageHeight = 38;

const desktopStoreLinks: ILinkViewModel[] = [
  {
    url: WINDOWS_STORE_URL,
    imageSource: (
      <Image
        width={storeImageWidth}
        height={storeImageHeight}
        src={WindowsStoreIcon}
        alt="Windows store link"
      />
    ),
  },
  {
    url: MAC_APP_STORE_URL,
    imageSource: (
      <Image
        width={storeImageWidth}
        height={storeImageHeight}
        src={MacAppStoreIcon}
        alt="Mac app store link"
      />
    ),
  },
];

const mobileStoreLinks: ILinkViewModel[] = [
  {
    url: GOOGLE_PLAY_URL,
    imageSource: (
      <Image
        width={storeImageWidth}
        height={60}
        src={GooglePlayIcon}
        alt="Google play link"
      />
    ),
  },
  {
    url: IOS_APP_STORE_URL,
    imageSource: (
      <Image
        width={storeImageWidth}
        height={storeImageHeight}
        src={IosAppStoreIcon}
        alt="IOS app store link"
      />
    ),
  },
];

const Web: NextPage = () => {
  return (
    <>
      <PageSeo title={pageTitle} description={pageDescription} />
      <PageTransitionAnimation>
        <PageContent>
          <HomeStartSection />
          <HomeApiSection />
          {/* <Divider />
          <HomeDesktopSection
            storeIcons={desktopStoreLinks.map((store, index) => (
              <ExternalLink
                content={store.imageSource}
                url={store.url}
                key={index}
              />
            ))}
          />
          <Divider />
          <HomeMobileSection
            storeIcons={mobileStoreLinks.map((store, index) => (
              <ExternalLink
                content={store.imageSource}
                url={store.url}
                key={index}
              />
            ))}
          /> */}
          <HomeFooterSection />
        </PageContent>
      </PageTransitionAnimation>
    </>
  );
};

export default Web;
