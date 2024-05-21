import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";
import p5 from 'p5'

class PointSET {
    collectionPoints : Point2D[]
    public constructor() {
        this.collectionPoints = []

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
        if (!this.contains(p)) {
            this.collectionPoints.push(p)
        } 
    } // add the point to the set (if it is not already in the set)
    public contains(p: Point2D): boolean {
       return this.collectionPoints.includes(p)
    } // does the set contain point p?
    public draw(p: p5): void {
        for (let i = 0; i < this.collectionPoints.length; i++) {
            this.collectionPoints[i].draw(p);
        }

    } // draw all points to p5
    public range(rect: RectHV): Point2D[] {
        let pointsRange: Point2D[] = []
        for (let i = 0; i < this.collectionPoints.length; i++) {
            if (this.collectionPoints[i].x >= rect.xmin && 
                this.collectionPoints[i].x <= rect.xmax && 
                this.collectionPoints[i].y >= rect.ymin && 
                this.collectionPoints[i].y <= rect.ymax
            ) {
                pointsRange.push(this.collectionPoints[i])
            }
        }
        return pointsRange
    } // all points that are inside the rectangle (or on the boundary)
}

export default PointSET;