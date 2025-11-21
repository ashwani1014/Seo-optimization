"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const testimonials = [
  {
    text: "Working with the leading branding agency in Ahmedabad sharpened our brand instantly.",
    name: "Harshil Mehta",
    role: "UI/UX Designer",
    img: "/images/testimonial_img.png",
  },
  {
    text: "Their team brought clarity and focus to our brand strategy. Every deliverable felt polished and purposeful.",
    name: "Dhruv Patel",
    role: "Brand Manager",
    img: "/images/testimonial_img.png",
  },
  {
    text: "Their design and development launched a fast, modern brand site with zero hassle. Smooth from start to finish.",
    name: "Nidhi Shah",
    role: "Entrepreneur",
    img: "/images/testimonial_img.png",
  },
  {
    text: "The results across Gujarat were remarkable. Brand engagement climbed and our campaigns started delivering.",
    name: "Jaydeep Trivedi",
    role: "Marketing Lead",
    img: "/images/testimonial_img.png",
  },
  {
    text: "Their creativity made our brand look sharper than ever. Reliable, skilled, and a pleasure to work with.",
    name: "Priya Vyas",
    role: "Business Owner",
    img: "/images/testimonial_img.png",
  },
  {
    text: "Thanks to their branding insights, our visibility rose quickly. You can tell they know their craft inside out.",
    name: "Kunal Desai",
    role: "Store Owner",
    img: "/images/testimonial_img.png",
  },
];



const TestimonialSlider = () => {
  return (
    <Slider {...sliderProps.testimonial} className="row testi_slider pb-5">
      {testimonials.map((item, index) => (
        <div className="col-xl-12" key={index}>
          <div className="testimonial_item">
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <div className="testimonial_text">
                  <p className="description">{item.text}</p>

                  <p className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>

                  <div className="testimonial_avatar">
                    {/* <img
                      src={item.img}
                      alt="testimonial"
                      style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px', float: 'left' }}
                    /> */}
                    <h4>
                      {item.name} <span>{item.role}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
