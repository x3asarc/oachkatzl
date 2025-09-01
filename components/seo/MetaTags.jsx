import Head from 'next/head';

const MetaTags = ({
  title,
  description,
  image = '/images/gallery/image2.webp',
  url,
  type = 'website',
  locale = 'en_US',
  alternateLocale = 'de_AT',
  structuredData,
  noindex = false,
  canonical,
}) => {
  const defaultTitle = 'Vacation Rentals Tirol Austria | Oachkatzl Apartments';
  const defaultDescription = 'Luxury mountain apartment in Volders, Tirol. Hot tub, hiking trails, booking available. Your Alpine escape awaits!';
  const siteUrl = 'https://oachkatzl.com';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const finalImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : finalUrl;

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <link rel="canonical" href={finalCanonical} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content="Oachkatzl Vacation Rentals" />
      <meta property="og:locale" content={locale} />
      {alternateLocale && <meta property="og:locale:alternate" content={alternateLocale} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default MetaTags;