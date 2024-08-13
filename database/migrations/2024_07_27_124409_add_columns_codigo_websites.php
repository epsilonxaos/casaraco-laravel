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
		Schema::table('websites', function (Blueprint $table) {
			$table->string("cover_popup")->nullable();
			$table->string("movil_popup")->nullable();
			$table->string("title_popup")->nullable();
			$table->longText("desc_popup")->nullable();
			$table->string("link_popup")->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::table('websites', function (Blueprint $table) {
			$table->dropColumn("cover_popup");
			$table->dropColumn("movil_popup");
			$table->dropColumn("title_popup");
			$table->dropColumn("desc_popup");
			$table->dropColumn("link_popup");
		});
	}
};
