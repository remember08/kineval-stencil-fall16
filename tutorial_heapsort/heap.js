
// o = new create_minheap();
// oo = new create_minheap();
// ooo = new create_minheap();
// oooo = new create_minheap();
// ooooo = new create_minheap();
// var unsorted = [[oooo,5949],[ooooo,8320],[oo,832],[ooo,1467],[o,531]];
// var sorted = new Array();

function create_minheap(){
	this.element = new Array();
	this.insert = minheap_insert;
	this.extract = minheap_extract;
	//this.print = minheap_print;
}


// define insert function for min binary heap
function minheap_insert(new_element,num) {
	//document.write("2");
	this.element.push([new_element,num]);
	var new_element_index = this.element.length - 1;
	while(new_element_index != 0 && this.element[new_element_index][1] < this.element[Math.floor((new_element_index-1)/2)][1])
	{
		this.element[new_element_index] = this.element[Math.floor((new_element_index-1)/2)];
		this.element[Math.floor((new_element_index-1)/2)] = [new_element,num];
		new_element_index = Math.floor((new_element_index-1)/2);
	}
}



// define extract function for min binary heap
function minheap_extract() {
	//document.write("<p>3</p>");
	if(this.element.length == 0){return;}
	if(this.element.length == 1){return this.element.pop()[0];}
	var min = this.element[0][0];
	this.element[0] = this.element.pop();
	var old_element_index = 0;
	var temp = this.element[0];
	while(old_element_index*2+1 <= this.element.length-1){
		if(old_element_index*2+1 == this.element.length-1){
			if(this.element[old_element_index*2+1][1] < this.element[old_element_index][1]){
				this.element[old_element_index] = this.element[old_element_index*2+1];
				this.element[old_element_index*2+1] = temp;
				old_element_index = old_element_index*2+1;
			}	//swap
			else break;	
		}	//only have one child
		else{
			if(this.element[old_element_index*2+1][1] < this.element[old_element_index*2+2][1]){
				this.element[old_element_index] = this.element[old_element_index*2+1];
				this.element[old_element_index*2+1] = temp;
				old_element_index = old_element_index*2+1;		
			}	//swap
			else{
				this.element[old_element_index] = this.element[old_element_index*2+2];
				this.element[old_element_index*2+2] = temp;
				old_element_index = old_element_index*2+2;
			}
		}	//have two child
	}	//have child
	return min;
}

// function minheap_print(heap){
// 	var str1 = "<p>" +this.element+ "</p>";
// 	document.write(str1);
// }




// var str1 = "<p>" +unsorted+ "</p>";
// document.write(str1);

// heap = new create_minheap();
// for(var i=0; i<unsorted.length;i++)
// {
// 	//document.write("<p>1</p>");
// 	heap.insert(unsorted[i][0],unsorted[i][1]);
// 	//document.write("1");
// 	//heap.print();
// }
// for(var i=0; i<unsorted.length;i++)
// {
// 	sorted.push(heap.extract());
// 	//heap.print();
// }

// var str2 = "<p>" +sorted+ "</p>";
// document.write(str2);

