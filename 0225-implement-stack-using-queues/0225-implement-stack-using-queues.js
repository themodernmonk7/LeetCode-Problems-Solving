
var MyStack = function() {
    this.stack = []
    this.t = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack[++this.t] = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.t === -1) {
        console.log('Stack is empty')
        return null
    }

    return this.stack[this.t--]
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.t === -1) {
        console.log('Stack is empty')
        return null
    }

    return this.stack[this.t]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.t === -1
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.t()
 * var param_4 = obj.empty()
 */