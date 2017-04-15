/* This is the script file from where we are passing the value */	
/* Session 6 Assignment 3 */

var i;
var sum=0;
for (i = 0; i <= 1000; i++) {
    sum = sum + i;
}
document.write("Using for loop: " +sum +"</br>");



    var x=0;
	var sum2 = 0;
    while (x <= 1000) {
        sum2 = sum2 + x;
        ++x;
    }
document.write("Using While loop: " +sum2); 