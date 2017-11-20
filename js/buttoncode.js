var url = window.location.href;
var qs = parse_query_string(url);
console.log('qs = '+qs.id_token);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://togetherservice.azurewebsites.net/api/callsp",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer "+qs.id_token,
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": "{\n    \"sender\": "+ form.submission.data.panelFrom +",\n    \"receiver\": "+ form.submission.data.panelTo +",\n    \"subject\": "+ form.submission.data.panelSubject +",\n    \"attachment_url\": "+ form.submission.data.panelAttachment +",\n    \"body\": "+ form.submission.data.panelTextareaField +"\n}"
}

$.ajax(settings).done(function () {  
console.log("success");   
});