<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCoachRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'school_id' => 'required|max:255',
            'name' => 'required|max:255',
            'description' => 'required|max:255',
            'is_available_monday' => 'required|boolean',
            'is_available_tuesday' => 'required|boolean',
            'is_available_wednesday' => 'required|boolean',
            'is_available_thursday' => 'required|boolean',
            'is_available_friday' => 'required|boolean',
            'is_available_saturday' => 'required|boolean',
            'monday_start_time' => 'required_if_accepted:is_available_monday|date_format:H:i',
            'monday_end_time' => 'required_if_accepted:is_available_monday|date_format:H:i',
            'tuesday_start_time' => 'required_if_accepted:is_available_tuesday|date_format:H:i',
            'tuesday_end_time' => 'required_if_accepted:is_available_tuesday|date_format:H:i',
            'wednesday_start_time' => 'required_if_accepted:is_available_wednesday|date_format:H:i',
            'wednesday_end_time' => 'required_if_accepted:is_available_wednesday|date_format:H:i',
            'thursday_start_time' => 'required_if_accepted:is_available_thursday|date_format:H:i',
            'thursday_end_time' => 'required_if_accepted:is_available_thursday|date_format:H:i',
            'friday_start_time' => 'required_if_accepted:is_available_friday|date_format:H:i',
            'friday_end_time' => 'required_if_accepted:is_available_friday|date_format:H:i',
            'saturday_start_time' => 'required_if_accepted:is_available_saturday|date_format:H:i',
            'saturday_end_time' => 'required_if_accepted:is_available_saturday|date_format:H:i'
        ];
    }
}
