"use client"
import React from 'react'
import Counter from './Counter'

export default function CounterSection() {
  return (
     <section className="counter pt_120 xs_pt_70 pb_140 xs_pb_90">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="counter_img">
                <img
                  src="/images/counter_img.webp"
                  alt="counter"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-sm-6" data-animation="fade-right">
                  <div className="counter_item counter_item_icon">
                    <h2 className="count">
                      <Counter end={70} />+
                    </h2>
                    <p>Project completed</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay=".5"
                >
                  <div className="counter_item">
                    <h2 className="count">
                      <Counter end={15} />
                    </h2>
                    <p>Skilled Professional</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay=".75"
                >
                  <div className="counter_item">
                    <h2 className="count">
                      <Counter end={100} />
                    </h2>
                    <p>Visited Conference</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay={1}
                >
                  <div className="counter_item counter_item_icon">
                    <h2 className="count">
                      <Counter end={50} />+
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
