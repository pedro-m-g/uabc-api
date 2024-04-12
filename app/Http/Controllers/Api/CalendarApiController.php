<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CalendarActivity;

class CalendarApiController extends Controller
{

    public function getCalendar()
    {
        return CalendarActivity::all();
    }

    public function getActivity($id)
    {
        return CalendarActivity::findOrFail($id);
    }
}
