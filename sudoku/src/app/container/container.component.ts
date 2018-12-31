import { Component, OnInit , ElementRef, Input} from '@angular/core';
import SampleData from "../../assets/SampleData.json"; 

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
	cellGenerateOrder: Array<any> = [5];
	gameMode : string = 'e';
	resultCellObj: any = {};

	constructor(public el: ElementRef) { }

	ngOnInit() {

		this.totalBlock = this.cell * this.cell;
		this.totalCell = this.totalBlock * this.totalBlock;
		this.el.nativeElement.style.display = 'inline-block';

		this.changeMode(this.gameMode);
	}

	getRandomArrayElements(arr, count) {
	    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
	    while (i-- > min) {
	        index = Math.floor((i + 1) * Math.random());
	        temp = shuffled[index];
	        shuffled[index] = shuffled[i];
	        shuffled[i] = temp;
	    }
	    return shuffled.slice(min);
	}


	changeMode(mode:any=''){
		if (mode != ''){
			this.gameMode = mode;
		}
		let removeCellCount = 0;
		if (this.gameMode === 'e') {
			removeCellCount = 30;
		} else if (this.gameMode === 'm') {
			removeCellCount = 40;
		} else if (this.gameMode === 'h') {
			removeCellCount = 50;
		}
		this.regenerateCells();
		let nodeArr = Array.prototype.slice.call(document.querySelectorAll("td"));
		let randomNods = this.getRandomArrayElements(nodeArr, removeCellCount);
		randomNods.forEach((e)=>{
			e.innerHTML = "";
			 e.classList.remove("display-cell"); 
		});

	}
	regenerateCells(regenerate: boolean = false) {
		if (regenerate === true) {
			let randomIndex = Math.floor(Math.random()*SampleData.length);
			this.resultCellObj = SampleData[randomIndex];
		}
		this.generateCells(regenerate);
		this.generatecellText();
	}


	generateCells(regenerate:boolean = false) {
		let row: number = 1;
		let column: number = 1;
		let block: number = 1;
		let blockRowCount: number = 0;
		
		this.el.nativeElement.querySelector("#content").innerHTML = "";

		let table = document.createElement('table');
		table.setAttribute("cellpadding","0");
		table.setAttribute("cellspacing","0");
		table.setAttribute("border","0");
		this.el.nativeElement.querySelector("#content").appendChild(table);
		let tr = document.createElement('tr');
		table.appendChild(tr);

		for (let c = 1; c <= this.totalCell; c++) {
			let td: any = document.createElement('td');
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

			if (regenerate === true) {
				let cellvalue = this.resultCellObj[row][(c-1)%this.totalBlock];
				td.innerText = cellvalue;
			}
			
			if (column%this.cell === 0 ) {
				td.style["border-right"] = '2px solid #000';
			} else if (column === 1) {
				td.style["border-left"] = '2px solid #000';
				td.style["border-right"] = '1px solid #CCC';
			} else {
				td.style["border-right"] = '1px solid #CCC';
			}
			if (row === 1) {
				td.style["border-top"] = '2px solid #000';
				td.style["border-bottom"] = '1px solid #CCC';
			} else if (row%this.cell === 0) {
				td.style["border-bottom"] = '2px solid #000';
			} else {
				td.style["border-bottom"] = '1px solid #CCC';
			}

			td.classList.add("display-cell");
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
		

		for (let row = 1; row<=this.totalBlock; row++ ) {
			let blankElements = document.querySelectorAll("td[data-row='"+row+"']:not([data-value])");	
			

			blankElements.forEach((element:any)=>{

				let fullCells = [];
				let cellArr = [1,2,3,4,5,6,7,8,9];

				let fullElements = document.querySelectorAll("td[data-row='"+row+"']");
				fullElements.forEach((e:any)=>{
					// console.log("row  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1) {
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					}
					else if (cellArr.indexOf( Number(e.dataset.tmpvalue) ) > -1) {
						cellArr.splice(cellArr.indexOf( Number(e.dataset.tmpvalue) ), 1);
					}
				});


				// console.log("after row:", cellArr);
				let lastCell = cellArr[0];
				let colElements = document.querySelectorAll("td[data-column='"+element.dataset.column+"']");

				colElements.forEach((e:any)=>{
					// console.log("column  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1){
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					} else if (cellArr.indexOf( Number(e.dataset.tmpvalue) ) > -1) {
						cellArr.splice(cellArr.indexOf( Number(e.dataset.tmpvalue) ), 1);
					}
				});
				// console.log("after column", cellArr);
				let blockElements = document.querySelectorAll("td[data-block='"+element.dataset.block+"']");
				if (cellArr.length > 0) {
					lastCell = cellArr[0];
				}
				blockElements.forEach((e:any)=>{
					// console.log("block  : "+e.dataset.value);
					if (cellArr.indexOf( Number(e.dataset.value) ) > -1){
						cellArr.splice(cellArr.indexOf( Number(e.dataset.value) ), 1);
					} else if (cellArr.indexOf( Number(e.dataset.tmpvalue) ) > -1) {
						cellArr.splice(cellArr.indexOf( Number(e.dataset.tmpvalue) ), 1);
					}
				});
			
				
				
				 // console.log("after block", cellArr);

				let cell = this.getProperCell(cellArr, element);
				if (cell) {

					element.setAttribute("data-value", cell);
					element.innerText = cell;
					cellArr.splice( cellArr.indexOf(cell) , 1 );
				} else {
					element.setAttribute("data-tmpvalue", lastCell);
					cellArr.splice( cellArr.indexOf(lastCell) , 1 );
				}
			});

			let blankRowElements = document.querySelectorAll("td[data-tmpvalue]");
			blankRowElements.forEach((element:any, index)=>{
					let cellValue = element.dataset.tmpvalue;
					let filterCell = this.swapLastCell(element, cellValue);
					if (filterCell.length > 0) {
						let filterCellValue = (filterCell[0].dataset.tmpvalue)? filterCell[0].dataset.tmpvalue: filterCell[0].dataset.value;
						element.setAttribute('data-value', filterCellValue );
						element.innerText = filterCellValue;
						element.removeAttribute('data-tmpvalue')


						filterCell[0].setAttribute('data-value', cellValue );
						filterCell[0].innerText = cellValue;
					}

			});
		}
		

		if (document.querySelectorAll("td[data-value]").length !== this.totalCell) {
			this.regenerateCells(true);
		} else {
			this.resultCellObj = {};
			document.querySelectorAll("td[data-value]").forEach((element:any)=>{
				if (this.resultCellObj[ element.dataset.row ] === undefined) {
					this.resultCellObj[ element.dataset.row ] = [];
				}
				this.resultCellObj[ element.dataset.row ].push( Number(element.dataset.value) );
				element.removeAttribute("data-value");
				element.removeAttribute("data-tmpvalue");
			});

			// console.log("proper", this.resultCellObj);
		}
	}

	swapLastCell( targetElement, targetCell) {
		let targetRow = targetElement.dataset.row;
		let targetBlock = targetElement.dataset.block;
		let targetColumn = targetElement.dataset.column;
		// let filterCell = null;
		let rowCells = document.querySelectorAll("td[data-row='"+targetRow+"']:not([data-tmpvalue='"+targetCell+"'])");
		// console.log(rowCells);
		let filterNodes = [];
		rowCells.forEach((element:any, index)=>{
			let filterData = {
				index: index,
				column : element.dataset.column,
				block : element.dataset.block,
				value : (element.dataset.tmpvalue)?element.dataset.tmpvalue:element.dataset.value,
				field : (element.dataset.tmpvalue)?"data-tmpvalue":"data-value",
			};
			if (
				document.querySelectorAll("td[data-column='"+filterData.column+"']["+filterData.field+"='"+targetCell+"']").length === 0
				&&
				document.querySelectorAll("td[data-column='"+targetColumn+"']["+filterData.field+"='"+filterData.value+"']").length === 0
				&&
				document.querySelectorAll("td[data-block='"+filterData.block+"']["+filterData.field+"='"+targetCell+"']").length === 0
				&&
				document.querySelectorAll("td[data-block='"+targetBlock+"']["+filterData.field+"='"+filterData.value+"']").length === 0
				
			) {
				filterNodes.push(element);
			}
			// console.log(filterData);
		});
		//console.log(rowCells);
		return filterNodes;
	}

	getProperCell(cellArr, targetElement, cellIndex = 0) {
		
		let targetColumn = targetElement.dataset.column;
		let targetRow = targetElement.dataset.row;
		let targetBlock = targetElement.dataset.block;
		let randormIndex = (targetBlock === "5" || targetBlock=== "1" || targetBlock==="9")? Math.floor(Math.random()*cellArr.length) : cellIndex;
		let cell = cellArr[  randormIndex ];

		// console.log(cellArr, cell, targetElement);
		cellArr.splice( cellArr.indexOf(cell) , 1 );
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
		
		return cell;
	}



}
