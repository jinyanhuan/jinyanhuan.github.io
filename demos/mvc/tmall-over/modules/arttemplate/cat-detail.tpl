<div class="grid-col-150 cat-detail">
  <h3 class="cat-title">
    {{each mainTitle}}
      {{each $value}}
        <a href={{$value}} target="blank">{{$index}}</a>
      {{/each}}
      {{if $index!="end"}}
        /
      {{/if}}
    {{/each}}
  </h3>
  <ul class="cat-label-list cat-title-list clearfix">
    {{each titles}}
      <li><a href={{$value}} target="blank">{{$index}}</a></li>
    {{/each}}
  </ul>
  <i class="cat-pannel-line"></i>
  <div class="cat-brand-slide j_CatBrandSlide">
    <ul class="cat-brand-content clearfix">
      <div>
        {{each brands}}
        <li>
          {{each $value}}
            <a href={{$value["url"]}}><img src={{$value["src"]}} width="90" height="45" alt={{$value["alt"]}} ></a>
          {{/each}}
        </li>
        {{/each}}
      </div>
    </ul>
  </div>
</div>