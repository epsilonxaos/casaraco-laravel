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
		Schema::create('websites', function (Blueprint $table) {
			$table->id();

			$table->string("url_casa")->nullable();
			$table->string("url_sala")->nullable();
			$table->string("url_habitaciones")->nullable();
			$table->longText("desc_casa_es")->nullable();
			$table->longText("desc_casa_en")->nullable();
			$table->longText("desc_sala_es")->nullable();
			$table->longText("desc_sala_en")->nullable();
			$table->longText("desc_habitaciones_es")->nullable();
			$table->longText("desc_habitaciones_en")->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('websites');
	}
};
