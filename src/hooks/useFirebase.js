import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLogin, setIsLogin] = useState(false);

	const auth = getAuth();

	const signInUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider).then((result) => {
			setUser(result.user);
		});
	};

	const toggleLogin = (e) => {
		setIsLogin(e.target.checked);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleRegistration = (e) => {
		e.preventDefault();
		console.log(email, password);
		if (password.length < 6) {
			setError('Password Must be at least 6 characters long.');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setError('Password Must contain 2 upper case');
			return;
		}

		if (isLogin) {
			processLogin(email, password);
		} else {
			registerNewUser(email, password);
		}
	};

	const processLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError('');
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const registerNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError('');
				verifyEmail();
				setUserName();
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const setUserName = () => {
		updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
	};

	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser).then((result) => {
			console.log(result);
		});
	};

	const handleResetPassword = () => {
		sendPasswordResetEmail(auth, email).then((result) => {});
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else setUser({});
		});

		return () => unsubscribed;
	}, []);

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {});
	};

	return {
		user,
		signInUsingGoogle,
		logOut,
		handleRegistration,
		handleResetPassword,
		toggleLogin,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
	};
};

export default useFirebase;
