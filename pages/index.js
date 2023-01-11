import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Link from 'next/link';
export default function About() {
  return <>
          <NextSeo
      title="Festival Countdown"
      description="Festival countdown helps people to see the countdown timer."
    />
    <div className="grid grid-cols-3 ">
  <div className="w-40 sm:w-4/12 px-4 m-2">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow-xl drop-shadow-2xl shadow-red-400 rounded-full max-w-full h-auto align-middle border-none" />
    <div className='text-center justify-center items-center mx-auto'>
    <span className='font-semibold text-lg'>hii</span>
    </div>
  </div>
</div>
    <div className='h-20 w-20 shadow-lg mx-auto border border-red-400'><img className='rounded-full h-auto max-w-full' src='https://pngimg.com/d/new_year_PNG77.png'></img></div>
<input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for names.."></input>


<Script id="show-banner">
  {`
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
`}
</Script>
  </>
}