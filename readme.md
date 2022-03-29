# Google Sheets DeepL translator

Google Sheets Apps script that calls DeepL API to translate strings in batch

## Usage

1. Get your DeepL API key
2. Create a Google Sheet with two worksheets: `Input` and `Output`
3. Add an Apps Script for your Google Sheet with this script, update the value of the `auth_key` variable with your API key
4. Populate the `Input` column with strings you want to translate
5. Run the script with the `inputData()` function
6. Translated strings are generated in the `Output` worksheet