<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Coach;

class CoachingApiController extends Controller
{

    public function getCoaches()
    {
        return Coach::paginate();
    }

    public function getCoach($id)
    {
        return Coach::findOrFail($id);
    }
}
