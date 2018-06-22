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
var totalHit = 0;

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
					let currentUser = playerList[turn];
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
					}
					
				})
				.appendTo(row);
			}
		}
		socket.on('game-players-result', (responseData)=>{
			let turn = responseData.turn;
			let cellValue = responseData.cell;
			let hitUser = playerList[turn];
			playerList[turn].result.push(cellValue);
			let html = '';
			if (turn == 0) {
				html = '&#x2716';
			} else {
				html = '&#x25EF;';
			}
			$("div.cell[data-value="+cellValue+"]")
			.html('<div class="cell-content">'+html+'</div>')
			.attr('data-click', 'false');
			totalHit = $("div.cell[data-click=false]").length;
			turn = (turn == 0)? 1:0;
			let result = this.calculateResult();
			if (result == false) { // result not declared
				//alert(playerList[turn].name + "'s turn now");
				playContainer.attr({
					'data-turn' : turn
				});
			}
			
		})
	}
	calculateResult()
	{
		if(totalHit <= $("div.cell").length ) {
			let player1Result = playerList[0].result;
			let player2Result = playerList[1].result;
			player1Result.sort();
			player2Result.sort();
			if (searchForArray(this.winCombinations, player1Result) == true) {
				alert( playerList[0].name + ' won the game' );
				return true;
			} else if (searchForArray(this.winCombinations, player2Result) == true) {
				alert( playerList[1].name + ' won the game' );
				return true;
			} else {
				if (totalHit == $("div.cell").length){
					alert( 'Match is drawn' );
					return true;
				}
					
			}

		}
		return false;
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

		var playerContainer = $("<div/>")
							.addClass('player-conatiner')
							.appendTo(this.selector);
		let playerDisplayContainer = $("<div/>").addClass('player-display-container').appendTo(playerContainer)
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
			class : 'btn-enter'
		})
		.bind('click',()=>{
			let currentUser = {
				name : nameInput.val(),
				id : this.currentUserKey,
				result : []
			};
			socket.emit('players', currentUser);
			playerForm.addClass('hidden');
		})
		.appendTo(playerForm)

		
		socket.on('game-players', function(data){
			let turn = playContainer.attr('data-turn');
			playerDisplayContainer.empty();
			playerList.push(data);
			for (let p of playerList) {
				$("<p/>")
				.attr({
					"data-name" : p.name
				})
				.html("<strong>Player :</strong>"+p.name)
				.appendTo(playerDisplayContainer);
			}
			if (playerList.length == 2) {
				let board =new Board;
				board.appendBoard(playContainer)
				playContainer.removeClass('hidden');
				alert("Now Game will be started");
				alert(playerList[turn].name + "'s turn now");
			}
		});
	}

	
	
}

$(()=>{
	let corss = new CorssGame(".cross-game-container");
})