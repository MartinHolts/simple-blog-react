import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function Welcome({ auth, posts }) {
    const [editingPost, setEditingPost] = useState(null);
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [errors, setErrors] = useState({});

    const handleEditClick = (post) => {
        setEditingPost(post.id);
        setFormData({ title: post.title, content: post.content });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        router.put(
            route("posts.update", { post: editingPost }),
            formData,
            {
                onSuccess: () => {
                    alert("Post updated successfully!");
                    setEditingPost(null);
                },
                onError: (errorBag) => setErrors(errorBag),
            }
        );
    };

    const handleDelete = (postId) => {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(route("posts.destroy", { post: postId }), {
                onSuccess: () => alert("Post deleted successfully!"),
            });
        }
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="container mx-auto px-6 py-10">
                    {/* Header */}
                    <header className="flex items-center justify-between pb-10 border-b border-gray-300 dark:border-gray-700">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                            Welcome to the Blog
                        </h1>
                        <nav>
                            {auth.user ? (
                                <div className="flex space-x-4">
                                    <Link
                                        href={route("dashboard")}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href={route("post.create")}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                                    >
                                        Create New Post
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex space-x-4">
                                    <Link
                                        href={route("login")}
                                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </nav>
                    </header>

                    {/* Main Content */}
                    <main className="mt-10">
                        {posts.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                    >
                                        {editingPost === post.id ? (
                                            <form onSubmit={handleEditSubmit} className="space-y-4">
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={formData.title}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                title: e.target.value,
                                                            })
                                                        }
                                                        className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                                        placeholder="Title"
                                                    />
                                                    {errors.title && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.title}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <textarea
                                                        value={formData.content}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                content: e.target.value,
                                                            })
                                                        }
                                                        className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                                                        placeholder="Content"
                                                    ></textarea>
                                                    {errors.content && (
                                                        <p className="text-red-500 text-sm mt-1">
                                                            {errors.content}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex space-x-4">
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditingPost(null)}
                                                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <>
                                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                    {post.title}
                                                </h2>
                                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                                    {post.content}
                                                </p>
                                                <small className="block mt-2 text-gray-500 dark:text-gray-400">
                                                    Posted by User {post.user_id}
                                                </small>
                                                <div className="mt-4 flex space-x-4">
                                                    {auth.user?.id === post.user_id && (
                                                        <>
                                                            <button
                                                                onClick={() => handleEditClick(post)}
                                                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(post.id)}
                                                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                                                            >
                                                                Delete
                                                            </button>
                                                        </>
                                                    )}
                                                    <Link
                                                        href={route("posts.show", {
                                                            post: post.id,
                                                        })}
                                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 dark:text-gray-400">
                                No posts available yet.
                            </p>
                        )}
                    </main>

                    <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
                        Made by Martin Holtsmeier
                    </footer>
                </div>
            </div>
        </>
    );
}
