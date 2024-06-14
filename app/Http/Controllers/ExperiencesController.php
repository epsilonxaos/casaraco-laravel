<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Experiences;
use Illuminate\Http\Request;

class ExperiencesController extends Controller
{
	protected $directorio = "public/experiences";
	protected $locales = ['es', 'en'];

	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return view('panel.experiences.index', [
			"title" => "Experiencias",
			"breadcrumb" => [
				[
					'title' => 'Experiencias',
					'active' => true,
				],

			]
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return view('panel.experiences.create', [
			"title" => "Nueva experiencias",
			"breadcrumb" => [
				[
					'title' => "Experiencias",
					'route' => 'panel.experiences.index',
					'active' => false
				],
				[
					'title' => 'Nuevo',
					'active' => true,
				]
			]
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{

		$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
		$portada = Helpers::addFileStorage($request->file('cover'), $this->directorio);
		$p = Experiences::create([
			'cover' => $cover,
			'status' => 1
		]);
		$p = Experiences::create([
			'portada' => $portada,
			'status' => 1
		]);

		foreach ($this->locales as $locale) {
			$p->translateOrNew($locale)->title = $request->title[$locale];
			$p->translateOrNew($locale)->content = $request->content[$locale];
		}

		$p->save();

		return redirect()->back()->with('success', 'El registro se ha creado correctamente');
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Experiences $experiences)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{
		return view('panel.experiences.edit', [
			'title' => 'Editar experiencias',
			'breadcrumb' => [
				[
					'title' => 'Experiencias',
					'route' => 'panel.experiences.index',
					'active' => false,
				],
				[
					'title' => 'Editar',
					'route' => 'panel.experiences.edit',
					'params' => [
						'id' => $id
					],
					'active' => true
				]
			],
			'data' => Experiences::find($id)
		]);
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Int $id, Request $request)
	{
		$upd = Experiences::find($id);

		if ($request->hasFile('cover')) {
			Helpers::deleteFileStorage('experiences', 'cover', $id);
			$cover = Helpers::addFileStorage($request->file('cover'), $this->directorio);
			$upd->cover = $cover;
			$upd->save();
		}
		if ($request->hasFile('portada')) {
			Helpers::deleteFileStorage('experiences', 'portada', $id);
			$portada = Helpers::addFileStorage($request->file('portada'), $this->directorio);
			$upd->portada = $portada;
			$upd->save();
		}

		foreach ($this->locales as $locale) {
			$upd->translateOrNew($locale)->title = $request->title[$locale];
			$upd->translateOrNew($locale)->content = $request->content[$locale];
		}

		$upd->save();

		return redirect()->back()->with('success', 'El registro se ha actualizado correctamente');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{
		Helpers::deleteFileStorage('experiences', 'cover', $id);
		Experiences::where('id', $id)->delete();

		return redirect()->back()->with('success', 'El registro se ha eliminado correctamente');
	}

	/**
	 * Change status to show - hidden
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function changeStatus(Request $request)
	{
		Helpers::changeStatus('experiences', $request->id, $request->status);
		return 'true';
	}
}
