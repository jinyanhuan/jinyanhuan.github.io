  <label>
    <span>Name</span>
    {{first_name}} {{last_name}}
  </label>

  <label>
    <span>Email</span>
    {{if email}}
      {{email}}
    {{else}}
      <div class="empty">Blank</div>
    {{/if}}
  </label>

  {{if mobile}}
  <label>
    <span>Mobile number</span>
    {{mobile}}
  </label>
  {{/if}}

  {{if work_number}}
  <label>
    <span>Work number</span>
    {{work_number}}
  </label>
  {{/if}}

  {{if address}}
  <label>
    <span>Address</span>
    <pre>{{address}}</pre>
  </label>
  {{/if}}

  <label>
    <span>Notes</span>
    {{if notes}}
      {{notes}}
    {{else}}
      <div class="empty">Blank</div>
    {{/if}}
  </label>



