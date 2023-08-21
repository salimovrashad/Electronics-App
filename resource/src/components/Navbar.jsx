import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const [product] = useContext(ProductContext);
  const [query, setQuery] = useState(null);
  const {totalItems} = useCart();

  return (
    <nav style={{height: 75}} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container ">
        <Link className="navbar-brand" to="/home">
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
            alt=""
          />
        </Link>
        <div
          className="ms-5 navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul style={{width: 200}} className="d-flex justify-content-between m-0">
          <form className="d-flex" role="search">
            <div>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Search
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form className="input-group mb-3">
                        <input
                          onChange={(e) => setQuery(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Product Name"
                          aria-label="Product Name"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn btn-outline-primary"
                          type="submit"
                          id="button-addon2"
                        >
                          Search
                        </button>
                      </form>
                        
                      <ul className="list-group">
                        {product
                          .filter((p) => p.title.toLowerCase().includes(query))
                          .map((item) => (
                            <Link className="text-decoration-none" to={`/shop/${item.id}`}>
                            <li
                            key={item.id}
                            className="list-group-item d-flex justify-content-between"
                          >
                            {item.title}
                            <img width={50} src={item.images[0]} alt="" />
                          </li>
                          </Link>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <Link to="/cart" className="btn btn-primary position-relative">
            <i className="fa-solid fa-cart-shopping" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
      
          {localStorage.getItem('active') === 'true'? <Link to="/login" className="btn btn-outline-primary">RS</Link>:<Link to="/login" className="btn btn-outline-primary"><i class="fa-solid fa-user"></i></Link>}
          </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
