import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from '../src/pages/Login/PrivateRoute/PrivateRoute';
import Signup from './pages/Signup/Signup';
import Aboutus from './pages/Aboutus/Aboutus';
import Blogs from './pages/Blogs/Blogs';
import SingleService from './pages/SingleService/singleService';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/Home">
							<Home />
						</Route>
						<Route path="/aboutus">
							<Aboutus />
						</Route>
						<Route path="/blog">
							<Blogs />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<PrivateRoute path="/services">
							<Services />
						</PrivateRoute>
						<PrivateRoute path="/service/:id">
							<SingleService />
						</PrivateRoute>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
