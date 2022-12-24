import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NextSeo } from 'next-seo';
import Script from 'next/script'
import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
var pageurl = "https://fest-countdown.lotusbit.com/new-year";
const todaysDate = new Date()
const currentYear = todaysDate.getFullYear();
const cdate0 = " 00:00:00";
const cdate01 = "25/12/"+currentYear;
const cdate = "12/25/"+currentYear+ cdate0;

const Home = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(cdate);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NextSeo
        title="Christmas Countdown"
        description="New year is starting day first."
      />
        <div className='flex flex-col fixed top-2/4 -translate-y-2/4'>
        <FacebookShareButton
        url={pageurl} >
        <FacebookIcon size={50} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={pageurl} >
        <PinterestIcon size={50} round />
      </PinterestShareButton>
      <RedditShareButton
        url={pageurl} >
        <RedditIcon size={50} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={pageurl} >
        <WhatsappIcon size={50} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={pageurl} >
        <LinkedinIcon size={50} round />
      </LinkedinShareButton>
    </div>

      <div className="bg-gradient-to-tl from-indigo-300 via-purple-300 to-pink-500 font-serif w-full" id="sno">
        <div className="h-screen">
        <Head>

        </Head>




        {partyTime ? (
          <>
            <h1>Happy new year!</h1>
            {/* <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video> */}
          </>
        ) : (
          <>
            {/* <div className="flex border border-red-400 justify-center text-center w-max px-p">
              <div className=" border border-red-400 m-2 p-2 ">
                <span className="time">{days} </span>
                <span className="label">Days</span>
              </div>
           
              <div className=" border border-red-400 m-2 p-2 ">
                <span className="time">{hours} </span>
                <span className="label">Hours</span>
              </div>
             
              <div className="border border-red-400 m-2 p-2 ">
                <span className="time">{minutes} </span>
                <span className="label">Minutes</span>
              </div>
              
              <div className=" border border-red-400 m-2 p-2 ">
                <span className="time">{seconds} </span>
                <span className="label">Seconds</span>
              </div>
              </div> */}
            <div className="text-center ">
              <h1 className="font-bold text-3xl pt-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Christmas Countdown</h1>
              <br />
              <h3 className="font-bold text-3xl p-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-lime-900">{cdate01}</h3>
              <br />
              <h3 className="font-bold text-3xl p-2 inline-block text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-amber-500">There Are Only</h3>
            </div>
            <div id="countdown" className="h-auto m-auto flex flex-col sm:flex-row items-center justify-center pt-[5vh] animate-pulse w-min font-serif ">
            
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500 break-words"><span id="days" className="block">{days}</span>days</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500 break-words"><span id="hours" className="block">{hours}</span>Hours</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500 break-words"><span id="minutes" className="block">{minutes}</span>Minutes</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500 break-words"><span id="seconds" className="block">{seconds}</span>Seconds</div>
            
            </div>
            <div className="text-center mt-8">
<h3 className="font-bold text-3xl p-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-lime-900 text-center">Until Christmas</h3>
</div>
            <div className=" w-min mx-auto bg-slate-400 text-center mt-[10vh]">
              <p className="p-4">Advertise</p>
            </div>
          </>
        )}
        </div>
        <br/>
        <div className="mt-4">
        <p className="text-center font-serif">All People celebrate 1 January like the new year. Here you can see the countdown of the new year. You can also share this page link via the share button.</p>
        <h2 className="text-center text-lg font-semibold font-serif">Why Visit Our Website?</h2>
        <p className="text-center font-serif">Here we provide the fastest and secure countdown site. So you easily access our website.</p>
        </div>
      </div>
      

      <style jsx>{`
 #snow {
  background: linear-gradient(-45deg, #ee7752, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 50% 100%;
  }
  100% {
      background-position: 50% 0%;
  }
}
      `}</style>
    </>
  );
};

export default Home;