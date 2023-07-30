<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name'=>'Javi',
            'email'=>'javirodriguezbnk@gmail.com',
            'password'=>bcrypt('28febrero'),
        ]);
    }
}
