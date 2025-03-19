
type Node<T> =
    {
        value: T;
        prev?: Node<T>;
    }

export default class Stack<T> {
    public length: number;

    private value: T;
    private head?: Node<T>;



    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item, prev: undefined } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        const head = this.head;
        node.prev = head;
        this.head = node;

    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = head.prev;

        return head.value;
    }
    peek(): T | undefined {

        return this.head?.value;

    }
}