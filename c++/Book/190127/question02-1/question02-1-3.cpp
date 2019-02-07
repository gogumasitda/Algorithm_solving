#include <iostream>

// 교재 코드
// void SwapPointer(int *(&pref1), int *(&pref2)){ // 얘는 내 코드와 의미하는 바가 같지 않나?
//     // std::cout<<"pref1: "<<pref1<<std::endl;
//     // std::cout<<"&pref1: "<<&pref1<<std::endl;
//     int *ptr = pref1;
//     // std::cout<<"ptr: "<<ptr<<std::endl;
//     // std::cout<<"*ptr: "<<*ptr<<std::endl;
//     pref1 = pref2;
//     pref2 = ptr;
// }

// 아래 코드의 문제점은 너무나 당연하다. 포인터를 사용하면 call by reference의 가능성을 열어둔것일뿐 반드시 call by reference는 아님을 명심하라.
// 아래와 같이 코드를 짜면 pointer가 담고있는 주소값을 변경하기만 하는 call by value가 된다.
// void SwapPointer(int *ptr1, int *ptr2){ 
//     int *temp = ptr1;
//     ptr1 = ptr2;
//     ptr2 = temp;
// }

int main(void)
{
    int num1=5;
    int *ptr1 = &num1;
    int num2=10;
    int *ptr2=&num2;
    SwapPointer(ptr1, ptr2);
    std::cout<<"&num1: "<<&num1<<std::endl;
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


