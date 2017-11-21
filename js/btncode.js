
var id_token = getParameterByName('id_token',window.location.href);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://togetherservice.azurewebsites.net/api/callsp",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "authorization": "Bearer " + id_token,
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": "{\n    \"sender\": \"" + form.submission.data.panelFrom + "\",\n    \"receiver\": \"" + form.submission.data.panelTo + "\",\n    \"subject\": \"" + form.submission.data.panelSubject + "\",\n    \"attachment_url\": \"" + form.submission.data.panelAttachment + "\",\n    \"body\": \"" + form.submission.data.panelTextareaField + "\"\n}"
}

$.ajax(settings).done(function () {
    form.setAlert('success', 'The mail has been sent successfully.');
    alert('The mail has been sent successfully.');
    form.reset();
    form.render();
    console.log("success");
}).fail(function (error) {
    form.setAlert('danger', 'Unsent the email');
});