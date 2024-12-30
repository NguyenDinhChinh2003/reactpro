export default function fruit({ name, price, soldout }) {
  return (
    <div className="fruit">
      <ul>
        <li>
          <strong>{name}</strong> ${price} {soldout ? "soldOut" : ""}
        </li>
      </ul>
    </div>
  );
}
