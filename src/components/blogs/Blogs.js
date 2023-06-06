import React from "react";
import * as images from "../../assets/blogs_image";
import Box from "./Box";
import hire_me_bg from "../../assets/Hire_me_bg.webp";
const blogs = [
    {
        src: images.blog1,
        title: "Why Lead Generation is Key for Business Growth",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date: "Sept. 12, 2019",
        author: "Admin",
        comments: 3,
    },
    {
        src: images.blog2,
        title: "Why Lead Generation is Key for Business Growth",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date: "Sept. 12, 2019",
        author: "Admin",
        comments: 3,
    },
    {
        src: images.blog3,
        title: "Why Lead Generation is Key for Business Growth",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        date: "Sept. 12, 2019",
        author: "Admin",
        comments: 3,
    },
];
const Blogs = () => {
    return (
        < div id="blogs" className="sect" >
            <div className="blogs-title">Our Blog</div>
            <div className="blogs-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</div>
            <div className="container">
                <div className="blogs-wrapper">
                    {blogs.map((blog, index) => {
                        return (
                            <div className="blogs-item" >
                                <Box key={index}
                                    src={blog.src}
                                    title={blog.title}
                                    author={blog.author}
                                    desc={blog.desc}
                                    date={blog.date}
                                    comments={blog.comments} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="hireme">
                <img src={hire_me_bg} style={{ "margin-top": "100px", height: "400px", width: "100%" }} ></img>
                <div className="hireme-title">I'm <span>Available</span> for freelancing</div>
                <div className="hireme-content">A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
                <button className="hireme-btn">Hire me</button>
            </div>
        </div >
    );
}
export default Blogs