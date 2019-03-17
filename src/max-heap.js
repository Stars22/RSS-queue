const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		if(this.root===null && this.parentNodes.length===0) {return;}
		let root=detachRoot();
		restoreRootFromLastInsertedNode(root);
		shiftNodeDown(this.root);
		return this.root;
	}

	detachRoot() {
		this.root=null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		if(this.root===null && this.parentNodes.length===0) {return true;}
	}

	clear() {
		this.root=null;
		this.parentNodes=[];	
	}

	insertNode(node) {
		if(this.root===null && this.parentNodes.length===0) {this.root=node;return;}
		this.root.appendChild(node);
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
