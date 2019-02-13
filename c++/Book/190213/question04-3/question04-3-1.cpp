#include <iostream>
using namespace std;

class Point {
private:
    int xpos, ypos;
public:
    Point(int x, int y) 
        : xpos(x), ypos(y)
    {
        // empty
    }
    void ShowPointInfo() const
    {
        cout<<"["<<xpos<<", "<<ypos<<"]"<<endl;
    }
};

class Circle {
private:
    Point center;
    int radius;
public:
    Circle(int x, int y, int r) 
        : center(x, y), radius(r)
    {
        // empty
    }
    void ShowCircleInfo() const {
        cout<<"radius: "<<radius<<endl;
        center.ShowPointInfo();
    }
};

class Ring {
private:
    Circle innerCircle;
    Circle outterCircle;
public:
    Ring(int innerX, int innerY, int innerR, int outerX, int outterY, int outterR)
        : innerCircle(innerX, innerY, innerR), outterCircle(outerX, outterY, outterY)
    {
        // empty
    }
    void ShowPointInfo() const{
        cout<<"Inner Circle Info..."<<endl;
        cout<<"radius: ";
        innerCircle.ShowCircleInfo();
        cout<<"outter Circle Info..."<<endl;
        cout<<"radius: ";
        outterCircle.ShowCircleInfo();
    }
};


int main(void)
{
    Ring ring(1, 1, 4, 2, 2, 9);
    ring.ShowPointInfo();
    return 0;
}