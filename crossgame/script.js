const searchForArray = (haystack, needle) => {
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

const containsAll = (needles, haystack) =>{ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}
const makeid = ()=>{
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
var gameId = '';
const icons = {
	success : "thumbs-up.png",
	fail : "thumbs-down.png",
	draw : "shake-hands.png",
	toss : "toss.gif"
}
const audios = {
	success : '../sounds/win.wav',
	fail : '../sounds/lost.wav'
}
const tossArr = ['Head', 'Tail'];

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
	static playBySystem(){
		let randomItem = cellItemList[Math.floor(Math.random()*cellItemList.length)];
		let systemPlayer = gamePlayerList.find((p)=>{
			return (p.type && p.type == 'System')
		})
		let playContainer = $(".play-conatiner");
		playContainer.attr('data-current-key',systemPlayer.id);

		$("div.cell:eq("+(randomItem-1)+")").trigger("click");
	}
	appendBoard(playContainer)
	{
		var rows = [1,4,7];
		
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
						let inputObj = {
									turn : turn, 
									cell : cellValue,
									totalclick : totalHit,
									gameId : gameId
								};
						if (playMode == 1) {
							if (turn == 0) {
								setTimeout(()=>{
									Board.playBySystem()
								},3000)
							}
							else {
								let humanPlayer = gamePlayerList.find((p)=>{
									return (p.type == undefined)
								})
								playContainer.attr('data-current-key',humanPlayer.id);
							}
							this.defineResult(playContainer, inputObj);
							cellItemList.splice(cellItemList.indexOf(cellValue),1);

						} else {
							socket.emit('players-result', inputObj);
						}

					}
					
					
				})
				.appendTo(row);
			}
		}
		socket.on('game-players-result', (responseData)=>{
			this.defineResult(playContainer, responseData);
		
			// setTimeout(()=>{
			// 	let newKey = playContainer.attr('data-current-key');
			// 	if (newKey == response.hitUser['id']) {
			// 		playContainer.empty()
			// 		playContainer.addClass('hidden');
			// 		$(".result-container").removeClass('hidden');
			// 		$(".result-container .result-msg").html("<img src='thumbs-up.png' width='300' /><br/>Opponent left the game, You win");	
			// 	}
			// },5000);
			
			
		})
	}
	defineResult(playContainer, responseData)
	{
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
		/*if (playMode == 2) { //omly for multi user play
			setTimeout(()=>{
				if (totalHit == $("div.cell[data-click=false]").length) {
					$(".result-container .result-msg").html("<img src='"+icons.success+"' width='300' /><br/> Opponent left the game, You win");	
					this.audioPlay(1);
					$(".result-container").fadeIn(300);
				}
			},30000)
		}*/
		turn = (turn == 0)? 1:0;
		
		let result = this.calculateResult();

		if (result.status == false) { // result not declared
			this.displayTurnContainer(turn);
			playContainer.attr({
				'data-turn' : turn,
				'data-current-key':gamePlayerList[turn].id
			});
		} else { // result is declared
			setTimeout(()=>{
				playContainer.fadeOut();
				playContainer.empty()
				if (result.winUser == null ) {
					$(".result-container .result-msg").html("<img src='"+icons.draw+"' width='300' /><br/>"+result.msg);
					this.audioPlay(1);
				} else {
					if (result.winUser.id == currentPlayer.id) {
						$(".result-container .result-msg").html("<img src='"+icons.success+"' width='300' /><br/>"+result.msg);	
						this.audioPlay(1);
					} else {
						$(".result-container .result-msg").html("<img src='"+icons.fail+"' width='300' /><br/>"+result.msg);	
						this.audioPlay(2);
					}
				}
				
				$(".result-container").fadeIn(300);
			},2000)
		}
	}
	audioPlay(type) {
		let audioElement = document.createElement("audio");
		if (type == 1) {
			audioElement.setAttribute('src', audios.success);
		} else {
			audioElement.setAttribute('src', audios.fail);
		}
		audioElement.loop = true;
		audioElement.play();
	}
	displayTurnContainer(turn) {
		let text = '';
		if (gamePlayerList[turn].id == currentPlayer.id) {
			text = "Now your's turn";
		} else {
			text = "Now "+gamePlayerList[turn].name+"'s turns";
		}
		$(".turn-conatiner .turn-container-text").text(text);
		//playContainer.attr('data-current-key',gamePlayerList[turn].id);
		$(".turn-conatiner").fadeIn(300);
		setTimeout(()=>{
			$(".turn-conatiner").fadeOut();
		},2000)
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
				if (playMode == 1 || gamePlayerList[0].id == currentPlayer.id) {
					msg =  'You won the game'
				}
				return {status : true, winUser : gamePlayerList[0], msg : msg };
			} else if (searchForArray(this.winCombinations, player2Result) == true) {
				
				return {status : true, winUser : gamePlayerList[1] , msg : gamePlayerList[1].name + ' won the game'};
			} else {
				if (totalHit == $("div.cell").length){
					
					return {status : true, winUser: null, msg : 'Match is drawn'};
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

		playerContainer = $(".player-conatiner");

		
		var playContainer = $("<div/>")
							.addClass('play-conatiner')
							.attr({
								'data-turn' : 0,
								
								'data-current-key' : this.currentUserKey,
							})
							.appendTo(this.selector);
		let crossLineContainer = $("<div/>")
								 .attr({
								 	class : 'cross-line'
								 })
								 .appendTo(playContainer)
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
			let name = nameInput.val();
			if (name != '') {
				currentPlayer = {
					name : name,
					id : this.currentUserKey,
					request: true,
					gameId :gameId,
					result : []
				};
				let reqId = $(event.target).attr("data-request");
				let preDefinedGameId = $(event.target).attr("data-game");
				if (reqId != "") {
					
					/*let requestUser = playerList.find((p)=>{
						return p.id == reqId;
					})*/
					currentPlayer.requestUser = reqId;
					currentPlayer.request = false;
					if (preDefinedGameId) {
						currentPlayer.gameId = gameId = preDefinedGameId;
					}
				}
				socket.emit('players', currentPlayer);
				playerForm.fadeOut();
				playMode = 2;
			}
			
		})
		.appendTo(playerForm)

		mulitPlayerBtn.bind("click",()=>{
			playerContainer.fadeIn(300);
			initContainer.fadeOut();
			playMode = 2;
			gameId = makeid();
		});
		singlePlayerBtn.bind("click", ()=>{
			
			initContainer.fadeOut();
			playMode = 1;
			gameId = makeid();
			currentPlayer = {
				name : 'Me',
				id : this.currentUserKey,
				request: true,
				gameId :gameId,
				result : [],
			};
			gamePlayerList.push(currentPlayer)
			let systemPlayer  = {
				name : 'Computer',
				type : 'System',
				id : makeid(),
				request: false,
				gameId :gameId,
				result : [],
			};
			gamePlayerList.push(systemPlayer);
			let tossIndex = Math.floor(Math.random()*tossArr.length);
			CorssGame.buildToss(tossIndex);

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
									<div class="spinner"></div>
									`;
							$(".player-display-container")
							.fadeIn(300)
							
							.html(html);
							setTimeout(()=>{
								if (gameOn == false) {
									html = `
										<p>Woops</p>
										<p>No one interested</p>
										`;
									$(".player-display-container")
									.html(html);
									setTimeout(()=>{
										window.location.reload();
									},3000)
								}
							},30000);
						
						} else {
							$(".notification-container").empty()
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
								"data-request" : data.id,
								"data-game" : data.gameId
							})
							.bind("click", ()=>{
								let reqId = data.id;
								let requestUser = playerList.find((p)=>{
									return p.id == reqId;
								})
								if(requestUser && requestUser.request == undefined) {
									$(".alert-container").html("Sorry, "+requestUser.name+" is busy now").fadeIn(300)
									
									$(".notification-container").fadeOut()
								} else {
									$("#btnNameInput").attr({
										"data-request": reqId,
										"data-game" : data.gameId
									});
									
									initContainer.fadeOut();
									playerContainer.fadeIn(300);
									playerForm.fadeIn(300);
									$(".notification-container").fadeOut();
								}
							})
							.appendTo(btnPanel)
							$("<button />")
							.text("No")
							.attr({
								class : "btn btn-confirm"
							})
							.bind("click", ()=>{
								$(".notification-container").fadeOut();
							})
							.appendTo(btnPanel)
							
							$(".notification-container")
							.fadeIn(300);
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
									<p>Please wait toss</p>
									`;
							$(".player-display-container")
							.fadeIn(300)
							.html(html);
						} else {
							
							let requestUser = playerList[requestSendUserId];
							html = `
									<p>Please wait for toss</p>
									`;
							$(".player-display-container")
							.fadeIn(300)
							.html(html);
						}

						if (playerList[requestSendUserId].id == currentPlayer.id || playerList[requestAcceptUserId].id == currentPlayer.id) {
							setTimeout(()=>{
								$(".player-display-container").fadeOut();
								delete playerList[requestSendUserId]['request'];
								delete playerList[requestAcceptUserId]['request'];
								gamePlayerList.push(playerList[requestSendUserId]);
								gamePlayerList.push(playerList[requestAcceptUserId]);
								if (currentPlayer.id == gamePlayerList[requestAcceptUserId].id) {
									let tossIndex = Math.floor(Math.random()*tossArr.length);
									socket.emit('toss-emmit', {toss : tossIndex, gameId : data.gameId});
								}
								gameOn = true;
								
							},2000)
						}
					}
				}
			}
		});
		socket.on("toss-emmit-result", (data)=>{
			let tossIndex = data.toss;
			CorssGame.buildToss(tossIndex);
			/*let requestUser = playerList.findIndex((p)=>{
				return p.id == data;
			})
			if(requestUser && playerList[requestUser] && playerList[requestUser]['request'] != undefined) {
				delete playerList[requestUser]['request'];
			}*/
		})
	}

	static buildToss(tossIndex){
		/* toss component*/
		$(".toss-container")
		.fadeIn(300)
		let tossContent = $(".toss-container .toss-content");
		$("<p/>")
		.html(
			gamePlayerList[0].name +` is Head <br/> and <br/>`+
			gamePlayerList[1].name +` is Tail
			`)
		.appendTo(tossContent)
		$("<img/>")
		.attr({
			src : icons.toss,
			class : 'toss-img'
		})
		.appendTo(tossContent);
		setTimeout(()=>{ // toss happend
			tossContent.empty();
			let winPlayer = gamePlayerList[tossIndex];
			let tossMsg = gamePlayerList[tossIndex].name+' wins the toss and starts the game';
			if(currentPlayer.id == gamePlayerList[tossIndex].id) {
				tossMsg = 'You win the toss and start the game';
			}
			$("<p/>")
			.html("<strong style='font-size:40px'>"+tossArr[tossIndex]+"</strong><br/>"+tossMsg)
			.appendTo(tossContent);

			setTimeout(()=>{ // appare the borad for game
				$(".toss-container")
				.fadeOut();
				let playContainer = $(".play-conatiner");
				playContainer.attr('data-turn',tossIndex);
				playContainer.attr('data-current-key',winPlayer.id);
				let board = new Board;
				board.appendBoard(playContainer);
				playContainer.fadeIn(300);
				if(playMode == 1 && tossIndex == 1) { // only for single player 
					Board.playBySystem();
				}
			},5000)

		},5000);
		/* END toss component*/
	}
	
}

$(()=>{
	let corss = new CorssGame(".cross-game-container");
})