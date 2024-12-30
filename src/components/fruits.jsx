import Fruit from "./fruit";

export default function fruits() {
  // const fruits = ['apple', 'mango', 'oragne', 'banana'];
  const fruits = [
    {
      name: "apple",
      price: 10,
      soldout: false
    },
    {
      name: "mango",
      price: 4,
      soldout: true
    },
    {
      name: "oragne",
      price: 7,
      soldout: false
    },
    {
      name: "banana",
      price: 2,
      soldout: true
    },
  ];
  return (
    <div className="fruits">
      <ul>
        <li>
          {fruits.map((fruit) => (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              soldout={fruit.soldout}
            ></Fruit>
          ))}
        </li>
      </ul>
    </div>
  );
}
