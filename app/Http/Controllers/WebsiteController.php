<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Website;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
	protected $directorio = "public/website";
	// protected $locales = ['es', 'en'];


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(String $seccion)
	{
		$params = [
			'title' => ucfirst($seccion) . " - Actualizar sección",
			'breadcrumb' => [
				[
					'title' => ucfirst($seccion),
					'route' => 'panel.website.edit',
					'params' => [
						'seccion' => $seccion
					],
					'active' => true,
				]
			],
			'data' => Website::find(1)
		];

		$view = 'panel.website.' . $seccion;
		return view($view, $params);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(String $seccion, Request $request)
	{
		$upd = Website::find(1);

		if ($request->hasFile('cover_popup')) {
			Helpers::deleteFileStorage('websites', 'cover_popup', 1);
			$cover_popup = Helpers::addFileStorage($request->file('cover_popup'), $this->directorio);
			$upd->cover_popup = $cover_popup;
			$upd->save();
		}

		if ($request->has('url_casa')) $upd->url_casa = $request->url_casa;
		if ($request->has('url_sala')) $upd->url_sala = $request->url_sala;
		if ($request->has('url_habitaciones')) $upd->url_habitaciones = $request->url_habitaciones;
		if ($request->has('desc_casa_es')) $upd->desc_casa_es = $request->desc_casa_es;
		if ($request->has('desc_casa_en')) $upd->desc_casa_en = $request->desc_casa_en;
		if ($request->has('desc_sala_es')) $upd->desc_sala_es = $request->desc_sala_es;
		if ($request->has('desc_sala_en')) $upd->desc_sala_en = $request->desc_sala_en;
		if ($request->has('desc_habitaciones_es')) $upd->desc_habitaciones_es = $request->desc_habitaciones_es;
		if ($request->has('desc_habitaciones_en')) $upd->desc_habitaciones_en = $request->desc_habitaciones_en;

		if ($request->has('title_popup')) $upd->title_popup = $request->title_popup;
		if ($request->has('desc_popup')) $upd->desc_popup = $request->desc_popup;
		if ($request->has('link_popup')) $upd->link_popup = $request->link_popup;


		$upd->save();
		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}
}
