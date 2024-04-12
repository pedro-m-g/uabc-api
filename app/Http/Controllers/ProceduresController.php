<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProcedureRequest;
use App\Models\Procedure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProceduresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $procedures = Procedure::paginate();
        return Inertia::render('Procedures/Index', [
            'procedures' => $procedures
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Procedures/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProcedureRequest $request)
    {
        $procedureData = $request->validated();
        Procedure::create($procedureData);
        return Redirect::route('procedures.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $procedure = Procedure::findOrFail($id);
        return Inertia::render('Procedures/Show', [
            'procedure' => $procedure
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $procedure = Procedure::findOrFail($id);
        return Inertia::render('Procedures/Edit', [
            'procedure' => $procedure
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProcedureRequest $request, string $id)
    {
        $procedureData = $request->validated();
        $procedure = Procedure::findOrFail($id);
        $procedure->fill($procedureData);
        $procedure->save();
        return Redirect::route('procedures.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $procedure = Procedure::findOrFail($id);
        $procedure->delete();
        return Redirect::route('procedures.index');
    }
}
