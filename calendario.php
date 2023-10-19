<?php
 
namespace App\Support;
 
use Carbon\CarbonImmutable;
 
class Calendar

{
    public static function buildMonth($year, $month)
{
    $startOfMonth = CarbonImmutable::create($year, $month, 1);
    $startOfMonth = $startOfMonth->startOfMonth();
    $endOfMonth = $startOfMonth->endOfMonth();
    $startOfWeek = $startOfMonth->startOfWeek(Carbon::SUNDAY);
    $endOfWeek = $endOfMonth->endOfWeek(Carbon::SATURDAY);
 
    return [
        'year' => $startOfMonth->year,
        'month' => $startOfMonth->format('F'),
        'weeks' => return collect($startOfWeek->toPeriod($endOfWeek)->toArray()) 
            ->map(fn ($date) => [
                'path' => $date->format('/Y/m/d'),
                'day' => $date->day,
            ])
            ->chunk(7), 
    ];
}
} 
?>
   

<a
    href="{{ $date['path'] }}"
    class="
        block
        py-2
        hover:bg-gray-300
        {{ ! $date['withinMonth'] ? 'text-gray-300' : '' }}
    "
> 
   <?php {{ $date['day'] }}?>
</a>

   <?php @props(['weeks']) ?>
 
<table class="m-auto text-center month">
    <thead>
        <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
        </tr>
    </thead>
    <tbody>
      <php  @foreach ($weeks as $days) ?>
            <tr>
               <?php @foreach ($days as $day) ?>
                    <td>
                        <a
                            href="{{ $day['path'] }}"
                            class="block py-2 hover:bg-gray-300"
                        >
                         <?php   {{ $day['day'] }}?>
                        </a>
                    </td>
              <?php  @endforeach?>
            </tr>
       <?php @endforeach ?>
    </tbody>
</table>

<?php $calendar = Calendar::buildMonth(year: 2022, month: 2); ?>

<div class="p-4 text-4xl text-center text-white bg-gray-900">
    <a href="/" class="block">
    <?php    {{ $calendar['month'] }} {{ $calendar['year'] }} ?>
    </a>
</div>
 
<div class="mt-8">
    <x-month :weeks="$calendar['weeks']" />
</div>
