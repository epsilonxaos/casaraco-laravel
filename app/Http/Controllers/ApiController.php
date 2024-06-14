<?php

namespace App\Http\Controllers;

use App\Models\Experiences;
use App\Models\Website;
use Illuminate\Http\Request;

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
}
