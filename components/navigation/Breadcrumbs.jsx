import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import Head from 'next/head'

const Breadcrumbs = ({ items = [] }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oachkatzl.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://oachkatzl.com${item.href || ''}`
      }))
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <nav aria-label="Breadcrumb" className="w-full">
        <ol className="flex items-center flex-wrap text-sm text-gray-600">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:text-green-600 transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="sr-only md:not-sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="hover:text-green-600 transition-colors"
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;