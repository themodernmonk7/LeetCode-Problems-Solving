class MyQueue {
  constructor() {
    this.items = []
    this.rear = 0
    this.front = 0
  }
  
  push(element) {
    this.items[this.rear] = element
    this.rear++
  }
  
  pop() {
    if (this.empty()) return null
    const element = this.items[this.front]
    this.front++
    return element
  }
  
  peek() {
    return this.items[this.front]
  }
  
  empty() {
    return this.rear - this.front === 0
  }
  
}