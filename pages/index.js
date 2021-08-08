import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import SubHero from "../Components/SubHero";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(true);

  const heros = [
    {
      img: "iphone-12hero.jpg",
      title: "iphone 12",
      subTitle: "Blast past fast",
      text: "From $29.12/mo. for 24 mo. or $699 before trade-in¹||Buy directly from Apple with special offers",
      // TODO : Define links like that => { text: string, url: string }
      links: ["Learn More", "Buy"],
      theme: "light",
    },
    {
      img: "iphone-12.jpg",
      title: "iphone 12 Pro",
      subTitle: "It's a leap year.",
      text: "From $41.62/mo. for 24 mo. or $999 before trade-in¹||Buy directly from Apple with special offers",
      // TODO : Define links like that => { text: string, url: string }
      links: ["Learn More", "Buy"],
      theme: "dark",
    },
    {
      img: "ipad.jpg",
      title: "iPad Pro",
      subTitle: "Supercharged by the Apple M1 chip",
      text: "",
      links: ["Learn More", "Buy"],
      theme: "dark",
    },
  ];

  const subHeros = [
    {
      img: "imac.jpg",
      addAppleIcon: false,
      title: "iMac",
      subTitle: "Say Hello",
      links: ["Learn More", "Buy"],
      theme: "light",
    },
    {
      img: "watch.jpg",
      addAppleIcon: true,
      title: "Watch",
      subTitle: "The future of health is on your wrist",
      links: ["Learn More", "Buy"],
      theme: "dark",
    },
    {
      img: "back-to-school.jpg",
      addAppleIcon: false,
      title: "Buy a Mac or iPad for college.get AirPods.³",
      subTitle: "Say Hello",
      links: ["Save with education pricing"],
      theme: "light",
    },
    {
      img: "fitness-plus.jpg",
      addAppleIcon: true,
      title: "Fitness+",
      subTitle: "Fitness for all, powered by Apple Watch",
      links: ["Learn More", "Try it free⁴-ext"],
      theme: "light",
      style: "contain",
    },
    {
      img: "card.jpg",
      addAppleIcon: true,
      title: "tv+",
      subTitle: "Get up to 3% daily Cash back with every purchase",
      links: ["Learn more", "Apply Now"],
      theme: "light",
    },
    {
      img: "tv-plus.jpg",
      addAppleIcon: true,
      title: "tv+",
      subTitle: "",
      links: [],
      theme: "dark",
    },
  ];

  return (
    <div className="m-0 p-0">
      <Head>
        <title>Apple Inc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Info />
      {heros?.map(({ img, title, subTitle, text, links, theme, style }, i) => (
        <Hero
          img={img}
          title={title}
          subTitle={subTitle}
          text={text}
          links={links}
          theme={theme}
          key={"hero-" + i}
          style={style}
        />
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 px-3 gap-y-3 mb-10">
        {subHeros?.map(
          (
            { img, title, subTitle, text, links, theme, style, addAppleIcon },
            i
          ) => (
            <SubHero
              img={img}
              title={title}
              subTitle={subTitle}
              text={text}
              links={links}
              theme={theme}
              key={"subhero-" + i}
              style={style}
              addAppleIcon={addAppleIcon}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
