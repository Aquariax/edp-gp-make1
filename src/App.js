import './App.css';
import Navigation from './components/layout/navbar/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Top from './components/layout/Top';
import Bottom from './components/layout/Bottom';
import Access from './components/layout/Access';
import Card from './components/layout/cards/Card';
import './components/layout/styles/compiled/main.css';
import { CardData } from './components/layout/cards/CardData';
function App() {
	return (
		<div className='App'>
			<Navigation />
			<Header />
			<Top />
			<Access />
			<Bottom />
			<Card cards={CardData} />
			<Footer />
		</div>
	);
}

export default App;
