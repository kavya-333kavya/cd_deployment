import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom"; // For navigation

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animateHeart, setAnimateHeart] = useState(null); // For heart animation

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResponse = await axios.get("http://localhost:8088/allposts");

        const blogsWithUsernames = await Promise.all(
          blogResponse.data.map(async (blog) => {
            try {
              const userResponse = await axios.get(
                `http://localhost:8088/getuser?email=${blog.uemail}`
              );
              return { ...blog, username: userResponse.data };
            } catch (error) {
              console.error(`Error fetching username for blog: ${blog.id}`, error);
              return { ...blog, username: "Unknown User" };
            }
          })
        );

        setBlogs(blogsWithUsernames);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  const handleHeartClick = (id) => {
    toggleLike(id);
    setAnimateHeart(id);
    setTimeout(() => {
      setAnimateHeart(null); // Reset animation after 1 second
    }, 1000);
  };

  const downloadImage = (image, title) => {
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${image}`;
    link.download = `${title}.jpg`;
    link.click();
  };

  return (
    <div style={styles.viewBlogs}>
      {/* Navigation Buttons */}
      <div style={styles.navbar}>
        <h1 style={styles.appName}>Explore India</h1>
        <div style={styles.navButtons}>
          <Link to="/user/addblog" style={styles.navButton}>Add Post</Link>
          <Link to="/my-posts" style={styles.navButton}>View My Posts</Link>
        </div>
      </div>

      {/* Blog Feed */}
      {loading ? (
        <p style={styles.loadingText}>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p style={styles.loadingText}>No blogs available.</p>
      ) : (
        <div style={styles.blogGrid}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={styles.blogCard}
              onDoubleClick={() => handleHeartClick(blog.id)}
            >
              {/* User Info */}
              <div style={styles.blogHeader}>
                <div style={styles.avatar}>
                  {blog.username ? blog.username.charAt(0).toUpperCase() : "U"}
                </div>
                <span style={styles.username}>
                  {blog.username || "Unknown User"}
                </span>
              </div>

              {/* Blog Image */}
              {blog.image && (
                <img
                  src={`data:image/jpeg;base64,${blog.image}`}
                  alt="Blog"
                  style={styles.blogImage}
                />
              )}

              {/* Blog Details */}
              <div style={styles.blogDetails}>
                <h3 style={styles.blogTitle}>{blog.title}</h3>
                <p style={styles.blogDescription}>{blog.description}</p>
                <div style={styles.icons}>
                  <FaHeart
                    style={{
                      ...styles.icon,
                      color: likedPosts.includes(blog.id) ? "red" : "#8e8e8e",
                      transform: animateHeart === blog.id ? "scale(1.5)" : "scale(1)",
                      transition: "transform 0.2s ease-in-out",
                      animation: animateHeart === blog.id ? "heartBlink 0.5s ease-in-out" : "none",
                    }}
                    onClick={() => handleHeartClick(blog.id)}
                  />
                  <FaDownload
                    style={styles.icon}
                    onClick={() => downloadImage(blog.image, blog.title)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  /* Main Container */
  viewBlogs: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },

  /* Navbar */
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#FFFEFA",
    color: "#333",
  },

  appName: {
    fontSize: "24px",
    margin: 0,
    color: "black", // Set header to white
  },

  navButtons: {
    display: "flex",
    gap: "20px",
  },

  navButton: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 15px",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },

  navButtonHover: {
    backgroundColor: "#0056b3",
  },

  /* Loading Text */
  loadingText: {
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
    marginTop: "20px",
  },

  /* Blog Grid */
  blogGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },

  /* Blog Card */
  blogCard: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  },

  /* Blog Header */
  blogHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
  },
  username: {
    fontWeight: "bold",
    color: "#333",
    marginLeft: "10px",
  },

  /* Blog Image */
  blogImage: {
    width: "100%",
    height: "auto",
    display: "block",
    borderBottom: "1px solid #e6e6e6",
    objectFit: "cover",
  },

  /* Blog Details */
  blogDetails: {
    padding: "10px 15px",
  },
  icons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#8e8e8e",
    transition: "color 0.2s ease",
  },
  blogTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  blogDescription: {
    fontSize: "14px",
    color: "#666",
  },

  /* Heart Blink Animation */
  "@keyframes heartBlink": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "50%": {
      transform: "scale(1.2)",
      opacity: 0.7,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
};

export default ViewBlogs;
