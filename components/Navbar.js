
export default function Navbar() {
 return (
  <div>
<div className="w-full bg-red-500 text-white text-center font-bold text-3xl p-2">
  <p className="m-0"><a href="./">Festival Countdown</a></p>
</div>

<div className="scrollmenu bg-black overflow-auto whitespace-nowrap">
 
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./">Home</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./new-year">New Year Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./christmas">Christmas Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./invisible-character/">Halloween Countdown</a>  
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./lower-case/">Ramadan Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./numbers-to-words-converter/">Summer Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./reverse-text/">Winter Countdown</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./shuffle-text/">Easter Countdown</a>


</div>
    
  </div>
 )
}