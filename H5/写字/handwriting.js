var canvasWidth = Math.min(800, $(window).width() - 20);
var canvasHeight = canvasWidth;

var strokeColor = "black";
var isMouseDown = false;
var lastLoc = {x:0, y:0};	//用于记录上一次鼠标所在的位置
var lastTimestamp = 0;
var lastLineWidth = -1;

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

$("#controller").css("width", canvasWidth+"px");
drawGrid();
//清除画布内容
$("#clear_btn").click(
	function(e){
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawGrid();
	}
)

//更改颜色
$(".color_btn").click(
	function(e){
		$(".color_btn").removeClass("color_btn_selected");
		$(this).addClass("color_btn_selected");
		strokeColor = $(this).css("background-color");
	}
)

// document.onmousedown = function(e){
// 	alert(e.clientX + "," +e.clientY);
// }

function beginStroke(point){
	isMouseDown = true;
	lastLoc = windowToCanvas(point.x, point.y);
	lastTimestamp = new Date().getTime();
}
function endStroke(){
	isMouseDown = false;
}
function moveStroke(point){
	var curLoc = windowToCanvas(point.x, point.y);
	var curTimestamp = new Date().getTime();
	var s = caLcDistance(curLoc, lastLoc);
	var t = curTimestamp - lastTimestamp;

	var lineWidth = caLcLineWidth(t, s);

	//draw
	context.beginPath();
	context.moveTo(lastLoc.x, lastLoc.y);
	context.lineTo(curLoc.x, curLoc.y);

	context.strokeStyle = strokeColor;
	context.lineWidth = lineWidth;
	context.lineCap = "round";
	context.lineJoin = "round";
	context.stroke();

	lastLoc = curLoc;
	lastTimestamp = curTimestamp;
	lastLineWidth = lineWidth;
}

canvas.onmousedown = function(e){
	e.preventDefault();
	beginStroke({x:e.clientX, y:e.clientY})
	// console.log("mouse down!");
	// alert(e.clientX + "," +e.clientY);
	//alert( loc.x + "," + loc.y);
};
canvas.onmouseup =  function(e){
	e.preventDefault();
	endStroke();
	// console.log("mouse up");
};
canvas.onmouseout = function(e){
	e.preventDefault();
	endStroke();
	// console.log("mouse out");
};
canvas.onmousemove = function(e){
	e.preventDefault();
	if(isMouseDown){
		//console.log("mouse move");
		moveStroke({x:e.clientX, y:e.clientY})
	}

};

canvas.addEventListener('touchStart', function(e){
	e.preventDefault();
	touch = e.touches[0];
	beginStroke({x:touch.pageX, y:touch.pageY});
});
canvas.addEventListener('touchMove', function(e){
	e.preventDefault();
	if(isMouseDown){
		touch = e.touches[0];
		moveStroke({x:touch.pageX, y:touch.pageY});
	}
});
canvas.addEventListener('toucheEnd', function(e){
	e.preventDefault();
	endStroke();
});

var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 10;
var minStrokeV = 0.1;

function caLcLineWidth(t, s){
	var v = s / t;

	var resultLineWidth;
	if (v <= minStrokeV) {
		resultLineWidth = maxLineWidth;
	}
	else if(v >=maxStrokeV){
		resultLineWidth = minLineWidth;
	}
	else{	//使用差值的方式获得速度在中间情况下线条的宽度
		resultLineWidth = maxLineWidth 
		- (v-minStrokeV)/(maxStrokeV-minStrokeV)*(maxLineWidth-minLineWidth);
	}
	if(lastLineWidth == -1){
		return resultLineWidth;
	}
	return lastLineWidth*3/5 + resultLineWidth*2/5;
}

function caLcDistance(loc1, loc2) {
	// body...
	return Math.sqrt( (loc1.x-loc2.x)*(loc1.x-loc2.x)
		+ (loc1.y-loc2.y)*(loc1.y-loc2.y))
}

function windowToCanvas(x, y){
	var bbox = canvas.getBoundingClientRect();
	return {x:Math.round(x-bbox.left), 
			y:Math.round(y-bbox.top)};
}

function drawGrid() {
	// body...
	context.save();
	context.strokeStyle = "rgb(230, 11, 9)";
	context.beginPath();
	context.moveTo(3, 3);
	context.lineTo(canvasWidth - 3, 3);
	context.lineTo(canvasWidth - 3, canvasHeight - 3);
	context.lineTo(3, canvasHeight - 3);
	context.closePath();

	context.lineWidth = 6;
	context.stroke();

	context.beginPath();
	context.setLineDash([16,8]);
	context.moveTo(0, 0);
	context.lineTo(canvasWidth, canvasHeight);

	context.moveTo(canvasWidth, 0);
	context.lineTo(0,canvasHeight);

	context.moveTo(canvasWidth/2, 0);
	context.lineTo(canvasWidth/2, canvasHeight);

	context.moveTo(0, canvasHeight/2);
	context.lineTo(canvasWidth, canvasHeight/2);

	context.lineWidth = 1;
	context.stroke();
	context.restore();
}
