<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    protected $fillable = ['name', 'price','description' , 'ingredients','image' , 'category_id'];
    protected $hidden = ['id', 'created_at', 'updated_at', 'category_id'];
}
