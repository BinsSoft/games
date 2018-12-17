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
	constructor(public el: ElementRef) { }

	ngOnInit() {

		this.totalBlock = this.cell * this.cell;
		this.totalCell = this.totalBlock * this.totalBlock;
		this.el.nativeElement.style.display = 'inline-block';
		this.el.nativeElement.style.width = (this.cellWidth*(this.totalBlock+1)).toString()+'px';
		/*this.el.nativeElement.appendChild(this.generateCells());
		this.el.nativeElement.querySelectorAll('td').forEach((item, index)=>{
			item.setAttribute('data-block', index.toString());
			item.appendChild( this.generateCells(true, item) );
		});*/
		this.generateCells();
	}

	generateCells() {
		let row: number = 1;
		let column: number = 1;
		for (let c = 1; c <= this.totalCell; c++) {
			let span: any = document.createElement('span');
			span.style['display'] = 'inline-block';
			span.style['height'] = this.cellWidth.toString()+'px';
			span.style['width'] = this.cellWidth.toString()+'px';
			span.style['border'] = '1px solid #CCC';
			span.innerText = c.toString();
			span.setAttribute('data-column',column.toString());
			span.setAttribute('data-row',row.toString());
			if (column === this.totalBlock) {
				column = 1;
				row += 1;
			} else {
				column += 1;
			}

			console.log(span);
			this.el.nativeElement.appendChild(span);
		}
		
	}

	generatecellText() {
		/*let cellCount = 1;
		let totalBlocks: number = 0;
		totalBlocks = this.totalCell * this.totalCell;
		for (let c = 1; c < 2; c++) {
			this.el.nativeElement.querySelectorAll('td[data-block]').forEach((block)=>{
				// block.querySelectorAll('td[data-child]')		
			});
		}*/
		/*this.el.nativeElement.querySelectorAll('td[data-child]').forEach((item)=>{
			
			item.innerText = cellCount;
			if (cellCount >= totalBlocks) {
				cellCount = 1;
			} else {
				cellCount++;
			}
		});*/
	}


}
