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
        'emitida_en', 
        'prescribe_el',
        'user_id'
    ];
    protected $casts = [
        'skills' => 'array',
        'emitida_en' => 'date:m-d-Y',
    ];
}
