class CorssGame {
    
	constructor(selector){
		this.selector = $(selector);
		this.row = [1,4,7];
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
		this.players = [
			{
				name : '',
				result : []
			},
			{
				name : '',
				result : []
			},
		];
		this.playerTurn = 1;
		this.totalClick = 0;
		this.init()
	}
	init(){

		var playerContainer = $("<div/>")
							.addClass('player-conatiner')
							.appendTo(this.selector);
		let playerDisplayContainer = $("<div/>").addClass('player-display-container').appendTo(playerContainer)
		let playerForm = $("<div/>")
						.addClass('player-form')
						.appendTo(playerContainer);
		let nameInput = $("<input />")
		.attr({
			type : 'text',
			placeholder : 'Enter Name'
		})
		.appendTo(playerForm)
		$("<input />")
		.attr({
			type : 'button',
			value : 'Enter'
		})
		.bind('click',()=>{
			//var keys = Object.keys(this.players);
			$(this.players).each((i,player)=>{
				let attrName = playerDisplayContainer.find('p:eq('+i+')').attr('data-name');
				this.players[i].name = (attrName != undefined)? attrName :'';
			})
			let blankIndex = this.players.findIndex((p)=>{
				return p.name == '';
			})
			this.players[blankIndex].name = nameInput.val()

			socket.emit('players', this.players);

			playerForm.addClass('hidden');

		})
		.appendTo(playerForm)

		var playContainer = $("<div/>")
							.addClass('play-conatiner hidden')
							.appendTo(this.selector);
		var titleContainer = $("<div/>")
					.addClass('title-container')
					.appendTo(playContainer);
		var turnContainer = $("<div/>")
							.addClass('turn-container')
							.text('Now '+this.players[this.playerTurn].name+' Turn')
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
				let cellValue = this.row[r]+c;
				$("<div/>")
				.attr({
					'data-value' : cellValue,
					'data-click' : 'true'
				})
				.addClass('cell')
				.bind('click',()=>{
					if ($("div.cell[data-value="+cellValue+"]").attr('data-click') == 'true') {
						this.players[this.playerTurn].result.push(cellValue);
						let html = '';
						if (this.playerTurn == 1) {
							html = '&#x2716';
						} else {
							html = '&#x25EF;';
						}
						$("div.cell[data-value="+cellValue+"]")
							.html('<div class="cell-content">'+html+'</div>')
							.attr('data-click', 'false');
	
						this.playerTurn = (this.playerTurn == 1) ? 2:1;
						turnContainer.text('Now '+this.players[this.playerTurn].name+' Turn');
						this.totalClick ++;
						this.calculateResult();
						
					}
				})
				.appendTo(row);
			}
		}

		
		socket.on('game-players', function(data){
			playerDisplayContainer.empty();
			for (let p in data) {
				let name  = 'waiting ...';
				let attrName  = '';
				if (data[p].name != '') {
					name  = attrName = data[p].name;
				}
				$("<p/>")
				.attr({
					"data-name" : attrName
				})
				.html("<strong>Player :</strong>"+name)
				.appendTo(playerDisplayContainer);
			}
			let blankIndex = data.findIndex((p)=>{
				return p.name == '';
			})
			if(blankIndex == -1) {
				$("<p/>")
				.html('Game will start shortly')
				.appendTo(playerDisplayContainer);
			}
		});
	}
	calculateResult()
	{
		if(this.totalClick < $("div.cell").length ) {
			let player1Result = this.players[1].result;
			let player2Result = this.players[2].result;
			player1Result.sort();
			player2Result.sort();

			if (this.searchForArray(this.winCombinations, player1Result) > -1) {
				this.resultContainer.text( this.players[1].name + ' won the game' );
			} else if (this.searchForArray(this.winCombinations, player2Result) > -1) {
				this.resultContainer.text( this.players[2].name + ' won the game' );
			}

		} else {
			this.resultContainer.text( 'Match is drawn' );
		}
	}
	searchForArray(haystack, needle){
		var i, j, current;
		for(i = 0; i < haystack.length; ++i){
			if(needle.length === haystack[i].length){
			  current = haystack[i];
			  for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
			  if(j === needle.length)
			    return i;
			}
		}
		return -1;
	}
}

$(()=>{
	let corss = new CorssGame(".cross-game-container");
})