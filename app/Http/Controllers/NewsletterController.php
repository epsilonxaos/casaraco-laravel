<?php

namespace App\Http\Controllers;

use App\Exports\NewsletterExport;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class NewsletterController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return view('panel.newsletter.index', [
			"title" => "Newsletter",
			"breadcrumb" => [
				[
					'title' => 'Registros',
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
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Newsletter $newsletter)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Newsletter $newsletter)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Newsletter $newsletter)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Newsletter $newsletter)
	{
		//
	}

	public function export()
	{
		return Excel::download(new NewsletterExport, 'newsletter.xlsx');
	}
}
