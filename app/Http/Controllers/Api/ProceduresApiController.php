<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Procedure;

class ProceduresApiController extends Controller
{

    public function getProcedures()
    {
        return Procedure::paginate();
    }

    public function getProcedure($id)
    {
        return Procedure::findOrFail($id);
    }
}
