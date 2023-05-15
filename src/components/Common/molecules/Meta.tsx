import Head from "next/head";

interface MetaDesc {
  title?: string | string[];
  description?: string;
}

const Meta: React.FC<MetaDesc> = ({ title, description }) => {
  return (
    <Head>
      {/* for pwa */}
      <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,  viewport-fit=cover" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefefe" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#fefefe" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@300;400;500&display=swap&display=optional"
        rel="stylesheet"
      />
      <title>{`${title} - Praktis UI Library`}</title>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/static/img/praktis-logo.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Praktis UI Library",
  description: "Praktis UI Library",
};

export default Meta;
