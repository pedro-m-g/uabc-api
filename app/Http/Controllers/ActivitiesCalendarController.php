<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCalendarActivityRequest;
use App\Models\CalendarActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ActivitiesCalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $activities = CalendarActivity::all();
        return Inertia::render('Calendar/Index', [
            'activities' => $activities
        ]);
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
    public function store(StoreCalendarActivityRequest $request)
    {
        $activityData = $request->validated();
        CalendarActivity::create($activityData);
        return Redirect::route('calendar.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $activity = CalendarActivity::findOrFail($id);
        return Inertia::render('Calendar/Show', [
            'activity' => $activity
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $activity = CalendarActivity::findOrFail($id);
        return Inertia::render('Calendar/Edit', [
            'activity' => $activity
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCalendarActivityRequest $request, string $id)
    {
        $activityData = $request->validated();
        $activity = CalendarActivity::findOrFail($id);
        $activity->fill($activityData);
        $activity->save();
        return Redirect::route('calendar.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $activity = CalendarActivity::findOrFail($id);
        $activity->delete();
        return Redirect::route('calendar.index');
    }
}
