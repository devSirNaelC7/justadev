import Header from '../components/Header'
import ScreenInit from '../components/ScreenInit'
import About from '../components/About'
import ScreenSkills from '../components/ScreenSkills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home() {
  return(
  	<>
	  	<Header />
  		<ScreenInit />
		<About />
		<ScreenSkills />
		<Contact />
		<Footer />
  	</>
  	);
}
