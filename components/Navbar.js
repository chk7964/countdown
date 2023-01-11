
export default function Navbar() {
 return (
  <div>
<div className="w-full bg-gradient-to-r from-violet-400 to-red-600  text-white text-center font-bold text-3xl p-2">
  <p className="m-0 hover:text-gray-200"><a href="./">Fest Clock</a></p>
</div>

<div className="scrollmenu  bg-gradient-to-r from-zinc-900  to-zinc-600 overflow-auto whitespace-nowrap text-center">
 
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./">Home</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./new-year">New Year Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./christmas">Christmas Countdown</a>
  {/* <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./invisible-character/">Halloween Countdown</a>  
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./lower-case/">Ramadan Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./numbers-to-words-converter/">Summer Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./reverse-text/">Winter Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./shuffle-text/">Easter Countdown</a> */}


</div>
    
  </div>
 )
}