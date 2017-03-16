var unsorted = new Array(5949,8320,1472,6409,3865,4921,3157,459,5185,797,8465,3911,2575,100,1165,4631,9772,3413,78,319);
var sorted = new Array();
document.write("1");

function create_minheap(){
	this.element = new Array();
	this.insert = minheap_insert;
	this.extract = minheap_extract;
	this.print = minheap_print;
}


// define insert function for min binary heap
function minheap_insert(new_element) {
	//document.write("2");
	this.element.push(new_element);
	var new_element_index = this.element.length - 1;
	while(new_element_index != 0 && this.element[new_element_index] < this.element[Math.floor((new_element_index-1)/2)])
	{
		this.element[new_element_index] = this.element[Math.floor((new_element_index-1)/2)];
		this.element[Math.floor((new_element_index-1)/2)] = new_element;
		new_element_index = Math.floor((new_element_index-1)/2);
	}
}



// define extract function for min binary heap
function minheap_extract() {
	//document.write("<p>3</p>");
	if(this.element.length == 0){return;}
	sorted.push(this.element[0]);
	this.element[0] = this.element.pop();
	var old_element_index = 0;
	var temp = this.element[0];
	while(old_element_index*2+1 <= this.element.length-1){
		if(old_element_index*2+1 == this.element.length-1){
			if(this.element[old_element_index*2+1] < this.element[old_element_index]){
				this.element[old_element_index] = this.element[old_element_index*2+1];
				this.element[old_element_index*2+1] = temp;
				old_element_index = old_element_index*2+1;
			}	//swap
			else{return;}	
		}	//only have one child
		else{
			if(this.element[old_element_index*2+1] < this.element[old_element_index*2+2]){
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

}

function minheap_print(heap){
	var str1 = "<p>" +this.element+ "</p>";
	document.write(str1);
}




var str1 = "<p>" +unsorted+ "</p>";
document.write(str1);

heap = new create_minheap();
for(var i=0; i<unsorted.length;i++)
{
	//document.write("<p>1</p>");
	heap.insert(unsorted[i]);
	//document.write("1");
	heap.print();
}
for(var i=0; i<unsorted.length;i++)
{
	//document.write("<p>2</p>");
	heap.extract();
	heap.print();
}

var str2 = "<p>" +sorted+ "</p>";
document.write(str2);
