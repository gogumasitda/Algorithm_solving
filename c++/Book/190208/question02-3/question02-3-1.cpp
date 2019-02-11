#include <iostream>

typedef struct __Point
{
    int xpos;
    int ypos;
} Point;

Point& PntAdder(const Point &p1, const Point &p2){
    Point *sumptr = new Point;
    sumptr -> 
    
}

int main(void){
    Point *p1 = new Point;
    p1 -> xpos = 1;
    p1 -> ypos = 2;

    Point *p2 = new Point;
    p2 -> xpos = 3;
    p2 -> ypos = 4;
    
    PntAdder(*p1, *p2)

    std::cout<<p1 -> xpos<<std::endl;
    // std::cout>>PntAdder()>>std::endl;

    return 0;
    }

// Point& PntAdder(const Point &p1, const Point &p2){

// }

