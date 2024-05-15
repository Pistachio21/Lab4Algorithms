import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";

class PointSET { //remember this is brute force algorithm (meaning lotsa for loops)
    collectionPoints : Point2D[]
    x: number
    y: number
    public constructor(x: number, y: number) {
        this.collectionPoints = []
        this.x = x
        this.y = y

    } // construct an empty set of points
    public isEmpty(): boolean {
        if (this.collectionPoints.length === 0) {
            return true
        } else {
            return false
        }
    } // is the set empty?
    public size(): number {
        return this.collectionPoints.length

    } // number of points in the set
    public insert(p: Point2D): void {
        for (let i = 0; i < this.collectionPoints.length; i++) {
            if (!this.contains(p)) {
                this.collectionPoints.push(p)
            }
        }
    } // add the point to the set (if it is not already in the set)
    public contains(p: Point2D): boolean {
        let condition = true
        for (let i = 0; i < this.collectionPoints.length; i++) {
            let targetPoint = this.collectionPoints[i]
            if (p.x === targetPoint[i] && p.y === targetPoint[i]) {
                condition = true
            } else {
                condition = false
            }
        }
        return condition
    } // does the set contain point p?
    public draw(p): void {
        

    } // draw all points to p5
    public range(rect: RectHV): Point2D[] {

    } // all points that are inside the rectangle (or on the boundary)
}

export default PointSET;