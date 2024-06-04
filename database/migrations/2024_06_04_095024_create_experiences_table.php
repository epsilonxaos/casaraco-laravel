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
		Schema::create('experiences', function (Blueprint $table) {
			$table->increments('id');
			$table->string('cover');
			$table->tinyInteger('status')->default(1);
			$table->timestamps();
		});

		Schema::create('experience_translations', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('experience_id')->unsigned();
			$table->string('locale')->index();

			$table->string('title');
			$table->longText('content')->nullable();

			$table->unique(['experience_id', 'locale']);
			$table->foreign('experience_id')->references('id')->on('experiences')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('experience_translations');
		Schema::dropIfExists('experiences');
	}
};
