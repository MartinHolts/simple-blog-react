<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory; // Add this trait to enable factory usage

    protected $fillable = [
        'title',
        'content',
        'user_id', // Include user_id if you're associating posts with users
    ];
}
