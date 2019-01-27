#include <iostream>

void addone(int &);
int changenum(int *);

int main(void){
    int a = 10;
    addone(a);
    changenum(&a);
    std::cout<<a<<std::endl;

    return 0;
}

void addone(int &a){
    std::cout<<a+1<<std::endl;
}

int changenum(int *a){
    return *a *= -1;
}
