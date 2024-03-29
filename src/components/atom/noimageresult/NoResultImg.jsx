import './noResult.scss';
import noResultImg from '../../../assets/no-result.svg';

const NoResultImg = ({ text }) => {
	return (
		<div className="errorImg py-4 py-md-5">
			<div className="imgDiv mb-3">
				<img src={noResultImg} alt="404" />
			</div>
			<div className="errText text-center">
				<p>Sorry, we cannot find this {text ?? 'product'} 😞</p>
			</div>
		</div>
	);
};
export default NoResultImg;
