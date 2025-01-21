import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function Welcome({ auth, posts }) {
    const [selectedPost, setSelectedPost] = useState(null);

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
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                {/* Header and Navigation */}
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route("dashboard")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={route("post.create")}
                                            className="mb-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                        >
                                            Create New Post
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <h1>Welcome to the Blog</h1>
                                {posts.length > 0 ? (
                                    <div>
                                        {posts.map((post) => (
                                            <div
                                                key={post.id}
                                                style={{
                                                    marginBottom: "20px",
                                                    border: "1px solid #ccc",
                                                    padding: "10px",
                                                }}
                                            >
                                                <h2>{post.title}</h2>
                                                <p>{post.content}</p>
                                                <small>
                                                    Posted by User {post.user_id}
                                                </small>
                                                <div className="mt-2">
                                                    {auth.user?.id === post.user_id && (
                                                        <button
                                                            onClick={() => handleDelete(post.id)}
                                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                                        >
                                                            Delete
                                                        </button>
                                                    )}
                                                    <Link
                                                        href={route("posts.show", {
                                                            post: post.id,
                                                        })}
                                                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                                    >
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No posts available yet.</p>
                                )}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Made by Martin Holtsmeier
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
