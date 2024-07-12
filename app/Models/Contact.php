<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'description',
        'avatar',
        'visibility',
        'detallename',
        'skills',
        'user_id'
    ];
    protected $casts = [
        'skills' => 'array',
    ];
}
