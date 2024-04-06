<?php

namespace App\Http\Requests;

use App\Rules\DateMultiFormat;
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
            'monday_start_time' => [
                'required_if_accepted:is_available_monday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'monday_end_time' => [
                'required_if_accepted:is_available_monday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'tuesday_start_time' => [
                'required_if_accepted:is_available_tuesday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'tuesday_end_time' => [
                'required_if_accepted:is_available_tuesday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'wednesday_start_time' => [
                'required_if_accepted:is_available_wednesday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'wednesday_end_time' => [
                'required_if_accepted:is_available_wednesday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'thursday_start_time' => [
                'required_if_accepted:is_available_thursday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'thursday_end_time' => [
                'required_if_accepted:is_available_thursday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'friday_start_time' => [
                'required_if_accepted:is_available_friday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'friday_end_time' => [
                'required_if_accepted:is_available_friday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'saturday_start_time' => [
                'required_if_accepted:is_available_saturday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ],
            'saturday_end_time' => [
                'required_if_accepted:is_available_saturday',
                new DateMultiFormat(['H:i', 'H:i:s'])
            ]
        ];
    }
}
