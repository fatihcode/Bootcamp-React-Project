import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCart, plusCart } from "../action";

const Products = props => {
 
  const handleCart = (e) => {

    const id = Number(e.target.id)

    props.cart.some(item => item.id === id)
      ? props.plusCart(id)
      : props.addCart(id)
  }

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>

      {props.bookList.map(book => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={handleCart} id={book.id}>Sepete Ekle</button>
          </div>
        </div>
      ))}

    </div>
  );
};


const mapStateToProps = (state) => ({ bookList: state.bookList, cart: state.cart })

export default connect(mapStateToProps, { addCart, plusCart })(Products)