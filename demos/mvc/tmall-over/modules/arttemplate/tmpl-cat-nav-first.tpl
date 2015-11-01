<div class="module">
  <div class="grid-container-800 cat-pannel market-rec-content">
    <div class="grid-col-150 cat-detail">
      <ul class="cat-label-list market-list">
        {{each labelList}}
        <li>
          {{each $value}}
          <a href={{$value["url"]}} {{if $index==1}} second-col-label{{/if}}>{{$value["title"]}}</a>
          {{/each}}
        </li>
        {{/each}}
      </ul>
      <h3 class="cat-label-title">主题购</h3>
      <ul class="cat-label-list">
        {{each theme}}
        <li>
          {{each $value}}
          <a href={{$value["url"]}} {{if $index==1}} second-col-label{{/if}}>{{$value["title"]}}</a>
          {{/each}}
        </li>
        {{/each}}
      </ul>
      <div>
        <a class="market-banner" href={{marketBanner["href"]}} title={{marketBanner["title"]}} style="background: url({{marketBanner["bgUrl"]}})
        no-repeat bottom right"></a>
      </div>
    </div>
    <div class="grid-col-460 cat-banner" id="J_MarketBannerSlide">
      <ul class="market-slide-content clearfix">
        <div>
          {{each catMarketBanner}}
          <li class="market-slide-pannel J_DirectPromo">
            <a href={{$value["href"]}}>
              <img class="j_CatMarketBanner" src={{$value["src"]}} alt={{$value["alt"]}}>
            </a>
          </li>
          {{/each}}
        </div>
      </ul>
    </div>
    <ul class="grid-col-160 cat-small-banner" data-spm="2000a005">
      {{each catSmallBanner}}
      <li class="J_DirectPromo {{if $index=="end"}} small-banner-last{{/if}}">
        <a target="_blank" href={{$value["href"]}}>
          <img src={{$value["src"]}} alt={{$value["alt"]}}>
        </a>
      </li>
      {{/each}}
    </ul>
  </div>
</div>
