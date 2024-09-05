<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $categories = Category::all();

        // Create products and associate them with categories
        foreach ($categories as $category) {
            Product::factory()->count(5)->create([
                'category_id' => $category->id,  // Assign each product to a category
            ]);
        }
    }
}
