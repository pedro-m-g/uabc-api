<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalendarActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'start_date',
        'start_time',
        'end_date',
        'end_time',
        'is_all_day'
    ];
}
