import { useState } from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, posts }) {
    const [selectedPost, setSelectedPost] = useState(null); // State to store the selected post

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <svg
                                    className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                    viewBox="0 0 62 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* SVG content */}
                                </svg>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <>
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href={route('post.create')}
                                        className="mb-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                    >
                                        Create New Post
                                    </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
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
                                {/* Conditional rendering based on selectedPost */}
                                {selectedPost ? (
                                    <div
                                        style={{
                                            marginBottom: "20px",
                                            border: "1px solid #ccc",
                                            padding: "10px",
                                        }}
                                    >
                                        <h2>{selectedPost.title}</h2>
                                        <p>{selectedPost.content}</p>
                                        <small>
                                            Posted by User {selectedPost.user_id}
                                        </small>
                                        <button
                                            onClick={() => setSelectedPost(null)}
                                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            Back to Posts
                                        </button>
                                    </div>
                                ) : posts.length > 0 ? (
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
                                                <Link
                                                    href={route('posts.show', { post: post.id })}
                                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded inline-block"
                                                >
                                                    View Details
                                                </Link>
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
