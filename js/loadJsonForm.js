
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions                                                                                        loadJsonForm.js 
// -----------------------------------------------------------------------------------------------------------------------------

var arrForm = loadForm();
var arrForm2 = loadForm2();

function loadForm() {

    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': "./data/data.json",
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}

function loadForm2() {
    
        var json = null;
        var getsetting = {
            'async': false,
            'global': false,
            'url': "./data/mailform.json",
            'dataType': "json",
            "method": "GET"
        }
        $.ajax(getsetting).done(function (data) {
            json = data;
        });
        return json;
    }
    