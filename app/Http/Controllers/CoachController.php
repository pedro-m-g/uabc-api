<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoachRequest;
use App\Models\Coach;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CoachController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coaches = Coach::paginate();
        return Inertia::render('Coaches/Index', [
            'coaches' => $coaches
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Coaches/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCoachRequest $request)
    {
        $coachData = $request->validated();
        Coach::create($coachData);
        return Redirect::route('coaches.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $coach = Coach::findOrFail($id);
        return Inertia::render('Coaches/Show', [
            'coach' => $coach
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $coach = Coach::findOrFail($id);
        return Inertia::render('Coaches/Edit', [
            'coach' => $coach
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCoachRequest $request, string $id)
    {
        $coachData = $request->validated();
        $coach = Coach::findOrFail($id);
        $coach->fill($coachData);
        $coach->save();
        return Redirect::route('coaches.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $coach = Coach::findOrFail($id);
        $coach->delete();
        return Redirect::route('coaches.index');
    }
}
