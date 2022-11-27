/*

01) Every execution context has 2 phase
    01) Creational Phase
    02) Executional Phase

Creational Phase
01) It skip all console or any other executable code
02) It's find the variable and function delaretion in code
03) It's store variable name with UNDEFINED
    var x = 100

    var x = 100 //Not this

    var x = undefined //This
    x = 100

04) It's store function name with reference
05) It doesn't execute anyting


Executional Phase
01) It skip all declareation code
02) It reassign variable with initialized value
03) It execuate the code

*/