import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navebar from './components/Navebar';
function MyApp({ Component, pageProps }) {
  return<>
  <Navebar/>
 
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
