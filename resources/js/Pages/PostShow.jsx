import { Link } from "@inertiajs/react";

export default function PostShow({ post }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="mb-4">{post.content}</p>
            <small>Posted by User {post.user_id}</small>
            <br />
            <Link
                href={route('welcome')} // Change this to your home route
                className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded"
            >
                Back to Posts
            </Link>
        </div>
    );
}
