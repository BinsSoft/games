function searchForArray(haystack, needle){
	var i, j, current;
	for(let r of haystack) {
		if (containsAll(r, needle) == false) 
		{ 
			continue; 
		} else {
			return true;
		}
	}
	return false;
}

function containsAll(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
var playerList = [];
var gamePlayerList = [];
var totalHit = 0;
var playMode = 1 ; // 1= single , 2 = multiple
var cellItemList = [1,2,3,4,5,6,7,8,9];
var currentPlayer = {};
var gameOn = false;
var playerContainer , initContainer;
class Board {
	constructor() {
		this.winCombinations = [
			[1,2,3],
			[4,5,6],
			[7,8,9],
			[1,4,7],
			[2,5,8],
			[3,6,9],
			[1,5,9],
			[3,5,7]	
		];
	}
	appendBoard(playContainer)
	{
		var rows = [1,4,7];
		var titleContainer = $("<div/>")
					.addClass('title-container')
					.appendTo(playContainer);
		var turnContainer = $("<div/>")
							.addClass('turn-container')
							.appendTo(titleContainer);
		this.resultContainer = $("<div/>")
						      .addClass('result-conatiner')
						      .appendTo(titleContainer);

		var board = $("<div/>")
					.addClass('board')
					.appendTo(playContainer);
		let row ;
		for (let r=0; r<3; r++) {
			row = $("<div/>")
				.addClass('row')
				.appendTo(board);
			for (let c=0; c<3; c++) {
				let cellValue = rows[r]+c;
				$("<div/>")
				.attr({
					'data-value' : cellValue,
					'data-click' : 'true'
				})
				.addClass('cell')
				.bind('click',()=>{

					let turn = playContainer.attr('data-turn');
					let currentUser = gamePlayerList[turn];
					let currentKey = playContainer.attr('data-current-key');
					let totalCell = playContainer.find('.cell').length;
					if (
						(currentKey == currentUser['id']) && // check click by  current user or not
					 	($("div.cell[data-value="+cellValue+"]").attr('data-click') == 'true') // check the cell is already clicked or not
					 	) {
						//totalHit ++;
						socket.emit('players-result', 
							{
								turn : turn, 
								cell : cellValue,
								totalclick : totalHit
							}
						);
						cellItemList.splice(cellItemList.indexOf(cellValue),1);
					}
					
					
				})
				.appendTo(row);
			}
		}
		socket.on('game-players-result', (responseData)=>{

			let turn = responseData.turn;
			let cellValue = responseData.cell;
			let hitUser = gamePlayerList[turn];
			
			gamePlayerList[turn].result.push(cellValue);
			let html = '';
			if (turn == 0) {
				html = '&#x2718;';
			} else {
				html = '&#x25EF;';
			}
			$("div.cell[data-value="+cellValue+"]")
			.html('<div class="cell-content">'+html+'</div>')
			.attr('data-click', 'false');
			totalHit = $("div.cell[data-click=false]").length;
			turn = (turn == 0)? 1:0;
			let result = this.calculateResult();
			
			if (playMode == 1) {
				if (turn == 1) {
					setTimeout(()=>{
						let randomItem = cellItemList[Math.floor(Math.random()*cellItemList.length)];
						let systemPlayer = gamePlayerList.find((p)=>{
							return (p.type && p.type == 'System')
						})
						playContainer.attr('data-current-key',systemPlayer.id);

						$("div.cell:eq("+(randomItem-1)+")").trigger("click");
					},2000)
				}
				else {
					let humanPlayer = gamePlayerList.find((p)=>{
						return (p.type == undefined)
					})
					playContainer.attr('data-current-key',humanPlayer.id);
				}
			} 
			if (result.status == false) { // result not declared
				//alert(gamePlayerList[turn].name + "'s turn now");
				playContainer.attr({
					'data-turn' : turn
				});
			} else { // result is declared
				playContainer.empty()
				playContainer.addClass('hidden');
				$(".result-container .result-msg").html(result.msg);
				$(".result-container").removeClass('hidden');
			}
			
		})
	}
	calculateResult()
	{
		if(totalHit <= $("div.cell").length ) {
			let player1Result = gamePlayerList[0].result;
			let player2Result = gamePlayerList[1].result;
			player1Result.sort();
			player2Result.sort();
			if (searchForArray(this.winCombinations, player1Result) == true) {
				let msg = gamePlayerList[0].name + ' won the game';
				if (playMode == 1) {
					msg =  'You won the game'
				}
				return {status : true, msg : msg };
			} else if (searchForArray(this.winCombinations, player2Result) == true) {
				
				return {status : true, msg : gamePlayerList[1].name + ' won the game'};
			} else {
				if (totalHit == $("div.cell").length){
					
					return {status : true, msg : 'Match is drawn'};
				}
					
			}

		}
		return {status : false};
	}
	
}
class CorssGame {
    
	constructor(selector){
		this.selector = $(selector);
		
		
		this.playerTurn = 0;
		this.currentUserKey = makeid();

		this.init()
	}
	init(){
		initContainer = $("<div/>")
							.attr({
								class : 'init-container'
							})
							.appendTo(this.selector);
		var singlePlayerBtn = $("<input />")
		.attr({
			type : 'button',
			value : 'Single Player',
			class : 'btn btn-enter'
		}).appendTo(initContainer)
		var mulitPlayerBtn = $("<input />")
		.attr({
			type : 'button',
			value : 'Multi Player',
			class : 'btn btn-enter'
		})
		.appendTo(initContainer)

		playerContainer = $("<div/>")
							.addClass('player-conatiner hidden')
							.appendTo(this.selector);
		let turnContainer = $("<div/>").addClass('turn-container').appendTo(playerContainer)
		
		var playContainer = $("<div/>")
							.addClass('play-conatiner hidden')
							.attr({
								'data-turn' : 0,
								'data-click-count' : 0,
								'data-current-key' : this.currentUserKey,
							})
							.appendTo(this.selector);
		let playerForm = $("<div/>")
						.addClass('player-form')
						.appendTo(playerContainer);
		let nameInput = $("<input />")
		.attr({
			type : 'text',
			placeholder : 'Enter Name',
			class : 'nameInput box1'
		})
		.appendTo(playerForm)
		$("<br/>").appendTo(playerForm)
		$("<input />")
		.attr({
			type : 'button',
			value : 'Enter',
			class : 'btn btn-enter',
			id : "btnNameInput",
			"data-request" : ""
		})
		.bind('click',(event)=>{
			currentPlayer = {
				name : nameInput.val(),
				id : this.currentUserKey,
				request: true,
				result : []
			};
			let reqId = $(event.target).attr("data-request");
			if (reqId != "") {
				
				/*let requestUser = playerList.find((p)=>{
					return p.id == reqId;
				})*/
				currentPlayer.requestUser = reqId;
				currentPlayer.request = false;
			}
			socket.emit('players', currentPlayer);
			playerForm.addClass('hidden');
		})
		.appendTo(playerForm)

		mulitPlayerBtn.bind("click",()=>{
			playerContainer.removeClass('hidden');
			initContainer.addClass('hidden');
			playMode = 2;
		});
		singlePlayerBtn.bind("click", ()=>{
			playContainer.removeClass('hidden');
			initContainer.addClass('hidden');
			playMode = 1;
			currentPlayer = {
				name : 'Me',
				id : this.currentUserKey,
				result : [],
			};
			gamePlayerList.push(currentPlayer)
			gamePlayerList.push({
				name : 'Computer',
				type : 'System',
				id : makeid(),
				result : [],
			})
			let board = new Board;
			board.appendBoard(playContainer)

		})
		
		socket.on('game-players', function(data){
			if(gameOn == false ) {
				playerList.push(data);

				let currentKey = playContainer.attr('data-current-key');
				let html = "";
				if (data.request != undefined) {
					if (data.request == true) {
						if (data.id  == currentKey) {
							html = `
									<p>Hi `+data.name+`</p>
									<p>Please wait, we are searching your opponent.</p>
									`;
							$(".player-display-container")
							.removeClass('hidden')
							.html(html);
							currentPlayer['status'] = 'game-request';
						} else {
							$("<p/>")
							.text("Hi,")
							.appendTo($(".notification-container"));
							$("<p/>")
							.text(data.name+` wants to play, are you want?`)
							.appendTo($(".notification-container"));
							let btnPanel = $("<p/>")
							.appendTo($(".notification-container"));
							$("<button />")
							.text("Yes")
							.attr({
								"class" : "btn btn-confirm",
								"data-request" : data.id
							})
							.bind("click", ()=>{
								let reqId = data.id;
								let requestUser = playerList.find((p)=>{
									return p.id == reqId;
								})
								if(requestUser && requestUser.request == undefined) {
									$(".alert-container")
									.html("Sorry, "+requestUser.name+" is busy now")
									.removeClass('hidden')
									$(".notification-container").addClass("hidden");
								} else {
									$("#btnNameInput").attr("data-request", reqId);
									initContainer.addClass("hidden");
									playerContainer.removeClass("hidden");
									playerForm.removeClass("hidden");
									$(".notification-container").addClass("hidden");
								}
							})
							.appendTo(btnPanel)
							$("<button />")
							.text("No")
							.attr({
								class : "btn btn-confirm"
							})
							.bind("click", ()=>{
								$(".notification-container").addClass("hidden");
							})
							.appendTo(btnPanel)
							
							$(".notification-container")
							.removeClass('hidden');
						}
						
					} else if(data.request == false ) {
						let requestSendUserId = data.requestUser;
						requestSendUserId = playerList.findIndex((p)=>{
							return p.id  == requestSendUserId
						})
						let requestAcceptUserId = data.id;
						requestAcceptUserId = playerList.findIndex((p)=>{
							return p.id  == requestAcceptUserId
						})
						if (data.id  != currentKey) {

							html = `
									<p>We find your opponent.</p><p>`+data.name+` will play with you</p>
									<p>You will start The game</p>
									<p>Please wait game starts shortly</p>
									`;
							$(".player-display-container")
							.html(html);
						} else {
							
							let requestUser = playerList[requestSendUserId];
							html = `
									<p>`+requestUser.name+` will start The game</p>
									<p>Please wait game starts shortly</p>
									`;
							$(".player-display-container")
							.removeClass('hidden')
							.html(html);
						}
		
						
						if (requestAcceptUserId == currentPlayer.id || requestSendUserId == currentPlayer.id) {
							setTimeout(()=>{
								let board =new Board;
								board.appendBoard(playContainer);
								playContainer.removeClass('hidden');
								$(".player-display-container").addClass("hidden");
								delete playerList[requestSendUserId]['request'];
								delete playerList[requestAcceptUserId]['request'];
								gamePlayerList.push(playerList[requestSendUserId]);
								gamePlayerList.push(playerList[requestAcceptUserId]);
	
								socket.emit('players-engage', playerList[requestAcceptUserId].id);
								gameOn = true;

							},2000)
						}
					}
				}
			}
		});
		socket.on("players-engage-result", (data)=>{
			let requestUser = playerList.findIndex((p)=>{
				return p.id == data;
			})
			if(requestUser && playerList[requestUser] && playerList[requestUser]['request'] != undefined) {
				delete playerList[requestUser]['request'];
			}
		})
	}

	
	
}

$(()=>{
	let corss = new CorssGame(".cross-game-container");

})