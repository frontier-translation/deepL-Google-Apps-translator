function inputData() {
    var sheet = SpreadsheetApp.getActive().getSheetByName("Input");
    var outputsheet = SpreadsheetApp.getActive().getSheetByName("Output");
    outputsheet.appendRow(["Original","Translated"]);
    var data = sheet.getDataRange().getValues();
    data.forEach(function (row) {
    // Use API
    var inputData = row[0];
    deeplAPIOutput = deeplAPI (inputData);
    // Write to output tab
    outputData (inputData,deeplAPIOutput);
    });
}

function deeplAPI(inputData) {
    if (inputData == null) {
    Logger.log("Empty Input!");
    var row = "Empty";
    return row;
    } else {
    // Make a POST request with form data.
    var formData = {
        'auth_key': 'YOUR_KEY_HERE',
        'text': inputData,
        'target_lang': 'ZH'
    };
    var options = {
        'method' : 'post',
        'payload' : formData
    };
    var response = UrlFetchApp.fetch('https://api-free.deepl.com/v2/translate', options);
    var dataAll = JSON.parse(response.getContentText());
    var row = [dataAll.translations[0].text]; // Retrieve values from JSON object of dataAll.
    Logger.log(row);
    return row;
    }
}

function outputData(inputData,deeplAPIOutput) {
    var sheet = SpreadsheetApp.getActive().getSheetByName("Output");
    var row = [inputData,deeplAPIOutput[0]];
    sheet.appendRow(row);
    message = "Input is " + inputData + "\nOut put is " + deeplAPIOutput
    Logger.log(message);
}