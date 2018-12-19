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
	cellGenerateOrder: Array<any> = [5,1,9,3, 7,2,4,6, 8];
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

		let blankElements = document.querySelectorAll("td:not([data-value])");
		// console.log(blankElements);
		console.log(this.allCells);
		/*blankElements.forEach((item:any)=> {
			let block = item.dataset.block;
			let cellArr = this.allCells[block];
			let cell = this.getProperCell(cellArr, item);
			if (cell) {
				item.setAttribute("data-value", cell);
				item.innerText = cell;
				this.allCells[block].splice( this.allCells[block].indexOf(cell) , 1 );
			}
		});*/
	}

	getProperCell(cellArr, targetElement) {
		let randormIndex = Math.floor(Math.random()*cellArr.length);
		let cell = cellArr[  randormIndex ];
		let targetColumn = targetElement.dataset.column;
		let targetRow = targetElement.dataset.row;
		let targetBlock = targetElement.dataset.block;
		if (cellArr.length > 0 
			&&
			(document.querySelectorAll("td[data-column='"+targetColumn+"'][data-value='"+cell+"']").length > 0 
			||
			document.querySelectorAll("td[data-row='"+targetRow+"'][data-value='"+cell+"']").length > 0
			)
			) {
			
			cellArr.splice( cellArr.indexOf(cell) , 1 );
			console.log(cell+' is repeat', targetElement, cellArr);
			return this.getProperCell(cellArr, targetElement);
		}
		return cell;
	}



}
