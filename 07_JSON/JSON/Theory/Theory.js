/*

Author: Rakibul Hassan Rifat (Programmer)

JSON Theory

Agenda of JSON 
    01) Introduction
    02) Create JSON
    03) Validity
    04) JSON Path ()
    05) Schema


01) Introduction
    01) JSON is a text format that is completely language independent.

    02) JSON stnad fot JavaScript Object Notation

    03) JSON is
        01) a standard format
        02) Text based
        03) Language independent
        04) Human readable
        05) Lightweight
        06) Strore and exchange data between server and client

    04) JSON Extension - fileName.json

    05) Official Type - Application/JSON

    06) JSON have 2 main structure
        01) Object
        02) Array

    07) JSON syntax
        {
            "key":"value"
        }

    08) JSON value rules
        01) JSON mainly work with key value. This called key value pair
        02) Key must have (" ") || JS Object it's optional
        03) Value can have or not (" "). String value should have (" ") and Number should be only value

    09) JSON syntax rules
        01) Object have to use when we have key value pairs
        02) Array have to ues when we have multiple value with one key


03) Create JSON
        01) https://www.codebeautify.org/jsonviewer 
            01) Website for JSON
                01) Validate
                02) Beautify
                03) Minify
                04) Coversion
                05) Download 
       
                

04) JSON Path
        01) Access
        02) Modify
        03) Delete
        04) Convert

    01) Access
        01) We can access JSON in 2 ways
            01) .  (Dot Notationa)
            02) [] (Bracket Notation)
        
        02) It's easy to use dot notation to access Object
        03) It's easy to use bracket notation to access Array

    02) Modify 
        01) Access the value 
        02) Keep value in the left side and equal then write new value
        03) updateableValuesPath = newValue 
    
    03) Delete
        01) Just write delete keyword
        02) Then keep value's access path

    04) Covert 
        01) JSON can be Convert in 2 ways
            01) JavaScript Object to JSON
            02) JSON to JavaScript Object

        02) JavaScript Object to JSON
            01) Method - JSON.stringify(Object)
        
        03) JSON to JavaScript Object
            01) Method - JSON.parse(JSON)

    05) How to import JSON
        01) const varibale-name = require('./path')
    


05) JSON Schema
        01) Website for JSON schema validate
            01) https://www.jsonschemavalidator.net/

        02) Website for JSON schema generator
            01) https://www.liquid-technologies.com/online-json-schema-validator




*/
