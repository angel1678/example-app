<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

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
//        'emitida_en' => 'date:m-d-Y',
        'emitida_en' => 'datetime:Y-m-d', // Formato para que se vea bien en Safari        
        //'emitida_en2' => 'date:Y-m-d H:i:s',
        'emitida_en2' => 'datetime:Y-m-d', // Formato para que se vea bien en Safari    
    ];



    //protected $dates = ['emitida_en'];
    //protected $casts = [
    //    'emitida_en' => 'datetime:Y-m-d', // Formato para que se vea bien en Safari
    //];
    
    public function getEmitidaEnAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d');
    }
    protected function serializeDate($date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
