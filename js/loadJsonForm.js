
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions                                                                                        loadJsonForm.js 
// -----------------------------------------------------------------------------------------------------------------------------

var arrForm = loadForm();

function loadForm() {

    var json = null;
    var getsetting = {
        'async': true,
        'global': false,
        'url': "./data/mailform2.json",
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}
    