<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ComandosController;
use App\Http\Controllers\ExperiencesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/artisan', [ComandosController::class, 'executeComands']);
Route::view('/', 'layouts.app')->where('path', '.*');
Route::view('/casa-raco', 'layouts.app')->where('path', '.*');
Route::view('/promociones', 'layouts.app')->where('path', '.*');
Route::view('/habitaciones', 'layouts.app')->where('path', '.*');
Route::view('/experiencias', 'layouts.app')->where('path', '.*');
Route::view('/experiencias/{id}', 'layouts.app')->where('path', '.*');
Route::view('/gastronomia', 'layouts.app')->where('path', '.*');
Route::view('/sala-de-juntas', 'layouts.app')->where('path', '.*');
Route::view('/parras-coahuila', 'layouts.app')->where('path', '.*');

Route::get('/dashboard', function () {
	return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('guest')->prefix('/admin')->group(function () {
	Route::get('/', [AdminController::class, 'iniciarSesionView'])->name('panel.access');
	Route::post('/login', [AdminController::class, 'login'])->name('panel.login');
	Route::get('/register', [AdminController::class, 'registrarAdmin'])->name('panel.register');
});

Route::middleware(['auth:admin', 'verified'])->prefix('/admin')->group(function () {
	Route::post('/logout', [AdminController::class, 'logout'])->name('panel.logout');
	Route::get('/dashboard', [AdminController::class, 'dashboardAdmin'])->name('panel.dashboard');

	//Roles
	Route::prefix('/roles')->group(function () {
		Route::get('/', [RoleController::class, 'index'])->name('panel.roles.index');
		Route::get('/nuevo', [RoleController::class, 'create'])->name('panel.roles.create');
		Route::get('/editar/{id}', [RoleController::class, 'edit'])->name('panel.roles.edit');
		Route::post('/store', [RoleController::class, 'store'])->name('panel.roles.store');
		Route::put('/update/{id}', [RoleController::class, 'update'])->name('panel.roles.update');
		Route::delete('/destroy/{id}', [RoleController::class, 'destroy'])->name('panel.roles.destroy');
	});

	Route::prefix('/perfil')->group(function () {
		Route::get('/', [AdminController::class, 'editProfile'])->name('panel.profile.edit');
		Route::patch('/update', [AdminController::class, 'updateProfile'])->name('panel.profile.update');
		Route::put('/update/password', [AdminController::class, 'updateProfilePassword'])->name('panel.profile.update.password');
		Route::delete('/destroy', [AdminController::class, 'destroyProfile'])->name('panel.profile.destroy');
	});

	Route::prefix('/usuarios')->group(function () {
		Route::get('/', [AdminController::class, 'index'])->name('panel.usuarios.index');
		Route::get('/create', [AdminController::class, 'create'])->name('panel.usuarios.create');
		Route::post('/store', [AdminController::class, 'store'])->name('panel.usuarios.store');
		Route::get('/edit/{id?}', [AdminController::class, 'editProfileId'])->name('panel.usuarios.edit');
		Route::patch('/update/{id?}', [AdminController::class, 'updateProfile'])->name('panel.usuarios.update');
		Route::put('/update/{id?}/password', [AdminController::class, 'updateProfilePassword'])->name('panel.usuarios.update.password');
		Route::delete('/destroy/{id?}', [AdminController::class, 'destroyProfile'])->name('panel.usuarios.destroy');
	});

	Route::prefix('/experiences')->group(function () {
		Route::get('/', [ExperiencesController::class, 'index'])->name('panel.experiences.index');
		Route::get('/create', [ExperiencesController::class, 'create'])->name('panel.experiences.create');
		Route::post('/store', [ExperiencesController::class, 'store'])->name('panel.experiences.store');
		Route::get('/edit/{id?}', [ExperiencesController::class, 'edit'])->name('panel.experiences.edit');
		Route::patch('/update/{id?}', [ExperiencesController::class, 'update'])->name('panel.experiences.update');
		Route::delete('/destroy/{id?}', [ExperiencesController::class, 'destroy'])->name('panel.experiences.destroy');
		Route::post('/change/status', [ExperiencesController::class, 'changeStatus'])->name('panel.experiences.changeStatus');
	});
});

require __DIR__ . '/auth.php';
