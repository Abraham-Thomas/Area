
window.onload = function() {
	var chess = document.getElementById('chess');
	var context = chess.getContext('2d');
	var wins = [];
	var myWin = [];
	var computerWin = [];
	var over = false;

	context.strokeStyle = "#bfbfbf";
	
	//棋盘
	var drawChessBoard = function () {
		for (var i = 0; i <= 15; i++) {
			context.moveTo(15 + i*30, 15);
			context.lineTo(15 + i*30, 435);
			context.stroke();

			context.moveTo(15, 15 + i*30);
			context.lineTo(435, 15 + i*30);
			context.stroke();
		}
	}
	drawChessBoard();
	//debugger;
	//棋子
	var oneStep = function(i, j, me) {
		context.beginPath();
		context.arc(15+i*30, 15+j*30, 13, 0, 2*Math.PI);
		context.closePath();
		var gradient = context.createRadialGradient(15+i*30+2, 15+j*30-2, 12, 15+i*30+2, 15+j*30-2, 2);
		if (me) {
			gradient.addColorStop(0, "#000");
			gradient.addColorStop(1, "#555");
		} else {
			gradient.addColorStop(0, "#aaa");
			gradient.addColorStop(1, "#fff");
		}
		context.fillStyle = gradient;
		context.fill();
	}
	// oneStep(0, 0, true);
	// oneStep(1, 1, false);
	
	var computerAI = function() {
		var myScore = [];
		var computerScore = [];
		var max = 0;
		var u = 0, v = 0;
		for (var i=0;i<15;i++) {
			myScore[i] = [];
			computerScore[i] = [];
			for (var j=0;j<15;j++) {
				myScore[i][j] = 0;
				computerScore[i][j] = 0;
			}
		}
		for (var i=0;i<15;i++) {
			for (var j=0;j<15;j++) {
				if (chessBoard[i][j] == 0) {
					for (var k=0;k<counts;k++) {
						if (wins[i][j][k]) {
							if (wins[i][j][k]) {
								if (myWin[k] == 1) {
									myScore[i][j][k] += 200;
								} else if (myWin[k] == 2) {
									myScore[i][j] += 400;
								} else if (myWin[k] == 3) {
									myScore[i][j] += 2000;
								} else if (myWin[k] == 4) {
									myScore[i][j] += 10000;
								}

								if (computerWin[k] == 1) {
									computerScore[i][j][k] += 220;
								} else if (computerWin[k] == 2) {
									computerScore[i][j] += 420;
								} else if (computerWin[k] == 3) {
									computerScore[i][j] += 2200;
								} else if (computerWin[k] == 4) {
									computerScore[i][j] += 12000;
								}  
							}
						}
						if(myScore[i][j] > max) {
							max = myScore[i][j];
							u = i;
							v = j;
						} else if(myScore[i][j] == max) {
							if (computerScore[i][j] > computerScore[u][v]) {
								u = i;
								v = j;
							}
						}
						if(computerScore[i][j] > max) {
							max = myScore[i][j];
							u = i;
							v = j;
						} else if(myScore[i][j] == max) {
							if (myScore[i][j] > computerScore[u][v]) {
								u = i;
								v = j;
							}
						}
					}
				}
			}
			oneStep(u, v, false);
			chessBoard[u][v] = 2;
			for (var k=0;k<counts;k++) {
				if (wins[u][v][k]) {
					computerWin[k]++;
					myWin[k] = 6;
					if (computerWin[k] == 5) {
						window.alert("The Computer Win!");
						over = true;
					}
				}
			}
			if (!over) {
				me = !me;
			}
		}
	}


	
	// 落子
	var me = true;
	var chessBoard = [];
	for (var i=0; i<15; i++) {
		chessBoard[i] = [];
		for (var j=0; j<15; j++) {
			chessBoard[i][j] = 0;	//无棋子状态
		}
	}
	chess.onclick = function(e) {
		if (over) {
			return ;
		}
		if (!me) {
			return ;
		}
		var x = e.offsetX;
		var y = e.offsetY;
		var i = Math.floor(x/30);
		var j = Math.floor(y/30);
		if (chessBoard[i][j] == 0) {
			oneStep(i, j, me);
			chessBoard[i][j] = 1;
			for (var k=0;k<counts;k++) {
				if (wins[i][j][k]) {
					myWin[k]++;
					computerWin[k] = 6;
					if (myWin[k] == 5) {
						window.alert("You Win!");
						over = true;
					}
				}
			}
			if (!over) {
				me = !me;
				computerAI();
			}
		}
	}

	//赢法数组
	
	for (var i=0; i<15; i++) {
		wins[i] = [];
		for (var j=0; j<15; j++) {
			wins[i][j] = [];
		}
	}

	//赢法种类的索引
	var counts = 0;
	//横向
	for (var i=0;i<15;i++) {
		for (var j=0;j<11;j++) {
			for (var k=0;k<5;k++) {
				wins[i][j+k][counts] = true;
			}
			counts++;
		}
	}

	//纵向
	for (var i=0;i<15;i++) {
		for (var j=0;j<11;j++) {
			for (var k=0;k<5;k++) {
				wins[j+k][i][counts] = true;
			}
			counts++;
		}
	}

	//正斜向
	for (var i=0;i<11;i++) {
		for (var j=0;j<11;j++) {
			for (var k=0;k<5;k++) {
				wins[i+k][j+k][counts] = true;
			}
			counts++;
		}
	}

	//反斜向
	for (var i=0;i<11;i++) {
		for (var j=14;j>3;j--) {
			for (var k=0;k<5;k++) {
				wins[i+k][j-k][counts] = true;
			}
			counts++;
		}
	}
	console.log(counts);


	//赢法统计数组
	for (var i=0;i<counts;i++) {
		myWin[i] = 0;
		computerWin[i] = 0;
	}

}