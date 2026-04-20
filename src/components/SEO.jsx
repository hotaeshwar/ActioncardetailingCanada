import { Helmet } from 'react-helmet-async'

// ─── Business constants ────────────────────────────────────────────────────────
const BASE_URL    = 'https://actioncardetailing.ca'
const BUSINESS    = 'Action Car Detailing'
const PHONE       = '+12047750005'
const EMAIL       = 'info@actioncardetailing.ca'
const LOGO        = `${BASE_URL}/logo.png`
const DEFAULT_IMG = `${BASE_URL}/og-default.jpg`  // 1200×630 image for social sharing

const ADDRESS = {
  streetAddress:   '1380 Sargent Avenue',
  addressLocality: 'Winnipeg',
  addressRegion:   'MB',
  postalCode:      'R3E 0G5',
  addressCountry:  'CA',
}

const GEO = {
  latitude:  49.8951,
  longitude: -97.1384,
}

// ─── Pre-built keyword strings ────────────────────────────────────────────────
// Import and pass the right one per page: <SEO keywords={KEYWORDS.ceramic} />
export const KEYWORDS = {
  ceramic:
    'ceramic coating, ceramic coating winnipeg, xpel ceramic coating, ' +
    'fusion plus ceramic coating, best ceramic coating for cars, ' +
    'best auto ceramic coating, best automotive ceramic coating, ' +
    'ceramic coating car, coating car',

  ppf:
    'xpel paint protection film, xpel ppf, ppf near me, ' +
    'paint protection film near me, car paint protection film, ' +
    'car ppf near me, auto paint protection near me, ' +
    'paint protection film winnipeg, paint protection winnipeg, ' +
    'paint protection film canada',

  detailing:
    'vehicle detailing near me, car detailing services, ' +
    'interior car detailing near me, interior car cleaning, ' +
    'car interior detailing, interior detailing near me, car cleaning, ' +
    'detailing car near me, car wash and detail near me, ' +
    'auto interior detailing, car cleaners near me, auto detailing prices, ' +
    'car wash and detail, car cleaning and detailing near me, ' +
    'car wash near me full service, car detailing winnipeg, ' +
    'interior car detailing winnipeg, interior car cleaning winnipeg, ' +
    'luxury car detailing winnipeg, best car detailing winnipeg, ' +
    'vehicle detailing winnipeg, winnipeg detailing, car cleaning winnipeg, ' +
    'car shampoo winnipeg, car wash winnipeg mb',

  windowTint:
    'window tint, xpel window tint, window films, automotive window tint, ' +
    'auto window tint, car window tint, window tint winnipeg',
}

// ─── Component ────────────────────────────────────────────────────────────────
/**
 * SEO — drop this at the top of every page component.
 *
 * Props
 * ─────
 * title        string   Page <title>. Aim for 50–60 chars.
 * description  string   Meta description. Aim for 150–160 chars.
 * canonical    string   Full URL of this page.
 * noIndex      bool     Pass true on admin/thank-you pages to block Google.
 * type         string   OG type. Default "website". Use "article" for blog posts.
 * image        string   Absolute URL for social share image (1200×630).
 * keywords     string   Use the KEYWORDS export above or pass a custom string.
 * serviceType  string   Short service name e.g. "Ceramic Coating". Adds Service schema.
 * serviceDesc  string   One-sentence description used inside Service schema.
 * breadcrumbs  Array    [{name, url}, …] Always start with { name:'Home', url:BASE_URL }.
 */
export default function SEO({
  title,
  description,
  canonical,
  noIndex     = false,
  type        = 'website',
  image       = DEFAULT_IMG,
  keywords    = '',
  serviceType = '',
  serviceDesc = '',
  breadcrumbs = [],
}) {

  // ── 1. LocalBusiness schema — fires on every page ──────────────────────────
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type':    'AutoRepair',
    name:       BUSINESS,
    url:        BASE_URL,
    logo:       LOGO,
    image:      LOGO,
    telephone:  PHONE,
    email:      EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type':   'GeoCoordinates',
      latitude:  GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: [
      {
        '@type':   'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens:     '08:00',
        closes:    '18:00',
      },
      {
        '@type':   'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens:     '08:00',
        closes:    '15:00',
      },
      {
        '@type':   'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens:     '00:00',
        closes:    '00:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name:    'Winnipeg',
    },
    sameAs: [
      'https://www.facebook.com/actioncardetailingwinnipeg',
      'https://www.instagram.com/actioncardetailingwinnipeg',
    ],
  }

  // ── 2. Service schema — only when serviceType prop is passed ───────────────
  const serviceSchema = serviceType ? {
    '@context':  'https://schema.org',
    '@type':     'Service',
    name:        serviceType,
    description: serviceDesc || description,
    url:         canonical,
    provider: {
      '@type':   'LocalBusiness',
      name:      BUSINESS,
      url:       BASE_URL,
      telephone: PHONE,
      address: {
        '@type': 'PostalAddress',
        ...ADDRESS,
      },
    },
    areaServed: {
      '@type': 'City',
      name:    'Winnipeg',
    },
    serviceType,
  } : null

  // ── 3. BreadcrumbList — only when breadcrumbs prop is passed ───────────────
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type':  'ListItem',
      position: i + 1,
      name:     crumb.name,
      item:     crumb.url,
    })),
  } : null

  return (
    <Helmet>
      {/* ── Core meta ──────────────────────────────────────────────────────── */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description"  content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical"     href={canonical} />
      <meta name="robots"       content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* ── Geo — signals Winnipeg to local search crawlers ────────────────── */}
      <meta name="geo.region"    content="CA-MB" />
      <meta name="geo.placename" content="Winnipeg" />
      <meta name="geo.position"  content={`${GEO.latitude};${GEO.longitude}`} />
      <meta name="ICBM"          content={`${GEO.latitude}, ${GEO.longitude}`} />

      {/* ── Open Graph — Facebook / WhatsApp / LinkedIn previews ───────────── */}
      <meta property="og:type"         content={type} />
      <meta property="og:title"        content={title} />
      <meta property="og:description"  content={description} />
      <meta property="og:url"          content={canonical} />
      <meta property="og:image"        content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name"    content={BUSINESS} />
      <meta property="og:locale"       content="en_CA" />

      {/* ── Twitter / X card ───────────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── Structured data (JSON-LD) ──────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(localBusiness)}
      </script>

      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}