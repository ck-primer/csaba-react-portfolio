import Head from 'next/head';

function PWAHeader() {
  return (
    <div>
      <Head>
        <title>Giphygram</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=0, user-scalable=0"
        />

        <meta name="apple-mobile-web-app-title" content="Giphygram" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-startup-image" href="images/launch.png" />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="images/icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="images/icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="images/icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="images/icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="images/icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="images/icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="images/icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="images/icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="images/icons/favicon-128.png"
          sizes="128x128"
        />

        <meta name="msapplication-TileColor" content="#2D91F8" />
        <meta
          name="msapplication-TileImage"
          content="images/icons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="images/icons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="images/icons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="images/icons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="images/icons/mstile-310x310.png"
        />
      </Head>
    </div>
  );
}

export default PWAHeader;
