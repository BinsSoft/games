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
	cellGenerateOrder: Array<any> = [5];
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
	cellColors: Array<any> = [
	"#000000","#ff0000", "#0037ff", 
	"#0037ff", "#000000", "#ff0000", 
	"#000000", "#ff0000",  "#0037ff",]

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
		table.setAttribute("cellpadding",0);
		table.setAttribute("cellspacing",0);
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
			td.style.border = "1px solid "+this.cellColors[(block-1)];
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
			/*midBlockElements.forEach((item:any)=> {
					
				let cell = this.getProperCell(cellArr, item);
				if (cell) {
					item.setAttribute("data-value", cell);
					item.innerText = cell;
					this.allCells[block].splice( this.allCells[block].indexOf(cell) , 1 );
				}
			});*/
		});

		
		// console.log(blankElements);
		//console.log(this.allCells);
		for (let row = 1; row<=this.totalBlock-1; row++ ) {
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
					this.allCells[element.dataset.block].splice( this.allCells[element.dataset.block].indexOf(cell) , 1 );
					cellArr.splice( cellArr.indexOf(cell) , 1 );
				} else {
					element.setAttribute("data-tmpvalue", lastCell);
					this.allCells[element.dataset.block].splice( this.allCells[element.dataset.block].indexOf(lastCell) , 1 );
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
					console.log(cellValue, filterCell);

			});
		}
		
	}

	swapLastCell( targetElement, targetCell) {
		let targetRow = targetElement.dataset.row;
		let targetBlock = targetElement.dataset.block;
		let targetColumn = targetElement.dataset.column;
		// let filterCell = null;
		let rowCells = document.querySelectorAll("td[data-row='"+targetRow+"']:not([data-tmpvalue='"+targetCell+"'])");
		console.log(rowCells);
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
