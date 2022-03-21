import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { delCart, plusCart, minusCart } from "../action";


const Cart = (props) => {

  const totalPrice = props.cart.reduce((total, item) => (total += (item.price * item.count)), 0)

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link>
        <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

      {props.cart.map(book => (

        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.authour}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
            <button onClick={() => book.count > 1 ? props.minusCart(book.id) : null}>-</button>
            <button onClick={() => props.delCart(book.id)}>Sepetten Çıkar</button>
            <button onClick={() => props.plusCart(book.id)}>+</button>
          </div>
        </div>
        
      ))}

    </div>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart })

export default connect(mapStateToProps, { delCart, plusCart, minusCart })(Cart)