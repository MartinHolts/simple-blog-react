import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function PostCreate() {
    const { data, setData, post, errors } = useForm({
        title: '',
        content: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full border rounded p-2"
                    ></textarea>
                    {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}
