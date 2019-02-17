#include <iostream>

using namespace std;

class Rectangle
{
private:
    int x;
    int y;
public:
    Rectangle(int _x, int _y) : x(_x), y(_y)
    { }
    void ShowAreaInfo()
    {
        cout<<"면적: "<<x*y<<endl;
    }
};

class Square : public Rectangle
{
public:
    Square(int num) : Rectangle(num, num)
    { }
};

int main(void)
{
    Rectangle rec(4, 3);
    rec.ShowAreaInfo();

    Square sqr(7);
    sqr.ShowAreaInfo();

    return 0;
}