import logo from '../../assets/default-monochrome.svg';
import { AiOutlinePrinter } from 'react-icons/ai';

const OrderInvoiceForm = ({
	senderName,
	senderAddress,
	firstName,
	lastName,
	address,
	cart,
	email,
	invoice,
	shipping_cost,
	number,
	payment_option,
	discountPrice,
	totalPriceInCart,
	totalPriceToPay,
	created_at,
	status,
}) => {
	const dateOne = new Date(created_at);
	const newCreatedAt = String(dateOne).slice(0, 16);
	const oldSenderName = `${firstName} ${lastName}`;
	return (
		<>
			<p className="greetings">
				Thank you <span>{senderName ? senderName : oldSenderName},</span> Your
				order has been {status !== 'completed' ? 'received' : 'completed'}.
			</p>
			<div className="invoice px-4">
				<div className="firstDiv d-md-flex justify-content-between py-4">
					<h4>INVOICE</h4>
					<div className="logoDiv">
						<img src={logo} alt="logo" />
						<p>
							{senderAddress
								? senderAddress
								: 'Ikorodu Rd, 254-7895 Ikorodu Lagos, Nigeria'}
						</p>
					</div>
				</div>
				<div className="secondDiv d-md-flex justify-content-between py-4">
					<div className="date mb-3 mb-md-0">
						<h6>date</h6>
						<p>{newCreatedAt}</p>
					</div>
					<div className="invoiceNum mb-3 mb-md-0">
						<h6>invoice no.</h6>
						<p>#{invoice}</p>
					</div>
					<div className="invoiceTo">
						<h6>invoice to.</h6>
						<p>
							{firstName} {lastName}
						</p>
						<p>{address}</p>
						<p>
							{email} {number}
						</p>
					</div>
				</div>
			</div>
			<div className="table p-4">
				<div>
					<table>
						<thead>
							<tr>
								<th>sr.</th>
								<th>product name</th>
								<th>quantity</th>
								<th>item price</th>
								<th>amount</th>
							</tr>
						</thead>

						{cart.map((item, index) => {
							const { name, price, count } = item;
							const realPrice = count * price;

							return (
								<tbody key={index}>
									<tr>
										<td className="count"></td>
										<td>{name}</td>
										<td>{count}</td>
										<td>&#8358;{Number(price).toFixed(2)}</td>
										<td>&#8358;{realPrice.toFixed(2)}</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>
			</div>
			<div className="paymentInfo px-4 py-md-5">
				<div className="d-md-flex justify-content-between py-4">
					<div className="mb-3 mb-md-0">
						<h6>payment method</h6>
						<p>{payment_option}</p>
					</div>
					<div className="mb-3 mb-md-0">
						<h6>shipping cost</h6>
						<p>&#8358;{shipping_cost}</p>
					</div>
					<div className="mb-3 mb-md-0">
						<h6>discount</h6>
						<p>&#8358;{discountPrice}</p>
					</div>
					<div className="priceOne mb-3 mb-md-0">
						<h6>total item price</h6>
						<p>&#8358;{totalPriceInCart.toFixed(2)}</p>
					</div>
					<div className="priceTwo mb-0 mb-md-0">
						<h6>total amount</h6>
						<p>&#8358;{totalPriceToPay.toFixed(2)}</p>
					</div>
				</div>
			</div>
			<div className="downloadBtns p-4">
				<button className="printBtn" onClick={() => window.print()}>
					print invoice{' '}
					<span>
						<AiOutlinePrinter />
					</span>
				</button>
			</div>
		</>
	);
};
export default OrderInvoiceForm;
