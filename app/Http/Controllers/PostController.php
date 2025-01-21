<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        // Fetch posts (example query)
        $posts = Post::all(); // Or any query that returns a collection
    
        // Convert to an array
        return $posts->toArray();
    }
    
    
    
}
