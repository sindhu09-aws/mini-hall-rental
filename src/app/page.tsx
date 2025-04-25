"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  const images = [
    "Outside2", "Outside3", 
    "Halldecor1", "Halldecor2", "Halldecor3", "Halldecor4", "Halldecor5", "Halldecor6",
    "Hallview1", "Hallview2",
    "Dining1", "Dining2", "Dining3", "Outside6"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Playfair Display', serif", backgroundColor: "#fff8dc", color: "#000" }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
      </Head>

      {/* Header Banner */}
      <div style={{ backgroundColor: "#002366", padding: "2rem 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <img
          src="/images/mandala.png"
          alt="Mandala Pattern"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.15, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, pointerEvents: "none" }}
        />
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "white", position: "relative", zIndex: 1 }}>Vaani Mini Hall</h1>
      </div>

      {/* Navigation Tabs */}
      <nav style={{ backgroundColor: "#003399", padding: "1rem 0", textAlign: "center" }}>
        <Link href="#home" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Home</Link>
        <Link href="#amenities" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Amenities</Link>
        <Link href="#pricing" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Pricing</Link>
        <Link href="#gallery" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Gallery</Link>
        <Link href="#location" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Location</Link>
        <Link href="#contact" style={{ margin: "0 1rem", color: "white", fontWeight: "bold" }}>Contact Us</Link>
      </nav>

      {/* Banner Image */}
      <div style={{ width: "100%", height: "auto" }}>
        <Image
          src="/images/Outside1.jpeg"
          alt="Hall Banner"
          width={1200}
          height={400}
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </div>

      {/* Main Content */}
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        {/* Description */}
        <p style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>
          Our elegantly designed banquet hall offers comfortable seating for up to 150 guests, along with a dedicated dining area that accommodates 36.
          Ideally located in the heart of the city, perfect venue for birthdays, weddings, receptions, parties, and special occasions.
        </p>

        {/* Amenities */}
        <div id="amenities" style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>🏢 Amenities</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", fontSize: "1.1rem" }}>
            <li>✅ Fully Air-Conditioned Hall</li>
            <li>🎉 Elegant Decor and Lighting</li>
            <li>🍽️ Spacious Dining Hall</li>
            <li>🪑🛋️ Chair and Table</li>
            <li>🧼 Clean Washrooms</li>
          </ul>
        </div>

        {/* Pricing */}
        <div id="pricing" style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>💰 Pricing</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#e0e0e0" }}>
                <th style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Package</th>
                <th style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Non-AC Hall Booking (5 Hours)</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹9,800</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>AC Charges Hall Booking (5 Hours)</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹2,000</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Cleaning Charges</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹1,200</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Electric and Water Charges</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹1,000</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Extra Hour Charges (per hour)</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹500</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>Advance Payment (non-refundable)</td>
                <td style={{ padding: "0.75rem", border: "1px solid #ccc" }}>₹5,000</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.95rem", marginTop: "0.25rem", color: "#b30000" }}><strong>Note:</strong> Advance will not be returned in case of cancellation.</p>
        </div>

        {/* Gallery */}
        <div id="gallery" style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>📷 Photo Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem", padding: "0 1rem" }}>
            {images.map((name, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                style={{ cursor: "pointer", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={`/images/${name}.jpeg`}
                  alt={name}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <div style={{ backgroundColor: "#002366", color: "white", textAlign: "center", padding: "0.5rem", fontSize: "0.9rem" }}>{name}</div>
              </div>
            ))}
          </div>

          {/* Modal with navigation */}
          {currentImageIndex !== null && (
            <div
              onClick={() => setCurrentImageIndex(null)}
              style={{ position: "fixed", top: 0, left: 0, zIndex: 1000, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }} onClick={(e) => e.stopPropagation()}>
                <img
                  src={`/images/${images[currentImageIndex]}.jpeg`}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
                />
                <button onClick={() => setCurrentImageIndex(null)} style={{ position: "absolute", top: 10, right: 10, background: "#fff", border: "none", borderRadius: "50%", width: 30, height: 30, fontWeight: "bold", cursor: "pointer" }}>✕</button>
                {currentImageIndex > 0 && (
                  <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)} style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", background: "rgba(255,255,255,0.7)", border: "none", borderRadius: "50%", padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}>‹</button>
                )}
                {currentImageIndex < images.length - 1 && (
                  <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)} style={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)", background: "rgba(255,255,255,0.7)", border: "none", borderRadius: "50%", padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}>›</button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Location */}
        <div id="location" style={{ marginTop: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>📍 Location</h3>
          <p>161, Sundarraj Nagar, Subramaniyapuram, Tiruchirappalli, Tamil Nadu 620020</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.954150774317!2d78.7026684!3d10.7840192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5247f127053%3A0xc7f6af89e6006ce7!2sVaani%20Mini%20Hall%20A%2FC!5e0!3m2!1sen!2sin!4v1713880000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: "1rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Us */}
        <div id="contact" style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>📞 Contact Us</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            📱 <strong>Phone:</strong>
            <a href="tel:+916374147805" style={{ color: "#003399", textDecoration: "none", marginRight: "1rem", display: "inline-block" }}>+91 63741 47805   /    </a>
            <a href="tel:+918072951105" style={{ color: "#003399", textDecoration: "none", display: "inline-block" }}>  +91 80729 51105</a>
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            🕒 <strong>Hours:</strong> Monday – Sunday: 8 am – 8 pm
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            📍 <strong>Address:</strong> 161, Sundarraj Nagar, Subramaniyapuram, Tiruchirappalli, Tamil Nadu 620020
          </p>
        </div>
      </div>
    </div>
  );
}
