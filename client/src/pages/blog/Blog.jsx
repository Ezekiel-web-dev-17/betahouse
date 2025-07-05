import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How to Spot a Scam Property Listing in Nigeria",
    summary:
      "Not every shiny house photo is real. Learn how to detect fake agents and avoid house hunting heartbreaks.",
    date: "July 5, 2025",
  },
  {
    title: "Top 5 Cities to Invest in Real Estate Right Now",
    summary:
      "Lagos isn’t the only hot market. Discover emerging cities that offer strong ROI and lower entry costs.",
    date: "June 20, 2025",
  },
  {
    title: "What First-Time Renters Must Know in Nigeria",
    summary:
      "From 'agency and agreement' to light bills and landlord wahala, here's what every new renter should expect.",
    date: "June 10, 2025",
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
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h1 className="fw-bold text-dark">Our Blog</h1>
          <p className="text-secondary">
            Real estate tips, trends, and no-nonsense advice from the Beta House
            team.
          </p>
        </motion.div>

        <div className="row">
          {blogPosts.map((post, index) => (
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
                  <h5 className="card-title fw-bold">{post.title}</h5>
                  <p className="card-text text-muted">{post.summary}</p>
                </div>
                <div className="card-footer bg-white text-muted small">
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
