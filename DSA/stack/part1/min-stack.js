class Minstack {
  constructor() {
    this.stack = [];
    this.minVal = Infinity;
    this.size = 0;
  }

  push(value) {
    if (this.isEmpty()) {
      this.stack.push(value);
      this.minVal = value;
    } else {
      if (val < this.minVal) {
        const newVal = 2 * value - this.minVal;
        this.stack.push(newVal);
        this.minVal = value;
      } else {
        this.stack.push(value);
      }
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty) return;
    const top = this.getTop();
    
    if (top < this.minVal) {
      this.stack.pop();
      this.minVal = 2 * this.minVal - top;
      this.size--;
    } else {
      this.stack.pop();
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getTop() {
    let top = this.stack[this.size - 1];
    if (top < this.minVal) {
      top = this.minVal;
    }
    return top;
  }

  getMin() {
    return this.minVal;
  }
}
