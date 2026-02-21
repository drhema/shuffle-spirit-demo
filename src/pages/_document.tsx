import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900|Tajawal:400,500,600,700,800,900&amp;subset=latin" />
                    <link href="https://fonts.cdnfonts.com/css/inter?styles=135009,135005,135007,135002,135000" rel="stylesheet" />
            </Head>
            <body className="antialiased bg-body text-body font-body">
                <Main />
                <NextScript />
                
            </body>
        </Html>
    )
}
