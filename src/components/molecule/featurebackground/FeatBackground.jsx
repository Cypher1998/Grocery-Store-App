import './featbackground.scss';
import { useEffect } from 'react';
import UnknownChild from '../../utilities/UnknownChild';
import Features from '../../atom/features/Features';
import { connect } from 'react-redux';
import DisplaySpinner from '../../atom/DisplaySpinner';
import ErrorText from '../../atom/ErrorText';

const FeatBackground = ({ error, loading, featuresData }) => {
	useEffect(() => {
		if (navigator.onLine && error !== null) {
			window.location.reload();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="features mt-4 mt-lg-0">
			<div className="myContainer">
				<UnknownChild>
					<div className="randomText text-center pt-5 pb-4 col-lg-6 col-xl-5 mx-auto">
						<h3>Featured Categories</h3>
						<p>Choose your necessary products from this feature categories.</p>
					</div>
				</UnknownChild>

				<div className="pb-5">
					{loading ? (
						<DisplaySpinner />
					) : error ? (
						<>
							<ErrorText error={error} />
						</>
					) : (
						featuresData && (
							<div className="featuresDisplay">
								{featuresData.map((feature) => {
									return <Features key={feature.id} {...feature} />;
								})}
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	error: state.features.error,
	loading: state.features.loading,
	featuresData: state.features.featuresData,
});

export default connect(mapStateToProps, null)(FeatBackground);
