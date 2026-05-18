function Card({title, price}) {

  return (

    <div className="border p-4 rounded">

      <h3 className="font-bold">
        {title}
      </h3>


      <p>
        ₹ {price}
      </p>


      <button className="bg-blue-600 text-white px-3 py-1 mt-2">
        Add to cart
      </button>

    </div>

  );

}

export default Card;