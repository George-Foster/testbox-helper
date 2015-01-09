define(function(require, exports, module) {
    
    "use strict";
    var commandName1 = "addBDDTestBlock";
    var commandName2 = "addDescribe";
    var Menus = brackets.getModule("command/Menus"),
    CommandManager = brackets.getModule("command/CommandManager"),
    EditorManager = brackets.getModule("editor/EditorManager");
    
    // Inserts the script for a basic describe block
    function addDescribe() {
		var myCode = 'describe("", function() {\n';
		myCode = myCode + '\n';
        myCode = myCode + '\t\t\tit("", function() {\n';
        myCode = myCode + '\t\t\t\t\n';
        myCode = myCode + '\t\t\t});\n';
        myCode = myCode + '\n';
        myCode = myCode + '\t\t});\n';
		
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(myCode, insertionPos);
        }
    }
    
    function addBDDTestBlock() {
        var myCode = '/**\n';
        myCode = myCode + '* My BDD Test\n';
        myCode = myCode + '*/\n';
        myCode = myCode + 'component extends = "testbox.system.BaseSpec" {\n';
        myCode = myCode + '\n';
        myCode = myCode + '/*********************************** LIFE CYCLE Methods ***********************************/\n';
        myCode = myCode + '\n';
        myCode = myCode + '\t// EXECUTES BEFORE ALL SUITES+SPECS IN THE RUN() METHOD\n';
        myCode = myCode + '\tfunction beforeAll() {\n';
        myCode = myCode + '\t}\n';
        myCode = myCode + '\n';
        myCode = myCode + '\t// EXECUTES AFTER ALL SUITES+SPECS IN THE RUN() METHOD\n';
        myCode = myCode + '\tfunction afterAll() {\n';
        myCode = myCode + '\t}\n';
        myCode = myCode + '\n';
        myCode = myCode + '/*********************************** BDD SUITES ***********************************/\n';
        myCode = myCode + '\n';
        myCode = myCode + '\tfunction run() {\n';
        myCode = myCode + '\n';
        myCode = myCode + '\t}\n';
        myCode = myCode + '\n';
        myCode = myCode + '}\n';
        
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(myCode, insertionPos);
        }
    }
    
    // Register the new commands
    CommandManager.register("Add BDD Test Block", commandName1, addBDDTestBlock);
    CommandManager.register("Add Describe Block", commandName2, addDescribe);

	// Add the cf script commands to a new menu item
    var menuTB = Menus.addMenu("Testbox", "tbMenuScript");
    menuTB.addMenuItem(commandName1);
    menuTB.addMenuItem(commandName2);
});