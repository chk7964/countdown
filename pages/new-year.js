import Head from "next/head";
import { useEffect, useState } from "react";
import { NextSeo } from 'next-seo';
import Script from 'next/script'


const Home = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("01/01/2023 00:00:00");
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
        title="New Year Countdown"
        description="New year is starting day first."
      />
      <div className="animate-waving-hand bg-gradient-to-tl from-indigo-300 via-purple-300 to-pink-500 h-screen" id="snow">
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
              <h1 className="font-bold text-3xl pt-5 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">New Year Countdown</h1>
              <br />
              <h3 className="font-bold text-3xl p-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-lime-900">01/01/2022</h3>
              <br />
              <h3 className="font-bold text-3xl p-2 inline-block text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-amber-500">There Are Only</h3>
            </div>
            <div id="countdown" className="h-auto m-auto flex flex-col sm:flex-row items-center justify-center pt-[5vh] animate-pulse">
            
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500"><span id="days" className="block">{days}</span>days</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500"><span id="hours" className="block">{hours}</span>Hours</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500"><span id="minutes" className="block">{minutes}</span>Minutes</div>
                <div className="font-bold text-3xl skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center sm:text-lg md:text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-500"><span id="seconds" className="block">{seconds}</span>Seconds</div>
            
            </div>

            <div className=" w-min mx-auto bg-slate-400 pb-4 text-center mt-[10vh]">
              <p className="p-4">Advertise</p>

            </div>





          </>
        )}
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