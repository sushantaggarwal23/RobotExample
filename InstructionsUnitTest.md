Instructions for running the Test Cases:

1. Test cases have been written in Qunit and are present in myTest.js 
file. To execute the test cases, run qunit.Html file.

2. init('') function accepts list of all the valid commands as 
arguments. It returns true or false based on successful execution of 
command.

3. Different commands have been passed to init function to check the 
valid behaviour of object.

4. Test cases will pass or fail depending on the comparison between 
return value from init function and desired output.

Assumptions:
MOVE command will move the object 1 unit in direction of the object's 
face.
