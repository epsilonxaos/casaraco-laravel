@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto pt-6 px-1">

        <div class="max-w-7xl mx-auto">
            {{-- @can(PermissionKey::Socios['permissions']['update']['name']) --}}
            <form action="{{ route('panel.website.update', ['seccion' => request('seccion')]) }}"
                enctype="multipart/form-data" class="form-submit-alert-wait" method="POST">
                @csrf
                @method('PUT')
                {{-- @elsecan
                    <form> --}}
                {{-- @endcan --}}

                {{-- @canany([PermissionKey::Socios['permissions']['edit']['name'], PermissionKey::Socios['permissions']['update']['name']]) --}}
                <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
                    <button type="submit"
                        class="px-2 py-1 bg-orange-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                        <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M14 4l0 4l-6 0l0 -4"></path>
                        </svg>
                        Actualizar
                    </button>
                </div>

                <div class="w-full">
                    <div class=" mb-6">
                        <h2 class="mb-2 font-semibold text-gray-900 text-base">Sección</h2>

                        <div class="mb-3">
                            <label for="cover_popup"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                    class="text-red-800">*</span> Imagen de
                                fondo</label>
                            <input type="file" name="cover_popup" class="dropify" data-height="200"
                                data-max-file-size="1M" data-allowed-file-extensions="jpg jpeg png webp"
                                data-default-file="{{ asset($data->cover_popup) }}" />
                            <small>Las medidas recomendadas son 700 x 900 px, solo se aceptan .jpg, .jpeg, .webp y .png
                                con un maximo de peso de 1MB.</small>
                        </div>

                        <div class="mb-3">
                            <label for="title_popup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Titulo</label>
                            <input id="title_popup" name="title_popup" value="{{ $data->title_popup }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-3">
                            <small class="pb-2 block">
                                Recomendamos siempre que al copiar y pegar información desde algún sitio o
                                archivo eliminar el formato de los textos para un óptimo funcionamiento, esto se
                                puede realizar desde el mismo editor de texto presionando el siguiente botón
                                <img src="{{ asset('img/panel/clear-format.png') }}" class="inline" alt="Clear format">
                            </small>
                            <div class="mb-3">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    for="desc_popup">Descripción</label>
                                <textarea name="desc_popup" class="trumbowyg-panel" cols="30" rows="3">{{ $data->desc_popup }}</textarea>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="link_popup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url
                                Boton</label>
                            <input id="link_popup" name="link_popup" value="{{ $data->link_popup }}" autocomplete="off"
                                class="mb-4 disabled:opacity-50 disabled:pointer-events-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>

                    </div>
                </div>
                {{-- @endcanany

                    @can(PermissionKey::Socios['permissions']['update']['name']) --}}
                <div class="text-center pt-6 mt-16">
                    <button type="submit"
                        class="px-2 py-1 mx-auto bg-orange-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                        <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M14 4l0 4l-6 0l0 -4"></path>
                        </svg>
                        Actualizar
                    </button>
                </div>
                {{-- @endcan --}}
            </form>
        </div>
    </div>
@endsection
