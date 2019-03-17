class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(this.left && this.right){return;}
		if(this.left) {this.right=node;}
		else {this.left=node;}
	}

	removeChild(node) {
		if(node.data%2) {
			if(this.left!==node) throw new Error('Passed node is not a child of this node');
			this.left=null;
		}
		else {
			if(this.right!==node) throw new Error('Passed node is not a child of this node');			
			this.right=null;
		}
	}

	remove() {
		if(this.parent) {

		}
	}

	swapWithParent() {
		if(this.parent) {
			
		}		
	}
}

module.exports = Node;
