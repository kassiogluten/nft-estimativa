import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>TITULO</title>
        <meta property="og:title" content="TITULO | SUBTITULO" />
        <meta name="description" content="DESCRICAO" />
        <meta property="og:description" content="DESCRICAO" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero />
      <Hero />
      <Hero />
    </>
  );
}
