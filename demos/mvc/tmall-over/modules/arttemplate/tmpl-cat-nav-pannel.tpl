<div class="module">
   <div class="grid-container-800 cat-pannel">
       {{include "./cat-detail"}}
       {{if catBanner.length==3}}
          {{include "./cat-banner-3"}}
       {{else if catBanner.length==1}}
          {{include "./cat-banner-1"}}
       {{else if catBanner.length==4}}
          {{include "./cat-banner-4"}}
       {{/if}}
       {{include "./cat-small-banner"}}
   </div>
</div>



