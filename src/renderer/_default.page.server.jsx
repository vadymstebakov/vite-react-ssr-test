import React from 'react';
import { renderToStream } from 'react-streaming/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

export const passToClient = ['pageProps'];

export const render = async pageContext => {
    const { Page, pageProps, urlOriginal } = pageContext;

    const stream = await renderToStream(
        <StaticRouter location={urlOriginal}>
            <Page {...pageProps} />
        </StaticRouter>,
        { disable: true }
    );

    return escapeInject`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React</title>
            </head>
            <body>
                <div id="root">${stream}</div>
            </body>
        </html>`;
};
