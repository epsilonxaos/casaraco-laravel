<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Website extends Model
{
	use HasFactory;

	protected $primaryKey = "id";
	protected $table = 'websites';
	protected $fillable = [
		"url_casa",
		"url_sala",
		"url_habitaciones",
		"desc_casa_es",
		"desc_casa_en",
		"desc_sala_es",
		"desc_sala_en",
		"desc_habitaciones_es",
		"desc_habitaciones_en",

		"cover_popup",
		"movil_popup",
		"title_popup",
		"desc_popup",
		"link_popup",
	];
}
