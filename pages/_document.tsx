import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link rel='icon' href='/youtube-icon.svg' type='image/svg+xml'/>
                    <meta name='theme-color' content='#FF7652' />
                    <meta name='msapplication-navbutton-color' content='#FF7652' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='#FF7652' />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;