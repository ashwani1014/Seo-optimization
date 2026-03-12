"use client";
import React from "react";
import FxotaryLayout from "@/layout/FxotaryLayout";

const clients = [
  {
    name: "BVM Surgical Hospital",
    link: "https://www.instagram.com/bvmsurgicalhospital/",
    image: "/images/our-client/bvm hospital logo.png"
  },
  {
    name: "Luxxe ",
    link: "https://www.instagram.com/luxxe_palanpur/",
    image: "/images/our-client/luxxe logo color.png"
  },
  {
    name: "Shriram Hospital",
    link: "https://www.instagram.com/shriramhospitaldeesa/",
    image: "/images/our-client/shriram hospital born to care.png"
  },
  {
    name: "Matrutva Hospital",
    link: "https://www.instagram.com/birthand_beyond/",
    image: "/images/our-client/matrutva hospital logo.png"
  },
  {
    name: "Rudra Hospital",
    link: "#",
    image: "/images/our-client/rudra hospital logo.jpg"
  },
  {
    name: "Siddheshwar",
    link: "#",
    image: "/images/our-client/sidhheshwari stud farm.png"
  },
  {
    name: "Deesa Bazaar",
    link: "https://www.instagram.com/deesabaazarshopping/",
    image: "/images/our-client/deesa bazar logo.png"
  },
  {
    name: "Elite Homes",
    link: "https://www.instagram.com/elite_infracon/",
    image: "/images/our-client/elite logo green.png"
  },
  {
    name: "Pramukh Greens",
    link: "https://www.instagram.com/shriyamgroup_1028/",
    image: "/images/our-client/pramukh green logo _page-0001.jpg"
  },
  {
    name: "Saajra Realty",
    link: "https://www.instagram.com/saajrarealty/",
    image: "/images/our-client/saajra logo orange.png"
  }
];

export default function ClientList() {
  return (
    <FxotaryLayout>
      <div className="py-5" style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
        <div className="container">
          <div className="text-center mb-5 pb-3">
            <h1 className="display-4 fw-bold mb-3 mt-5" style={{ color: "#111827", paddingTop: "80px" }}>
              Our Trusted Partners
            </h1>
            <div
              className="mx-auto"
              style={{ width: "80px", height: "4px", backgroundColor: "#2563eb", borderRadius: "2px" }}
            />
          </div>

          <div className="row g-5 justify-content-center">
            {clients.map((client, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="client-card transition-all"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      padding: "40px 30px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid rgba(0, 0, 0, 0.04)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                      e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.06)";
                      e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.04)";
                    }}
                  >
                    <div
                      style={{
                        height: "120px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px"
                      }}
                    >
                      <img
                        src={client.image}
                        alt={client.name}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                          padding: "5px"
                        }}
                      />
                    </div>
                    <h5
                      className="text-center mt-auto"
                      style={{
                        color: "#374151",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        lineHeight: "1.4",
                        width: "100%"
                      }}
                    >
                      {client.name}
                    </h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FxotaryLayout>
  );
}