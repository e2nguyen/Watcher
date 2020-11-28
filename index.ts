function writeHelloWorld (outputMethod) {
    var h = String.fromCharCode(104);
    var e = String.fromCharCode(101);  
    var l = String.fromCharCode(108);
    var d = String.fromCharCode(100);
    var o = String.fromCharCode(111);
    var w = String.fromCharCode(119);
    var r = String.fromCharCode(114);
    var space = String.fromCharCode(160);
    var no_space = '';
    var myArr = [d,l,r,o,w,space,o,l,l,e,h];
    var myArrNow = myArr.reverse();
    var string = myArrNow.join(no_space);
    var stringArray = string.split(space);
    outputMethod(stringArray.shift());
    outputMethod(space);
    outputMethod(stringArray.shift());
 }
 
 writeHelloWorld(document.write.bind(document));
 