import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Link from 'next/link';
export default function About() {
  return <>
          <NextSeo
      title="Festival Countdown"
      description="Festival countdown helps people to see the countdown timer."
    />
<input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for names.."></input>
<div className="shadow-md sm:rounded-lg text-center justify-center items-center">
    <table className="w-3/5 text-sm text-center text-gray-500 dark:text-gray-400 mx-auto" id='myTable'>
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    Festival Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Link
                </th>
          
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    New Year
                </th>
                <td className="py-4 px-6">
                <Link href="/new-year">New Year</Link>
                </td>
         
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                   Christmas
                </th>
                <td className="py-4 px-6">
                <Link href="/christmas">Christmas</Link>
                </td>
        
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
        
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td className="py-4 px-6">
                    Gray
                </td>
             
            </tr>
            <tr>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td className="py-4 px-6">
                    Red
                </td>
            </tr>
        </tbody>
    </table>
</div>

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