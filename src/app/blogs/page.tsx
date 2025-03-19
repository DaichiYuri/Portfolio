'use client'
import Dummy from '../../../components/Dummy'
import { motion } from "framer-motion";
import Image from "next/image";



export default function Blog() {
    const blogs = [
        {
            title: "Curry's Paradox",
            genre: "Maths",
            image: "/blogs/currys_paradox.png",
            brief: "Deep dive into microservices, APIs, and scalable backend architecture.",
            link: "/blog/mastering-backend",
        }
      ];
    return (
        <Dummy comp={
        <div className="text-white min-h-screen lg:p-10 px-6 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Recent Blogs</h1>

        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {blogs.map((blog, index) => (
            <motion.a
                key={index}
                href={blog.link}
                className="relative block overflow-hidden rounded-xl shadow-lg bg-gray-800 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Blog Image */}
                <div className="relative w-full h-48">
                <Image
                    src={"/Portfolio"+blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
                </div>

                {/* Blog Content */}
                <div className="p-5">
                <span className="text-sm font-semibold text-blue-400">{blog.genre}</span>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-500 transition-all duration-500">
                    {blog.brief}
                </p>
                </div>

                {/* Dimming Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.a>
            ))}
        </motion.div>
        </div>
        }/>
    );
  }