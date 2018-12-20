import { Component, OnInit , ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

	@Input("cell") private cell: number;
	totalCell: number = 0;
	totalBlock: number = 0;
	cellWidth: number = 50;
	cellGenerateOrder: Array<any> = [5,1,9];
	allCells: any = {
		"1" : [1,2,3,4,5,6,7,8,9],
		"2" : [1,2,3,4,5,6,7,8,9],
		"3" : [1,2,3,4,5,6,7,8,9],
		"4" : [1,2,3,4,5,6,7,8,9],
		"5" : [1,2,3,4,5,6,7,8,9],
		"6" : [1,2,3,4,5,6,7,8,9],
		"7" : [1,2,3,4,5,6,7,8,9],
		"8" : [1,2,3,4,5,6,7,8,9],
		"9" : [1,2,3,4,5,6,7,8,9]
	};

	constructor(public el: ElementRef) { }

	ngOnInit() {

		this.totalBlock = this.cell * this.cell;
		this.totalCell = this.totalBlock * this.totalBlock;
		this.el.nativeElement.style.display = 'inline-block';
		//this.el.nativeElement.style.width = (this.cellWidth*(this.totalBlock+1)).toString()+'px';
		this.generateCells();
		this.generatecellText();
	}

	generateCells() {
		let row: number = 1;
		let column: number = 1;
		let block: number = 1;
		let blockRowCount: number = 0;
		let table = document.createElement('table');
		this.el.nativeElement.appendChild(table);
		let tr = document.createElement('tr');
		table.appendChild(tr);

		for (let c = 1; c <= this.totalCell; c++) {
			let td: any = document.createElement('td');
			// td.innerText = column.toString();
			td.setAttribute('data-column',column.toString());
			td.setAttribute('data-row',row.toString());

			let module = c%this.totalBlock;
			if (module >= 1 && module < 3) {
				block = 1 + blockRowCount ;
			} else if (module > 3 && module<6) {
				block = 2 + blockRowCount ;
			} else if ((module > 6 && module < 9) || module === 0) {
				block = 3 + blockRowCount ;
			}
			if (c%(this.cell * this.totalBlock) === 0) {
				blockRowCount += this.cell;	
			}
			td.setAttribute('data-block',block.toString());
			
			tr.appendChild(td);
			if (column === this.totalBlock) {
				column = 1;
				row += 1;
				tr = document.createElement('tr');
				table.appendChild(tr);
			} else {
				column += 1;
			}
		}
		
	}

	generatecellText() {
		this.cellGenerateOrder.forEach((block)=>{
			let midBlockElements = document.querySelectorAll("td[data-block='"+block+"']");
			let cellArr = [1,2,3,4,5,6,7,8,9]; // this.allCells[block];
			midBlockElements.forEach((item:any)=> {
					
				let cell = this.getProperCell(cellArr, item);
				if (cell) {
					item.setAttribute("data-value", cell);
					item.innerText = cell;
					this.allCells[block].splice( this.allCells[block].indexOf(cell) , 1 );
				}
			});
		});

		
		// console.log(blankElements);
		//console.log(this.allCells);
		for (let row = 1; row<=this.totalBlock; row++ ) {
			let blankElements = document.querySelectorAll("td[data-row='"+row+"']:not([data-value])");	
			

			blankElements.forEach((element:any)=>{

				let fullElements = document.querySelectorAll("td[data-row='"+row+"'][data-value]");
				let fullCells = [];
				let cellArr = [1,2,3,4,5,6,7,8,9];

				fullElements.forEach((e:any)=>{
					console.log("row  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1) {
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					}
				});
				console.log(cellArr);
				let lastCell = cellArr[0];
				let colElements = document.querySelectorAll("td[data-column='"+element.dataset.column+"'][data-value]");

				colElements.forEach((e:any)=>{
					console.log("column  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1){
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					}
				});

				let blockElements = document.querySelectorAll("td[data-block='"+element.dataset.block+"'][data-value]");
				if (cellArr.length > 0) {
					lastCell = cellArr[0];
				}
				blockElements.forEach((e:any)=>{
					console.log("block  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1){
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					}
				});
			
				
				
				console.log(cellArr);

				let cell = this.getProperCell(cellArr, element);
				if (cell) {

					element.setAttribute("data-value", cell);
					element.innerText = cell;
					this.allCells[element.dataset.block].splice( this.allCells[element.dataset.block].indexOf(cell) , 1 );
					cellArr.splice( cellArr.indexOf(cell) , 1 );
				} else {
					/*console.log("last cell :"+lastCell);
					let previousElement = this.swapLastCell( element, element, lastCell);
					element.setAttribute("data-value", previousElement.dataset.value);
					element.innerText = previousElement.dataset.value;
					previousElement.setAttribute("data-value", lastCell);
					previousElement.innerText = lastCell;*/
				}
			});
		}	
		
	}

	swapLastCell( targetElement, lastElement, lastCell) {
		let previousElement = targetElement.previousSibling;
		let colElements = document.querySelectorAll("td[data-column='"+lastElement.dataset.column+"'][data-value='"+previousElement.dataset.value+"']");
		let prevColElements = document.querySelectorAll("td[data-column='"+previousElement.dataset.column+"'][data-value='"+lastCell+"']");
		if (colElements.length > 0 || prevColElements.length > 0) {
			return this.swapLastCell( previousElement, lastElement, lastCell);
		}
		let previousValue = previousElement.dataset.value;
		
		return previousElement;
	}

	getProperCell(cellArr, targetElement, cellIndex = 0) {
		
		let targetColumn = targetElement.dataset.column;
		let targetRow = targetElement.dataset.row;
		let targetBlock = targetElement.dataset.block;
		let randormIndex = (targetBlock === "5" || targetBlock=== "1" || targetBlock==="9")? Math.floor(Math.random()*cellArr.length) : cellIndex;
		let cell = cellArr[  randormIndex ];

		console.log(cellArr, cell, targetElement);
		if (cellArr.length > 0 
			&&
			(
			document.querySelectorAll("td[data-column='"+targetColumn+"'][data-value='"+cell+"']").length > 0 
			||
			document.querySelectorAll("td[data-row='"+targetRow+"'][data-value='"+cell+"']").length > 0

			)

			) {
			return this.getProperCell(cellArr, targetElement);
		}
		cellArr.splice( cellArr.indexOf(cell) , 1 );
		return cell;
	}



}
