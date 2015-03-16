<div class="grid-col-460 cat-banner">
  {{each catBanner}}
  <a class="banner-grid banner-grid-a{{$index+1}}" href={{$value[0]}}><img src={{$value[1]}} alt={{$value[2]}} data-pinit="registered"></a>
  {{/each}}
</div>