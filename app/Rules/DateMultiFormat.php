<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class DateMultiFormat implements ValidationRule
{

    private $dateFormats;

    public function __construct($dateFormats)
    {
        $this->dateFormats = $dateFormats;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        foreach ($this->dateFormats as $format) {
            $parsed = date_parse_from_format($format, $value);

            if ($parsed['error_count'] === 0 && $parsed['warning_count'] === 0) {
                return;
            }
        }
        $fail(__('validation.date_multi_format', [
            'attribute' => $attribute,
            'formats' => implode(',', $this->dateFormats)
        ]));
    }
}
