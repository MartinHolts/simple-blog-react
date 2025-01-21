<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        // Fetch posts (example query)
        $posts = Post::all(); // Or any query that returns a collection
    
        // Convert to an array
        return $posts->toArray();
    }
    
    public function show(Post $post)
    {
        return Inertia::render('PostShow', [
            'post' => $post,
        ]);
    }
    public function create()
    {
        return Inertia::render('PostCreate');
    }

    // Store a new post
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $request->user()->posts()->create($validated);

        return redirect()->route('welcome')->with('success', 'Post created successfully!');
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        // Check if the authenticated user is the creator
        if ($post->user_id !== auth()->id()) {
            return redirect()->route('dashboard')->with('error', 'Unauthorized action.');
        }

        $post->delete();

        return redirect()->route('dashboard')->with('message', 'Post deleted successfully.');
    }
}
