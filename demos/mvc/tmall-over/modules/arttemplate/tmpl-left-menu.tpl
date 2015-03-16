<div class="module left-menu">
  <ul class="cat-slide-nav clearfix">
    {{each}}
      <li class="j_CatNavItem {{if $index!=1}} to-be-load{{/if}} cat-nav{{if $index==1}} cat-nav-selected{{/if}}" data-menu="cat-nav-{{$index}}">
        <div class="cat-market-nav">
          <s class="cat-nav-icon fp-iconfont">{{$value["title"]}}</s>
          {{each $value["content"]}}
            <a href={{$value["url"]}}>{{$value["name"]}}</a>
            {{if $index!="end"}}
              /
            {{/if}}
          {{/each}}
          <b class="cat-nav-arrow"></b>
        </div>
      </li>
    {{/each}}
  </ul>
</div>




