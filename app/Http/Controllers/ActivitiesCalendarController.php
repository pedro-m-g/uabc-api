<?php

namespace App\Http\Controllers;

use App\Models\CalendarActivity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivitiesCalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Calendar/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $startDate = $request->input(
            'startDate',
            date('Y-m-d H:i:s')
        );
        $endDate = $request->input(
            'endDate',
            date('Y-m-d H:i:s')
        );
        $isAllDay = $request->input('isAllDay', true);

        $activity = CalendarActivity::make([
            'title' => '',
            'start_date' => date('Y-m-d', strtotime($startDate)),
            'start_time' => date('H:i:s', strtotime($startDate)),
            'end_date' => date('Y-m-d', strtotime($endDate)),
            'end_time' => date('H:i:s', strtotime($endDate)),
            'is_all_day' => $isAllDay
        ]);

        return Inertia::render('Calendar/Create', [
            'activity' => $activity
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
