import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractStyles } from 'evergreen-ui';
import flush from 'styled-jsx/server';
import { colors } from '../config/constants';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    // `css` is a string with css from both glamor and ui-box.
    // No need to get the glamor css manually if you are using it elsewhere in your app.
    //
    // `hydrationScript` is a script you should render on the server.
    // It contains a stringified version of the glamor and ui-box caches.
    // Evergreen will look for that script on the client and automatically hydrate
    // both glamor and ui-box.
    const { css, hydrationScript } = extractStyles();
    return {
      ...page,
      css,
      hydrationScript,
    };
  }

  render() {
    const { css, hydrationScript } = this.props;
    const styles = flush();
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          {styles}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5PP7TV7');
          `,
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                var _iub = _iub || [];
                _iub.csConfiguration = {
                  lang: 'en',
                  siteId: 1813316,
                  countryDetection: true,
                  perPurposeConsent: true,
                  cookiePolicyId: 68845143,
                  banner: {
                    position: 'float-top-center',
                    textColor: '${colors.secondary}',
                    backgroundColor: '${colors.white}',
                    acceptButtonDisplay: true,
                    acceptButtonColor: '#df704b',
                    acceptButtonCaptionColor: 'white',
                    customizeButtonDisplay: true,
                    customizeButtonColor: '${colors.secondarySoft}',
                    customizeButtonCaptionColor: 'white',
                    rejectButtonColor: '${colors.secondarySoft}',
                    rejectButtonCaptionColor: 'white',
                  },
                  callback: {
                    onPreferenceExpressedOrNotNeeded: function(preference) {
                      dataLayer.push({
                        iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut(),
                      });
                      if (!preference) {
                        dataLayer.push({
                          event: 'iubenda_preference_not_needed',
                        });
                      } else {
                        if (preference.consent === true) {
                          dataLayer.push({
                            event: 'iubenda_consent_given',
                          });
                        } else if (preference.consent === false) {
                          dataLayer.push({
                            event: 'iubenda_consent_rejected',
                          });
                        } else if (preference.purposes) {
                          for (var purposeId in preference.purposes) {
                            if (preference.purposes[purposeId]) {
                              dataLayer.push({
                                event: 'iubenda_consent_given_purpose_' + purposeId,
                              });
                            }
                          }
                        }
                      }
                    },
                  },
                };
              `,
            }}
          ></script>
          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            charset="UTF-8"
            async
          ></script>
        </Head>

        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5PP7TV7"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    );
  }
}
