import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SITE_METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        siteTitleAlt
        siteHeadline
        siteUrl
        siteDescription
        siteLanguage
        siteImage
        author
      }
    }
  }
`;

const SEO = ({ title, description, pathname, image, children }) => {
  const data = useStaticQuery(SITE_METADATA_QUERY);

  const site = data.site.siteMetadata;

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
    basePath
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${basePath || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  image: false,
  children: null,
};

export default SEO;
