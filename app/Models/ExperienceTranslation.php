<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExperienceTranslation extends Model
{
	public $timestamps = false;
	protected $fillable = ['title', 'content'];
}
