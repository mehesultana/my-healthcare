import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route>
						<Blog />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
