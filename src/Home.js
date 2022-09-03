import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt="background-img"
        />
        <div className="home_row">
          <Product
            id="1"
            title="Camera"
            price={75000}
            rating={4}
            image="https://cdn.pixabay.com/photo/2012/04/13/17/00/camera-32871_1280.png"
          />
          <Product
            id="2"
            title="iPhone"
            price={57000}
            rating={5}
            image="https://cdn.pixabay.com/photo/2012/04/18/20/54/iphone-37856_1280.png"
          />
          <Product
            id="7"
            title="Book Shelf"
            price={10000}
            rating={2}
            image="https://cdn.pixabay.com/photo/2017/11/01/13/18/bookshelf-2907964_1280.png"
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Watch"
            price={19000}
            rating={3}
            image="https://cdn.pixabay.com/photo/2013/07/12/15/50/ticker-150395_1280.png"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation)"
            price={5000}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="iPad Pro"
            price={95000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Samsung TV"
            price={150000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
