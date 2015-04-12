var context;
var position = {
	x : 60,
	y : 240,
	d : "SOUTH"
},
    valueHolder = "",
    cordinateArray = "";
var isPlaceFirstCommand = "";

//To validate x and y axis limits not exiding table coordinates
//parameters: xCordinateValue and current direction
function validateXCordinates(xCordinate, direction) {
	if (direction == "EAST") {
		if (xCordinate + 60 > 300) {
			document.getElementById("error").innerHTML = "Out of table command";
			return false;
		} else {
			return true;
		}
	} else if (direction == "WEST") {
		if (xCordinate - 60 < 0) {
			document.getElementById("error").innerHTML = "Out of table command";
			return false;
		} else {
			return true;
		}

	}
}

//To validate x and y axis limits not exiding table coordinates
//parameters: yCordinateValue and current direction
function validateYCordinates(yCordinate, direction) {
	if (direction == "NORTH") {
		if (yCordinate - 60 < 0) {
			document.getElementById("error").innerHTML = "Out of table command";
			return false;
		} else {
			return true;
		}
	} else if (direction == "SOUTH") {
		if (yCordinate + 60 > 300) {
			document.getElementById("error").innerHTML = "Out of table command";
			return false;
		} else {
			return true;
		}
	}
}

//this function is to move robot in specified direction, incrementing by 1 point for each coordinate.
//parameters: Current direction
function move(direction) {
	switch(direction) {
	case "NORTH":
		if (validateYCordinates(position.y, direction)) {
			position.y = position.y - 60;
			draw();
			return true;
		} else {
			return false;
		}
		break;
	case "SOUTH":
		if (validateYCordinates(position.y, direction)) {
			position.y = position.y + 60;
			draw();
			return true;
		} else {
			return false;
		}
		break;
	case "WEST":
		if (validateXCordinates(position.x, direction)) {
			position.x = position.x - 60;
			draw();
			return true;
		} else {
			return false;
		}
		break;
	case "EAST":
		if (validateXCordinates(position.x, direction)) {
			position.x = position.x + 60;
			draw();
			return true;
		} else {
			return false;
		}
		break;
	}
}

//this function is to change direction from the current position to move left
//parameters: current direction
function changeLeftDirection(direction) {

	switch (direction) {
	case "NORTH":
		position.d = "WEST";
		break;
	case "SOUTH":
		position.d = "EAST";
		break;
	case "EAST":
		position.d = "NORTH";
		break;
	case "WEST":
		position.d = "SOUTH";
		break;
	default:
		break;
	}
}

//this function is to change direction from the current position to move Right
//parameters: current direction
function changeRightDirection(direction) {

	switch (direction) {
	case "NORTH":
		position.d = "EAST";
		break;
	case "SOUTH":
		position.d = "WEST";
		break;
	case "EAST":
		position.d = "SOUTH";
		break;
	case "WEST":
		position.d = "NORTH";
		break;
	default:
		break;
	}
}

// to initialize the draw canvas with the provided valid coordinates or else error message will be displayed
//parameters: command value
function init(obj) {

	context = myCanvas.getContext('2d');

	isPlaceFirstCommand = obj.split(" ");

	if (isPlaceFirstCommand[0].toUpperCase() == "PLACE" || valueHolder == "PLACE") {
		document.getElementById("error").innerHTML = "";
		document.getElementById("report").innerHTML = "";
		if (valueHolder == "" || isPlaceFirstCommand[0].toUpperCase() == "PLACE") {
			valueHolder = isPlaceFirstCommand[0].toUpperCase();
			cordinateArray = isPlaceFirstCommand[1].split(",");
			position.x = 0 + cordinateArray[0] * 60;
			position.y = 300 - cordinateArray[1] * 60;
			position.d = cordinateArray[2];
			return draw();
			
		} else if (isPlaceFirstCommand[0].toUpperCase() == "MOVE") {
			return move(position.d.toUpperCase());
			
		} else if (isPlaceFirstCommand[0].toUpperCase() == "LEFT") {
			changeLeftDirection(position.d.toUpperCase());
			return true;
		} else if (isPlaceFirstCommand[0].toUpperCase() == "RIGHT") {
			changeRightDirection(position.d.toUpperCase());
			return true;
		} else if (isPlaceFirstCommand[0].toUpperCase() == "REPORT") {

			document.getElementById("report").innerHTML = position.x / 60 + "," + (300 - position.y) / 60 + "," + position.d.toUpperCase();
		}else{
			document.getElementById("error").innerHTML = "Invalid command";
			return false;
		}
	} else {
		document.getElementById("error").innerHTML = "Frist command should be place";
		return false;
	}

}

//to initialize canvas object for document first load
function initialcall() {
	context = myCanvas.getContext('2d');
	draw();
}

//to draw the convas object
function draw() {
	context.clearRect(0, 0, 300, 300);
	context.beginPath();
	context.fillStyle = "#CCCCCC";
	if (position.x < 0 || position.x > 300) {
		document.getElementById("error").innerHTML = "Out of table command";
		return false;
	};
	if (position.y < 0 || position.y > 300) {
		document.getElementById("error").innerHTML = "Out of table command";
		return false;
	};
	// Draws a circle of radius 20 at the coordinates position.x, position.y on the canvas
	context.arc(position.x, position.y, 20, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
	return true;
}
