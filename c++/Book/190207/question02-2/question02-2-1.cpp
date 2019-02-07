#include <iostream>

const int num = 12;

int main(void){
    const int *ptr = &num;
    const int *(&ref) = ptr;

    std::cout<<"ptr: "<<*ptr<<std::endl;
    std::cout<<"ref: "<<*ref<<std::endl;
}
