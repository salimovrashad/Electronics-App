import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const Header = () => {
  const [product] = useContext(ProductContext);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="bgphoto">
              <div className="container col-xxl-12 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img
                      src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png"
                      className="d-block mx-lg-auto img-fluid"
                      alt="Bootstrap Themes"
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6">
                    <p className="text-danger"><i className="fa-solid fa-fire" style={{color: '#dc3545'}}/> <span></span>Hot Deal In This Week</p>
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                      Roco Wireless <br /> Headphone
                    </h1>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <Link
                        className="btn btn-outline-primary btn-lg px-4"
                        to="/shop"
                      >
                        <i class="fa-solid fa-cart-shopping"></i> Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="bgphoto">
              <div className="container col-xxl-12 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img
                      src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png"
                      className="d-block mx-lg-auto img-fluid"
                      alt="Bootstrap Themes"
                      width={600}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6">
                  <p className="text-danger"><i className="fa-solid fa-fire" style={{color: '#dc3545'}}/> <span></span>Hot Deal In This Week</p>
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                    Smart Digital <br /> Watch
                    </h1>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <Link
                        className="btn btn-outline-primary btn-lg px-4"
                        to="/shop"
                      >
                        <i class="fa-solid fa-cart-shopping"></i> Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2">Browse by Category</h2>
        <div className="row py-5 row-cols-lg-7 w-100 d-flex justify-content-between">
          <div className="feature col border p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-4.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Phones</p>
          </div>
          <div className="feature col border p-3 mx-2">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-5.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Computers</p>
          </div>
          <div className="feature col border p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-11.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Accessories</p>
          </div>
          <div className="feature col border p-3 mx-2">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-6.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Laptops</p>
          </div>
          <div className="feature col border p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-2.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Monitors</p>
          </div>
          <div className="feature col border p-3 mx-2">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-7.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">Networking</p>
          </div>
          <div className="feature col border p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-8.png"
                alt=""
                srcset=""
              />
            </div>
            <p className="m-0">PC Gaming</p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5">
        <h2 className="pb-2">Explore our Products</h2>
        <div className="row py-5 row-cols-lg-4 w-100 d-flex justify-content-between gap-4">
          {product.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            product.slice(0, 8).map((item) => (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "14rem" }}
                  src={item.images[0]}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <h5 className="card-title">${item.price}</h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-body-secondary">Shop</Link></li>
          <li className="nav-item mb-2"><Link to="/pages" className="nav-link p-0 text-body-secondary">Pages</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-body-secondary">Shop</Link></li>
          <li className="nav-item mb-2"><Link to="/pages" className="nav-link p-0 text-body-secondary">Pages</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/shop" className="nav-link p-0 text-body-secondary">Shop</Link></li>
          <li className="nav-item mb-2"><Link to="/pages" className="nav-link p-0 text-body-secondary">Pages</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
       </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i class="fa-brands fa-discord"></i></a></li>
      </ul>
    </div>
  </footer>
</div>

    </>
  );
};

export default Header;