
export default function Navbar() {
 return (
  <div>
<div className="w-full bg-red-500 text-white text-center font-bold text-3xl">
  <p className="m-0"><a href="./">Festival Timer</a></p>
</div>

<div className="scrollmenu bg-black overflow-auto whitespace-nowrap">
 
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./">Home</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./capitalize-case">CapitalizeCase Converter</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./fancy-text">Fancy Text</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./invisible-character/">Invisible Text Generator</a>  
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./lower-case/">LowerCase Text Converter</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./numbers-to-words-converter/">Number To Word Converter</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./reverse-text/">Reverse Text Converter</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./shuffle-text/">Suffle Text </a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./text-repeater/">Text Repeater</a>
  <a className="no-underline text-white hover:text-white inline-block text-center p-4 hover:bg-gray-400" href="./upper-case/">UpperCase Conveter</a>

</div>
    
  </div>
 )
}