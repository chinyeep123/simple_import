<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(TypesTableSeeder::class);
        $this->call(TypeBrandsTableSeeder::class);
        $this->call(BrandModelsTableSeeder::class);
        $this->call(ModelCapacitiesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
    }
}
