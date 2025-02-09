import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Furniture", slug: "furniture" },
    { name: "Mobile Phones", slug: "mobile-phones" },
    { name: "Electronics", slug: "electronics" },
    { name: "Local Products", slug: "local-products" },
    { name: "Clothing", slug: "clothing" },
    { name: "Cars", slug: "cars" },
    { name: "Property", slug: "property" },
    { name: "Other", slug: "other" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Welcome to Tsixla</h1>
      
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <h2>Categories</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} style={{
            textDecoration: "none",
            padding: "15px",
            backgroundColor: "#0070f3",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
            fontSize: "1rem",
          }}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
