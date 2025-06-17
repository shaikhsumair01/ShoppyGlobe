export default function CartItem({ data }) {
  return (
    <div className="Cart-item">
      <img src={data.image} className="Cart-item-image" />
      <div className="Cart-desc">
      <h2 className="Cart-title">{data.title}</h2>
      <h3 className="Cart-qt">Quantity: {data.qty}</h3>
      <h3 className="Cart-price">Price: ₹{data.price * data.qty}</h3>
      </div>
    </div>
  );
}
