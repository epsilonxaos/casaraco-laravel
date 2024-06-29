<?php

namespace App\Http\Controllers;

use App\Models\Experiences;
use App\Models\Newsletter;
use App\Models\Website;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function getLastExperiences()
	{
		$data = Experiences::where('status', 1)
			->orderBy('created_at', 'desc')
			->take(3)
			->get();

		return response($data->select(['cover']), 200);
	}

	public function getAllExperiencies()
	{
		$data = Experiences::where('status', 1)->get();

		return response($data, 200);
	}

	public function getExperiencies2(Int $id)
	{
		$data = Experiences::find($id);

		return response($data, 200);
	}

	public function getExperiencies(Request $request)
	{
		$data = Experiences::find($request->id);

		return response($data, 200);
	}

	public function getWebsite()
	{
		$data = Website::find(1);

		return response($data, 200);
	}

	public function addNewsletter(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'email' => 'required|email|unique:newsletters|max:255',
		], [
			'email.required' => 'El email es obligatorio.',
			'email.email' => 'El email debe ser valido.',
			'email.unique' => 'El email ya está registrado.',
			'email.max' => 'El email no puede tener más de :max caracteres.',
		]);


		if ($validator->fails()) {
			return response()->json([
				'errors' => $validator->errors()
			], 422);
		}

		Newsletter::create([
			"email" => $request->email
		]);

		return response('ok', 200);
	}
}
