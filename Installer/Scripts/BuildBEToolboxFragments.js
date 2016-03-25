// JScript source code
var FSO = new ActiveXObject("Scripting.FileSystemObject");
var BEToolboxDocsFolder = FSO.GetFolder("\\ARP_RELEASE\\BEToolbox\\3.0.0.33\\bin\\Docs");
var fc = new Enumerator(BEToolboxDocsFolder.Files);

WScript.Echo("<?xml version='1.0'?>");
WScript.Echo("<!-- This file genereted by BuildBEToolboxFragments.js script-->");
WScript.Echo("<Wix xmlns='http://schemas.microsoft.com/wix/2006/wi'>");

WScript.Echo("<!-- Include project wide variables -->");
WScript.Echo("<?include Variables.wxi?>");

WScript.Echo("<!-- Documentation Files -->");
WScript.Echo("<Fragment Id='BEToolboxDocs'>");

WScript.Echo("<DirectoryRef Id=\"Documentation\" FileSource =\"$(var.BEToolboxSourceRoot)\Docs\">");
WScript.Echo("<Directory Id=\"BEToolboxDocs\" Name=\"BEToolbox\"/> <!-- Create the documentation directory -->");
WScript.Echo("</DirectoryRef>");

WScript.Echo("<DirectoryRef Id='BEToolboxDocs' FileSource=\"$(var.BEToolboxSourceRoot)Docs\">");
WScript.Echo("<Component Id='BEToolboxDocs' Guid='{F975C9D5-A6E5-4c37-80EE-6E915A4BEDF3}' Win64='$(var.IsWin64)'>");
var fcDocs = new Enumerator(BEToolboxDocsFolder.Files);
var i = 0;
for (; !fcDocs.atEnd(); fcDocs.moveNext()) {
    var s = new String(fcDocs.item());
    var lastIdx = s.lastIndexOf("\\");
    var fileName = new String;
    fileName = s.substring(lastIdx + 1);

    var fileTag = new String;
    if (fileName == "index.html")
        fileTag = "<File Id='BEToolboxDocs" + (i++) + "' Name='" + fileName + "' KeyPath='yes' />";
    else
        fileTag = "<File Id='BEToolboxDocs" + (i++) + "' Name='" + fileName + "' />";

    WScript.Echo(fileTag);
}
WScript.Echo("</Component>");
WScript.Echo("</DirectoryRef>");
WScript.Echo("</Fragment>");

WScript.Echo("</Wix>");

WScript.Quit(0);