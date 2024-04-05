<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id',
        'name',
        'description',
        'is_available_monday',
        'is_available_tuesday',
        'is_available_wednesday',
        'is_available_thursday',
        'is_available_friday',
        'is_available_saturday',
        'monday_start_time',
        'monday_end_time',
        'tuesday_start_time',
        'tuesday_end_time',
        'wednesday_start_time',
        'wednesday_end_time',
        'thursday_start_time',
        'thursday_end_time',
        'friday_start_time',
        'friday_end_time',
        'saturday_start_time',
        'saturday_end_time'
    ];
}
