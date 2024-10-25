import React, { useState } from "react";
import { auth } from "../firebase.js";
import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const toggleMode = () => {
		setIsLogin((prevMode) => !prevMode);
	};

	const handleGoogleAuth = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auth, provider);
			console.log(result.user);
			navigate("/"); // Redirect to homepage after login
		} catch (error) {
			console.error("Error during Google authentication", error);
		}
	};

	const handleAuth = async (event) => {
		event.preventDefault();
		try {
			if (isLogin) {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log("Logged in:", userCredential.user);
			} else {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);

				// Update the user's profile with the display name
				await updateProfile(userCredential.user, {
					displayName: name,
				});

				console.log("Signed up:", userCredential.user);
			}

			navigate("/"); // Redirect to homepage after login/signup
		} catch (error) {
			console.error("Error during authentication", error);
		}
	};

	return (
		<div className="min-h-screen flex justify-evenly  dark:bg-gray-900  text-xl">
			<div></div>
			<div className="w-full max-w-96 relative top-[50px]  ">
				<form
					className="flex flex-col justify-center items-center gap-5  pt-10 p-5 rounded-lg shadow-sm hover:shadow-2xl dark:text-white"
					onSubmit={handleAuth}
				>
					{!isLogin ? (
						<input
							type="name"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-2   border-b-[3px] border-gray-300 bg-inherit"
						/>
					) : (
						""
					)}
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-2  border-b-[3px] border-gray-300 bg-inherit"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2  border-b-[3px] border-gray-300 bg-inherit"
					/>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded"
					>
						{isLogin ? "Login" : "Sign Up"}
					</button>
				</form>
				<div className="flex justify-center gap-5 mt-5">
					<button onClick={toggleMode} className="text-blue-500">
						{isLogin ? "Switch to Signup" : "Switch to Login"}
					</button>
					<button onClick={handleGoogleAuth} className="text-blue-500">
						{isLogin ? "Login with Google" : "Signup with Google"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Auth;
