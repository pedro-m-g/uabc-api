<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

class CreateAccount extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'account:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a new user account';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->ask('Nombre completo: ');
        $email = $this->ask('Correo electrónico: ');
        $password = $this->secret('Contraseña: ');
        $passwordConfirmation = $this->secret('Confirma tu contraseña: ');

        $accountData = [
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $passwordConfirmation
        ];

        $validator = Validator::make($accountData, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($validator->fails()) {
            $this->error($validator->errors()->first());
            return;
        }

        $user = User::create($accountData);
        event(new Registered($user));

        $this->info('Account created successfully');
    }
}
