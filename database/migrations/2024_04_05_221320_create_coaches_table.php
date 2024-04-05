<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('coaches', function (Blueprint $table) {
            $table->id();
            $table->string('school_id');
            $table->string('name');
            $table->string('description');
            $table->boolean('is_available_monday');
            $table->boolean('is_available_tuesday');
            $table->boolean('is_available_wednesday');
            $table->boolean('is_available_thursday');
            $table->boolean('is_available_friday');
            $table->boolean('is_available_saturday');
            $table->time('monday_start_time');
            $table->time('monday_end_time');
            $table->time('tuesday_start_time');
            $table->time('tuesday_end_time');
            $table->time('wednesday_start_time');
            $table->time('wednesday_end_time');
            $table->time('thursday_start_time');
            $table->time('thursday_end_time');
            $table->time('friday_start_time');
            $table->time('friday_end_time');
            $table->time('saturday_start_time');
            $table->time('saturday_end_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coaches');
    }
};
