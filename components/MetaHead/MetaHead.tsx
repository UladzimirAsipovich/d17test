import Head from 'next/head';
import type { I_MetaHead } from './MetaHead.interface';

const MetaHead: React.FC<I_MetaHead> = (props): JSX.Element => {
  const TITLE = props.title || `${process.env.NEXT_PUBLIC_SUITE_LOGO_TEXT_EN_NAKED} | Главная`;
  const DESCRIPTION = props.description || `Front-end разработчик ⭐️ Владимир Осипович 🔥 «☎️ ${process.env.NEXT_PUBLIC_PHONE_LITERAL_FORMAT} — GSM, WhatsApp, Viber или Telegram»`;
  const CURRENT_URL = `${process.env.NEXT_PUBLIC_SUITE_STATIC_FULL_URL}${props.currentUrl || ''}`;
  const IMAGE_URL = `${process.env.NEXT_PUBLIC_SUITE_STATIC_FULL_URL}${props.imageUrl || './meta-logo.webp'}`;
  const IMAGE_ALT = props.imageAlt || DESCRIPTION;

  return (
    <Head>

      <meta charSet="utf-8" key="charSet" />
      <meta httpEquiv="X-UA-Compatible" key="httpEquiv" content="ie=edge" />

      {
        props.noFollow ? (<meta name="robots" key="robots" content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />) : (<meta name="robots" key="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />)
      }

      <link rel="icon" key="icon" href="./favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" key="apple-touch-icon" href="./favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" key="32x32" href="./favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" key="16x16" href="./favicon/favicon-16x16.png" />
      <link rel="manifest" key="manifest" href="./favicon/site.webmanifest" />

      <meta name="viewport" key="viewport" content="width=device-width, user-scalable=2, initial-scale=1, minimum-scale=1" />
      <meta name="theme-color" key="theme-color" content="#F5F4F6" />
      <meta name="MobileOptimized" key="MobileOptimized" content="320" />
      <meta name="copyright" key="copyright" content={process.env.NEXT_PUBLIC_SUITE_LOGO_TEXT_EN_NAKED} />


      <title>{TITLE}</title>

      <meta name="description" key="description" lang="ru" itemProp="description" content={DESCRIPTION} />
      <meta name="keywords" key="keywords" lang="ru" content={props.keywords || DESCRIPTION} />

      <link rel="alternate" key="alternate" hrefLang="ru" href={CURRENT_URL} title="Russian" />
      <link rel="canonical" key="canonical" href={CURRENT_URL} />

      {/* ----------  Meta openGraph  ------------*/}
      <meta property="og:title" key="og:title" lang="ru" content={TITLE} />
      <meta property="og:description" key="og:description" lang="ru" content={DESCRIPTION} />
      <meta property="og:url" key="og:url" content={CURRENT_URL} />
      <meta property="og:image" key="og:image" content={IMAGE_URL} />
      <meta property="og:image:secure_url" key="og:image:secure_url" content={IMAGE_URL} />
      <meta property="og:image:type" key="og:image:type" content={props.imageType || "image/webp"} />
      <meta property="og:image:width" key="og:image:width" content={props.imageWidth || "1000"} />
      <meta property="og:image:height" key="og:image:height" content={props.imageHeight || "625"} />
      <meta property="og:image:alt" key="og:image:alt" content={IMAGE_ALT} />

      <meta property="business:contact_data:street_address" key="business:contact_data:street_address" content="пр. Дзержинского, 82" />
      <meta property="business:contact_data:locality" key="business:contact_data:locality" content="Минск" />
      <meta property="business:contact_data:region" key="business:contact_data:region" content="Минская область" />
      <meta property="business:contact_data:postal_code" key="business:contact_data:postal_code" content="220089" />
      <meta property="business:contact_data:country_name" key="business:contact_data:country_name" content="Belarus" />

      {/* ----------  Meta Twitter  ------------*/}
      <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" key="twitter:description" lang="ru" content={DESCRIPTION} />
      <meta name="twitter:title" key="twitter:title" lang="ru" content={TITLE} />
      <meta name="twitter:image" key="twitter:image" content={IMAGE_URL} />

      {props.children}
    </Head>
  );
};

export default MetaHead;