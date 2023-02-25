<?php

namespace Database\Seeders;

use App\Classes\Common;
use App\Models\Product;
use App\Models\ProductDetail;
use App\Models\Type;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Product::truncate();
        ProductDetail::truncate();
        Schema::enableForeignKeyConstraints();

        $samples = array(
            array(
                'type' => 'smartphone',
                'brand' => 'apple',
                'model' => 'iphone SE',
                'capacity' => '2GB/16GB',
                'quantity' => '13',
            ),
            array(
                'type' => 'smartphone',
                'brand' => 'apple',
                'model' => 'iphone SE',
                'capacity' => '2GB/32GB',
                'quantity' => '30',
            ),
            array(
                'type' => 'smartphone',
                'brand' => 'apple',
                'model' => 'iphone SE',
                'capacity' => '2GB/64GB',
                'quantity' => '20',
            ),
            array(
                'type' => 'smartphone',
                'brand' => 'apple',
                'model' => 'iphone SE',
                'capacity' => '2GB/128GB',
                'quantity' => '16',
            ),
            array(
                'type' => 'smartphone',
                'brand' => 'apple',
                'model' => 'iphone SE (2020)',
                'capacity' => '3GB/64GB',
                'quantity' => '18',
            ),
        );
        foreach ($samples as $sample) {
            $type = Type::join('type_brands', 'type_brands.type_id', '=', 'types.id')
                ->join('brand_models', 'brand_models.type_brand_id', 'type_brands.id')
                ->where('types.slug', Str::lower(Common::replaceEmptySpace($sample['type'])))
                ->where('type_brands.slug', Str::lower(Common::replaceEmptySpace($sample['brand'])))
                ->where('brand_models.slug', Str::lower(Common::replaceEmptySpace($sample['model'])))
                ->select(['types.id as type_id', 'type_brands.id as type_brand_id', 'brand_models.id as brand_model_id'])
                ->first();

            if ($type) {
                $product = Product::create([
                    'type_id' => $type->type_id,
                    'type_brand_id' => $type->type_brand_id,
                    'brand_model_id' => $type->brand_model_id,
                ]);
                $product->details()->create([
                    'capacity' => $sample['capacity'],
                    'quantity' => $sample['quantity'],
                ]);
            }
        }
    }
}
