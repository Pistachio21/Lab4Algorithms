import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";
import p5 from 'p5'

class PointSET { //remember this is brute force algorithm (meaning lotsa for loops)
    collectionPoints : Set<Point2D>
    public constructor() {
        this.collectionPoints = new Set<Point2D>()

    } // construct an empty set of points
    public isEmpty(): boolean {
        if (this.collectionPoints.size === 0) {
            return true
        } else {
            return false
        }
    } // is the set empty?
    public size(): number {
        return this.collectionPoints.size

    } // number of points in the set
    public insert(p: Point2D): void {
        if (!this.contains(p)) {
            this.collectionPoints.add(p)
        } 
    } // add the point to the set (if it is not already in the set)
    public contains(p: Point2D): boolean {
        if (p === null) {
            throw new Error('P is not defined.')
        }
       return this.collectionPoints.has(p)
    } // does the set contain point p?
    public draw(p: p5): void {
        for (let point of this.collectionPoints) {
            point.draw(p);
        }

    } // draw all points to p5
    public range(rect: RectHV): Point2D[] {
        let pointsRange: Point2D[] = []
        for (let point of this.collectionPoints) {
            if (point.x >= rect.xmin && 
                point.x <= rect.xmax && 
                point.y >= rect.ymin && 
                point.y <= rect.ymax
            ) {
                pointsRange.push(point)//ask aaron if tsakto ni
            }
        }
        return pointsRange
    } // all points that are inside the rectangle (or on the boundary)
}

export default PointSET;