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
        'emitida_en2', 
        'prescribe_el',
        'user_id'
    ];
    protected $casts = [
        'skills' => 'array',
        'emitida_en' => 'date:m-d-Y',
        'emitida_en2' => 'date:Y-m-d H:i:s',
    ];
    protected function serializeDate($date)
{
    return $date->format('Y-m-d H:i:s');
}
}
