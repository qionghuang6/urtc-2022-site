import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Box from '@mui/material/Box';

import Copyright from '../src/Copyright';
import SiteNavigation from '../src/SiteNavigation';
import Socials from '../src/ContactWithSocials'
import Background from '../src/Background';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>MIT URTC</title>
        <meta property="og:title" content="URTC 2023" />
        <meta property="og:description" content="MIT URTC is an internationally-renowned research conference, for undergraduates and by undergraduates. Our annual conferences are themed around incredible breakthroughs in engineering and technological research made by student researchers at the undergraduate level all over the country." />
        <meta property="og:image" content="/urtc-2022.png" />
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQDRW3X"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SiteNavigation />
        <Box mt="100px">
          <Component {...pageProps} />
        </Box>
        <Copyright />
        <Socials />
        <Background />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
