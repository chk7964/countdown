import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
 return (
  <>
   <Navbar />
   <main>
    <div className='py-1'>
    {children}
    </div>
   </main>
   <Footer />
  </>
 )
}