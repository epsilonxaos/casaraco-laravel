@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto">

        <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900 mb-3">
            <a href="{{ route('panel.newsletter.export') }}"
                class="px-2 py-1 bg-green-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">

                <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>

                Descargar excel
            </a>

            <div class="hidden text-blue-600 dark:text-blue-500"></div>
            <div class="hidden text-emerald-600 dark:text-emerald-500"></div>
            <div class="hidden text-pink-600 dark:text-pink-500"></div>
        </div>

        @livewire('newsletter-table')
    </div>
@endsection
