#include <iostream>

// void SwapPointer(int *, int *;
void SwapPointer(int *(&), int *(&));

int main(void)
{
    int num1=5;
    int *ptr1 = &num1;
    int num2=10;
    int *ptr2=&num2;
    SwapPointer(ptr1, ptr2);
    std::cout<<"ptr1: "<<*ptr1<<std::endl;
    std::cout<<"ptr2: "<<*ptr2<<std::endl;

    return 0;
}

// 왜 안되는가 생각해보기
// void SwapPointer(int *num1, int *num2){
//     int *temp = num2;
//     num2 = num1;
//     num1 = temp;
// }

// 교재 코드
void SwapPointer(int *(&pref1), int *(&pref2)){ // 얘는 내 코드와 의미하는 바가 같지 않나?
    // std::cout<<"pref1: "<<pref1<<std::endl;
    // std::cout<<"&pref1: "<<&pref1<<std::endl;
    int *ptr = pref1;
    // std::cout<<"ptr: "<<ptr<<std::endl;
    // std::cout<<"*ptr: "<<*ptr<<std::endl;
    pref1 = pref2;
    pref2 = ptr;
}