import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";

export default (props) => {
  return (
    <section className="section">
      <Carousel autoPlay={true} style={{ maxWidth: 100 }}>
        <div>
          <img src="/1.jpg" />
        </div>

        <div>
          <img src="/2.jpg" />
        </div>

        <div>
          <img src="/7.jpg" />
        </div>

        <div>
          <img src="/3.jpg" />
        </div>

        <div>
          <img src="/4.jpg" />
        </div>

        <div>
          <img src="/6.jpg" />
        </div>

        <div>
          <img src="/5.jpg" />
        </div>
      </Carousel>
    </section>
  );
};
