class MinStack {
    private stack
    constructor() {
    this.stack = []
    }

    push(val: number): void {
        if(this.stack.length === 0) {
            this.stack.push({val, minValue: val })
        } else {
            const min = Math.min(this.stack[this.stack.length - 1].minValue, val)
            this.stack.push({val, minValue: min })       
        }
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1].val
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].minValue
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */