<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCalendarActivityRequest extends FormRequest
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
            'title' => 'required|max:255',
            'start_date' => 'required|date',
            'start_time' => 'required_unless:is_all_day,true|date_format:H:i:s',
            'end_date' => 'required|date',
            'end_time' => 'required_unless:is_all_day,true|date_format:H:i:s',
            'is_all_day' => 'required|boolean'
        ];
    }
}
