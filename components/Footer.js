
export default function footer() {
 return (
<>
<div className=" w-full bg-red-500 text-white text-center">

  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Home</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">About Us</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Contact Us</a>
  <a className="text-center text-white inline-block p-4 no-underline hover:bg-slate-400" href="#">Privacy Policy</a>

  <p className="m-0 bg-red-800">Copyright &copy; <b>{new Date().getFullYear()}</b> Your Name All Rights Reserved</p>
</div>
  </>
 )
}

