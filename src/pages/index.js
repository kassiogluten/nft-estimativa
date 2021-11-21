import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculo de estimativa de lucro</title>
        <meta property="og:title" content="Calculo de estimativa de lucro" />
        <meta name="description" content="Calculo de estimativa de lucro" />
        <meta property="og:description" content="Calculo de estimativa de lucro" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Hero />
    </>
  );
}
