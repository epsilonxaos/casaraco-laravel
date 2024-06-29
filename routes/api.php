<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/experiences/last', [ApiController::class, 'getLastExperiences']);
Route::get('/experience/{id}', [ApiController::class, 'getExperiencies2']);
Route::get('/experiences', [ApiController::class, 'getAllExperiencies']);
Route::post('/newsletter/add', [ApiController::class, 'addNewsletter']);
Route::get('/website', [ApiController::class, 'getWebsite']);
