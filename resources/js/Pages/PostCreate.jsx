import React from "react";
import { useForm, Link } from "@inertiajs/react";

export default function PostCreate() {
    const { data, setData, post, errors } = useForm({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("posts.store"));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-6 py-10">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">
                        Create a New Post
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Field */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                placeholder="Enter the title"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                            )}
                        </div>

                        {/* Content Field */}
                        <div>
                            <label
                                htmlFor="content"
                                className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={data.content}
                                onChange={(e) => setData("content", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                placeholder="Enter the content"
                                rows="6"
                            ></textarea>
                            {errors.content && (
                                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
                            >
                                Create Post
                            </button>
                            <Link
                                href={route("welcome")}
                                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700"
                            >
                                Back to Posts
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
