import { Link } from "@inertiajs/react";

export default function PostShow({ post }) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-6 py-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                        {post.title}
                    </h1>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{post.content}</p>
                    <small className="block text-sm text-gray-500 dark:text-gray-400">
                        Posted by User {post.user_id}
                    </small>
                </div>
                <div className="mt-6">
                    <Link
                        href={route("welcome")}
                        className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700"
                    >
                        Back to Posts
                    </Link>
                </div>
            </div>
        </div>
    );
}
