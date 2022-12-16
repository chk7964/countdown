import Head from "next/head";
import { useEffect, useState } from "react";


const Home = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/25/2022 00:00:00");
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
    <div className=" bg-rose-400 h-screen">
      <Head>
        <title>Christmas Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="/css/bg.css"></link> */}
      </Head>

      {partyTime ? (
        <>
          <h1>Happy Christmas!</h1>
          {/* <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video> */}
        </>
      ) : (
        <>
         {/* <div className="flex border border-red-400 justify-center text-center w-max px-p ">
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
  <h1 className="font-bold text-3xl pt-5">Christmas Countdown Timer</h1>
</div>
              <div id="countdown" className="h-auto m-auto flex items-center justify-center pt-[20vh] animate-pulse">
    <ul>
      <li className="font-bold skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center text-lg sm:text-lg md:text-3xl lg:text-6xl"><span id="days" className="block">{days}</span>days</li>
      <li className="font-bold skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center text-lg sm:text-lg md:text-3xl lg:text-6xl"><span id="hours" className="block">{hours}</span>Hours</li>
      <li className="font-bold skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center text-lg sm:text-lg md:text-3xl lg:text-6xl"><span id="minutes" className="block">{minutes}</span>Minutes</li>
      <li className="font-bold skew-y-6 stroke-yellow-400 uppercase list-none inline-block p-3 text-center text-lg sm:text-lg md:text-3xl lg:text-6xl"><span id="seconds" className="block">{seconds}</span>Seconds</li>
    </ul>
  </div>

<div className="mt-48 w-min mx-auto  pb-4 border border-lime-400 text-center">
<p className="p-4">Advertise</p>

</div>


           
    <style jsx>{`
    
      
      `}</style>
        
        </>
      )}
    </div>
    </>
  );
};

export default Home;