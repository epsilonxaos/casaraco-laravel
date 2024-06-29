<?php

namespace App\Livewire;

use App\Helpers\Helpers;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Newsletter;

class NewsletterTable extends DataTableComponent
{
	protected $model = Newsletter::class;

	public function configure(): void
	{
		$this->setPrimaryKey('id')
			->setPerPageAccepted([25, 50, 100])
			->setPerPage(25)
			->setSearchDebounce(1000);
	}

	public function columns(): array
	{
		return [
			Column::make("Id", "id")
				->sortable(),
			Column::make("Email", "email")
				->sortable(),
			Column::make("Creado", "created_at")
				->label(fn ($row) => Helpers::dateSpanishShort($row->created_at))
				->sortable(),
		];
	}
}
