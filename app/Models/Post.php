<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'user_id', // Include user_id for associating posts with users
    ];

    /**
     * Get the user who owns the post.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
