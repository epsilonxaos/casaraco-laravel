<?php

namespace Database\Seeders;

use App\Models\Website;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WebsiteSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
		DB::table('websites')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS = 1;');

		$web = Website::create([
			'url_casa' => 'https://wa.me/+18553409046',
			'url_sala' => 'https://wa.me/+18553409046',
			'url_habitaciones' => 'https://hotels.cloudbeds.com/es/reservation/aEkhze?currency=mxn',
			'desc_casa_es' => "Necesitas <span className=\"font-bold\">la casa completa da clic aquí.</span> <br> Arma un paquete de estadía a la medida de tus necesidades.",
			'desc_casa_en' => 'Let\'s create a stay experience tailored for your needs, even renting the whole house for yourself is possible.',
			'desc_sala_es' => "Ahorra en grupos empresariales <span className=\"font-semibold\">hasta 50% de descuento</span> de sala de junta empresariales. <br> Permítenos armar un presupuesto a tu medida para organizar tu próxima reunión de trabajo en nuestra cómoda sala de juntas con capacidad de hasta 16 personas.",
			'desc_sala_en' => '<p>Save up to 50% off in our boardroom.</p><p><br></p><p>Plan your corporate stay with us and let us take care of everything. Concentrate your work team in our comfortable meeting room with capacity for up to 16 people.</p>',
			'desc_habitaciones_es' => "Recibe un <span className=\"font-bold\">15% en reservaciones</span> de 3 noches o más.<br> Recibe un descuento especial al reservar directamente con nosotros.",
			'desc_habitaciones_en' => '<p>Make your reservation here and get a 15% discount in a reservation for 3 or more nights.<br></p>',
		]);

		$web->save();
	}
}
