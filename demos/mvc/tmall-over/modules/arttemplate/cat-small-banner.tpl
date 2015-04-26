<ul class="grid-col-160 cat-small-banner">
  {{each smallBanner}}
  <li>
    <a href={{$value["url"]}}><img src={{$value["src"]}} alt={{$value["alt"]}} data-pinit="registered"></a>
  </li>
  {{/each}}
</ul>