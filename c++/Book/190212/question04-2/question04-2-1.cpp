#include <iostream>
using namespace std;

class Point {
private:
    int xpos, ypos;
public:
    void Init(int x, int y)
    {
        xpos=x;
        ypos=y;
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
    void Init(int x, int y, int r) {
        center.Init(x, y);
        radius = r;
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
    void Init(int innerX, int innerY, int innerR, int outerX, int outterY, int outterR){
        innerCircle.Init(innerX, innerY, innerR);
        outterCircle.Init(outerX, outterY, outterR);
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
    Ring ring;
    ring.Init(1, 1, 4, 2, 2, 9);
    ring.ShowPointInfo();
    return 0;
}