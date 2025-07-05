import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    title: "How to Spot a Scam Property Listing in Nigeria",
    summary:
      "Not every shiny house photo is real. Learn how to detect fake agents and avoid house hunting heartbreaks.",
    date: "July 5, 2025",
    category: "Scams",
  },
  {
    title: "Top 5 Cities to Invest in Real Estate Right Now",
    summary:
      "Lagos isn’t the only hot market. Discover emerging cities that offer strong ROI and lower entry costs.",
    date: "June 20, 2025",
    category: "Investment",
  },
  {
    title: "What First-Time Renters Must Know in Nigeria",
    summary:
      "From 'agency and agreement' to light bills and landlord wahala, here's what every new renter should expect.",
    date: "June 10, 2025",
    category: "Renting",
  },
  {
    title: "Is It Better to Buy or Build in 2025?",
    summary:
      "Explore the pros and cons of buying a house versus building one from scratch in today’s Nigerian economy.",
    date: "June 2, 2025",
    category: "Investment",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchSearch = `${post.title} ${post.summary}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="py-5 bg-light">
      <div className="container  pt-5 mt-sm-5">
        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h1 className="fw-bold" style={{ color: "#3d9970" }}>
            Our Blog
          </h1>
          <p className="text-secondary">
            Real estate tips, trends, and no-nonsense advice from the Beta House
            team.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <input
              type="text"
              className="search form-control"
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontSize: "0.80em" }}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="row justify-content-center mb-4">
          <div className="col-auto d-flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm fw-medium ${
                  activeCategory === cat
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                style={{ fontSize: ".8em" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeUp}
              >
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5
                      className="card-title fw-semibold fs-6"
                      style={{ color: "#3d9970" }}
                    >
                      {post.title}
                    </h5>
                    <p
                      className="card-text text-muted"
                      style={{ fontSize: "0.75em" }}
                    >
                      {post.summary}
                    </p>
                  </div>
                  <div className="card-footer bg-white d-flex justify-content-between text-muted small">
                    <span>{post.date}</span>
                    <span
                      className={`badge fw-light ${
                        post.category === "Scams"
                          ? "bg-danger"
                          : post.category === "Renting"
                          ? "bg-success"
                          : post.category === "Investment"
                          ? "bg-info"
                          : "bg-secondary"
                      }`}
                      style={{ placeContent: "center" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div className="text-center mt-5 text-muted w-100">
              No blog posts match your search or selected category.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
