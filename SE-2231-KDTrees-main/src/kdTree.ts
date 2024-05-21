import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";

class Node {
    value: Point2D;
    left: Node | null;
    right: Node | null;
    depth: number;

    constructor(value: Point2D, left: Node | null = null, right: Node | null = null, depth: number = 0) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.depth = depth;
    }
}

class KDTree {
    root: Node | null;

    public constructor() {
        this.root = null;
    }

    public isEmpty(): boolean {
        return this.root === null;
    }

    public size(): number {
        let count = 0;
        const traverse = (node: Node | null) => {
            if (!node) return;
            count++;
            traverse(node.left);
            traverse(node.right);
        };
        traverse(this.root);
        return count;
    }

    public insert(p: Point2D): void {
        this.root = this.insertNode(this.root, p, 0);
    }

    private insertNode(node: Node | null, p: Point2D, depth: number): Node {
        if (node === null) {
            return new Node(p, null, null, depth);
        }

        const axis = depth % 2 === 0 ? "x" : "y";
        if (p[axis] < node.value[axis]) {
            node.left = this.insertNode(node.left, p, depth + 1);
        } else {
            node.right = this.insertNode(node.right, p, depth + 1);
        }

        return node;
    }

    public contains(p: Point2D): boolean {
        return this.containsNode(this.root, p, 0);
    }

    private containsNode(node: Node | null, p: Point2D, depth: number): boolean {
        if (node === null) return false;
        if (node.value.equals(p)) return true;

        const axis = depth % 2 === 0 ? "x" : "y";
        if (p[axis] < node.value[axis]) {
            return this.containsNode(node.left, p, depth + 1);
        } else {
            return this.containsNode(node.right, p, depth + 1);
        }
    }

    public range(rect: RectHV): Point2D[] {
        const result: Point2D[] = [];
        this.rangeHelper(this.root, rect, result);
        return result;
    }

    private rangeHelper(node: Node | null, rect: RectHV, result: Point2D[]): void {
        if (node === null) return;

        if (rect.contains(node.value)) {
            result.push(node.value);
        }

        const axis = node.depth % 2 === 0 ? "x" : "y";
        if (axis === "x") {
            if (node.left && rect.xmin <= node.value.x) {
                this.rangeHelper(node.left, rect, result);
            }
            if (node.right && rect.xmax >= node.value.x) {
                this.rangeHelper(node.right, rect, result);
            }
        } else {
            if (node.left && rect.ymin <= node.value.y) {
                this.rangeHelper(node.left, rect, result);
            }
            if (node.right && rect.ymax >= node.value.y) {
                this.rangeHelper(node.right, rect, result);
            }
        }
    }
}

export default KDTree;
