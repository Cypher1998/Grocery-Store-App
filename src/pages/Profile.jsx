import './profilepage.scss';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import { getAuth, updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase.config';
import { toast } from 'react-toastify';
import { getAuthUser } from '../redux/getauthuser/getAuthUserAction';

const Profile = ({ getAuthUser, loggedInUser, loadingUser, error }) => {
	useEffect(() => {
		document.title = 'Cypher Store | My Profile';
	}, []);

	useEffect(() => {
		if (error !== null) {
			getAuthUser();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const auth = getAuth();
	const { displayName, email, uid, photoURL } = auth.currentUser;

	const [changeDetails, setChangeDetails] = useState(false);
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		username: displayName,
		useremail: email,
		usernumber: loggedInUser?.number ?? ' ',
		useraddress: loggedInUser?.address ?? ' ',
		imgUrl: null,
	});

	const { username, useremail, usernumber, useraddress, imgUrl } = formData;

	const onChange = (e) => {
		if (e.target.files) {
			setFormData((prevState) => ({ ...prevState, imgUrl: e.target.files }));
		}
		if (!e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
		}
	};

	const onSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		if (username === '') {
			setLoading(false);
			toast.error('Name field cannot be empty');
			return;
		}
		try {
			if (imgUrl !== null) {
				const storeImg = async (image) => {
					return new Promise((resolve, reject) => {
						const fileName = `${uid}-${image.name}`;
						const storageRef = ref(storage, `userImages/${fileName}`);

						const uploadTask = uploadBytesResumable(storageRef, image);
						uploadTask.on(
							'state_changed',
							(snapshot) => {
								const progress =
									(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
								return progress;
							},
							(error) => {
								reject(error);
							},
							() => {
								getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
									resolve(downloadURL);
								});
							}
						);
					});
				};
				const formattedUrl = await Promise.all(
					[...imgUrl].map((image) => storeImg(image))
				).catch((e) => {
					return new Error();
				});

				await updateProfile(auth.currentUser, {
					displayName: username,
					phoneNumber: 885,
					photoURL: formattedUrl[0],
				});

				const userRef = doc(db, 'users', uid);

				await updateDoc(userRef, {
					photoURL: formattedUrl[0],
					name: username,
					number: usernumber,
					address: useraddress,
				});

				toast.success('Profile update successful!');
				setLoading(false);
				setChangeDetails(false);
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
				await updateProfile(auth.currentUser, {
					displayName: username,
				});

				const userRef = doc(db, 'users', uid);
				await updateDoc(userRef, {
					photoURL: photoURL,
					name: username,
					number: usernumber,
					address: useraddress,
				});

				toast.success('Profile update successful!');
				setLoading(false);
				setChangeDetails(false);
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}
		} catch (error) {
			toast.error('Failed to upload profile!');
			setLoading(false);
			setChangeDetails(false);
		}
	};

	return (
		<section>
			<div className="myProfile p-md-1">
				<h3>My Profile</h3>
				{loadingUser ? (
					<div className="profileSpinner">
						<DisplaySpinner />
					</div>
				) : error ? (
					<div className="text-danger profileError">
						<p>Failed to fetch profile details</p>
					</div>
				) : (
					loggedInUser && (
						<>
							{loading && (
								<div className="onLoad">
									<DisplaySpinner />
								</div>
							)}
							<form onSubmit={onSubmit}>
								<div className="mt-3">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										id="username"
										value={username}
										onChange={onChange}
										disabled={!changeDetails}
									/>
								</div>
								<div className="my-3">
									<label htmlFor="name">Email</label>
									<input type="email" value={useremail} disabled={true} />
								</div>
								<div>
									<label htmlFor="name">Phone Number</label>
									<input
										type="text"
										id="usernumber"
										value={usernumber || loggedInUser?.number}
										onChange={onChange}
										disabled={!changeDetails}
									/>
								</div>
								<div className="my-3">
									<label htmlFor="name">Address</label>
									<textarea
										cols="30"
										rows="3"
										disabled={!changeDetails}
										onChange={onChange}
										id="useraddress"
										value={useraddress}
									></textarea>
								</div>
								<div className="file my-3">
									<label htmlFor="name">Upload Image</label>
									<input
										type="file"
										accept=".jpg,.jpeg,.png"
										onChange={onChange}
										disabled={!changeDetails}
										style={{
											cursor: !changeDetails ? 'not-allowed' : 'pointer',
										}}
									/>
								</div>
								<div className="mt-4 mb-2 d-flex justify-content-between">
									{changeDetails && (
										<Button
											className="px-4 py-2"
											variant="secondary"
											onClick={() =>
												setChangeDetails((prevState) => !prevState)
											}
										>
											Cancel
										</Button>
									)}

									{changeDetails && (
										<Button variant="warning" type="submit">
											Update Profile
										</Button>
									)}

									{!changeDetails && (
										<Button
											variant="dark"
											className="px-4 py-2"
											onClick={() => {
												setChangeDetails((prevState) => !prevState);
											}}
										>
											Edit Profile
										</Button>
									)}
								</div>
							</form>
						</>
					)
				)}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	loggedInUser: state.getAuthUser.user,
	loadingUser: state.getAuthUser.loading,
	error: state.getAuthUser.error,
});

export default connect(mapStateToProps, { getAuthUser })(Profile);
