import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html className=''>
        <Head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
        </Head>
        <body className=''>
        {/* <script src="https://code.jquery.com/jquery-3.6.1.min.js" async/> */}
       


       
          <Main />
       
          <NextScript />
       
        </body>
      </Html>
    );
  }
}
export default MyDocument;