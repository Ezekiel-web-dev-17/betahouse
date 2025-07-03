// Import React since we are writing a React component.
import React from "react";
// Import Link component from react-router-dom for navigation between pages.
import { Link } from "react-router-dom";
// Import the CSS file specific to the Blog component.
import "./Blog.css";
// Import the plus icon from react-icons for displaying next to categories.
import { FaPlus } from "react-icons/fa";
// Import various images used in the blog layout for posts, posters, and dates.
// import""from "../../../public/Rectangle 60.png";
// import blogptwo from "../../../public/Rectangle 61.png";
// import blogpthree from "../../../public/Rectangle 62.png";
// import""from "../../../public/Rectangle 64.png";
// import blogimg1 from "../../../public/blog1.png";
// import blogimg2 from "../../../public/blog2.png";
// import blogimg3 from "../../../public/blog3.png";
// import blogimg4 from "../../../public/blog4.png";
// import blogdate from "../../../public/blogdate.png";
import { BsSearch } from "react-icons/bs";

// Define the Blog functional component.
const Blog = () => {
  return (
    // Main container for the blog page with a specific class for styling.
    <div className="blogpage-con container">
      {/* Breadcrumb navigation at the top of the page */}
      <div className="blogpage-tit text-md-start px-3 py-2 mb-5">
        <p className="m-0">
          {/* Link to the Home page */}
          <Link to="/" className="text-decoration-none">
            Home
          </Link>{" "}
          /{" "}
          <span>
            {/* Link to the News section (blog page) */}
            <Link to="/blog" className="text-decoration-none">
              News
            </Link>
          </span>
        </p>
      </div>

      {/* ================================== */}
      {/* Main content section split into two columns */}
      <div className="blogpage-low d-flex align-items-start mx-3">
        {/* Left column containing sidebar elements */}
        <div className="left-blog d-flex flex-column align-items-start">
          {/* Blog page title */}
          <h2 className="mb-0">Blog standard</h2>

          {/* ==================== */}
          {/* Search input container with positioned search icon */}
          <div className="position-relative">
            {/* Text input for searching blogs */}
            <input className="blogshinput" type="text" placeholder="Search" />
            {/* Search icon positioned at the end of the input */}
            {/* <img className="position-absolute end-0" src={navSearch} alt="" /> */}
            <BsSearch className="position-absolute end-0" />
          </div>

          {/* ==================== */}
          {/* Categories section */}
          <div className="blogs-carte d-flex flex-column align-items-start rounded-3">
            {/* Title for the categories */}
            <h3 className="mb-0">Categories</h3>
            {/* Container for each category entry */}
            <div className="blogeach-carte d-flex flex-column align-items-start gap-4">
              {/* Each category with a plus icon and text */}
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Education and Development</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Toy Safety</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Toy Trends</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Customer Stories</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPlus />
                <p className="mb-0">Events and Promotions</p>
              </div>
            </div>
          </div>

          {/* =================== */}
          {/* Recent Posts section */}
          <div className="blogsrec-post d-flex flex-column align-items-start rounded-3">
            <h3 className="mb-0">Recent Posts</h3>
            {/* Container for each recent post */}
            <div className="blogrec-eachp d-flex flex-column align-items-start">
              {/* Each recent post entry with an image and title */}
              <div className="d-flex align-items-center gap-2">
                <img src="" alt="Recent post" />
                <p className="mb-0 ms-1 text-start">
                  Enhancing motor skills through play
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <img src="" alt="Recent post" />
                <p className="mb-0 ms-1 text-start">
                  Fostering problem solving skills
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <img src="" alt="Recent post" />
                <p className="mb-0 ms-1 text-start">
                  Emotional and Social Development
                </p>
              </div>
            </div>
          </div>

          {/* ================== */}
          {/* Popular Tags section */}
          <div className="blogsrec-popu d-flex flex-column align-items-start rounded-3">
            <h3 className="mb-0">Popular Tag</h3>
            {/* Container for the popular tags */}
            <div className="blogspopu-tags d-flex flex-column align-items-start">
              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Learn & Inspire</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Top Toy</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Family fun</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Toy Reviews </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="p-2 rounded-3">
                  <p className="mb-0">Toy Trends</p>
                </div>
                <div className="p-2 rounded-3">
                  <p className="mb-0">Tips & Tricks</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== */}
          {/* Promotional poster section */}
          <div className="dream-toyz position-relative">
            {/* Promotional image poster */}
            <img className="position-relative" src="" alt="" />
            {/* Overlay container for promotional text and button */}
            <div className="dream-shop position-absolute d-flex flex-column align-items-center">
              <div className="d-flex flex-column">
                <h3 className="mb-0">Dream Toys at Delightful Prices!</h3>
                <p className="mb-0">15% Off on Kids' Toys and Gifts!</p>
              </div>
              {/* Call-to-action button */}
              <button className="border-0">Shop now</button>
            </div>
          </div>
        </div>

        {/* ====================================================================== */}
        {/* Right column containing main blog posts */}
        <div className="right-blog d-flex flex-column align-items-start">
          {/* First blog post entry */}
          <div className="right-each d-flex flex-column align-items-start rounded-3">
            {/* Blog post image */}
            <img src="" alt="" />
            {/* Container for blog post content */}
            <div className="inblog d-flex flex-column align-items-start text-start">
              {/* Blog post date and time */}
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src="" alt="Date" />
                <p className="mb-0">March 24, 2024</p>
              </div>
              {/* Blog post title and excerpt */}
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Enhancing motor skills through play</h4>
                <p className="mb-0">
                  Motor skills are divided into two categories: fine motor
                  skills and gross motor skills. Toys play a vital role in the
                  development of both.
                </p>
              </div>
            </div>
          </div>

          {/* Second blog post entry */}
          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src="" alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src="" alt="Date" />
                <p className="mb-0"> Feb 12, 2024</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Fostering problem solving skills</h4>
                <p className="mb-0">
                  Problem-solving is a critical skill that children begin to
                  develop from a very young age through interactive and engaging
                  play. Toys that challenge children to think and strategize
                  encourage this development.
                </p>
              </div>
            </div>
          </div>

          {/* Third blog post entry */}
          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src="" alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src="" alt="Date" />
                <p className="mb-0"> Jun 16, 2023</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Emotional and Social Development</h4>
                <p className="mb-0">
                  Toys also help children express their emotions and understand
                  those of others, which is foundational for developing empathy
                  and interpersonal skills.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth blog post entry */}
          <div className="right-each d-flex flex-column align-items-start rounded-3">
            <img src="" alt="" />
            <div className="inblog d-flex flex-column align-items-start text-start">
              <div className="blog-time d-flex align-items-center gap-2 py-2 px-3 rounded-3">
                <img src="" alt="Date" />
                <p className="mb-0"> September 16, 2023</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <h4 className="mb-0">Language Development and Social Skills</h4>
                <p className="mb-0">
                  Language development is significantly influenced by
                  interactive play. Toys that involve multiple participants can
                  help develop this skill, as well as social skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Blog component as the default export.
export default Blog;
