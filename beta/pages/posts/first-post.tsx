import Link from "next/link";
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from "../../components/layout";

const ZundaComponent = () => {
  return <Image
    src="/images/profile.jpeg"
    height={200}
    width={144}
    alt="Zunda"
  />
}

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://example.com" 
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded.`)
        }}
      />
      <h1>First Post</h1>
      <ZundaComponent></ZundaComponent>
      <h2>
        <Link href="/">
          <a>back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;