# RobotExample
Instructions for Moving Object application:

List of commands:

PLACE x,y,F
MOVE
LEFT
RIGHT
REPORT


1. First valid command should be a PLACE command. Any commands before a PLACE command would be discarded.After a valid PLACE command, any combination of commands can be issued.
2. PLACE command can be issued as PLACE x,y,F where x is x-axis, y is y-axis and F is direction. You can write PLACE command in input box and then press COMMAND button.
   Forex: PLACE 1,1,East will place the robot in 1,1 with face towards east.
3. MOVE command will move the object one unit in the direction of object's face. You can either write MOVE command in box and then press COMMAND button or directly press MOVE button. Object is placed on a table with dimension 5*5. 
4. LEFT command will change the direction to the left from object's current direction. You can either write LEFT command in input box and then press COMMAND button or directly press LEFT Button.
5. RIGHT command will change the direction to the right from object's current direction. You can either write RIGHT command in input box and then press COMMAND button or directly press RIGHT Button.
6. REPORT command will tell the current co-ordinates and direction of the object. You can either write REPORT command in input box and then press COMMAND button or directly press REPORT Button.
7. Any commands which aim to displace the object from the table will be discarded and an error will be thrown.

