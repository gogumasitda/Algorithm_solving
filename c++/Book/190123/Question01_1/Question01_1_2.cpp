#include <iostream>

int main(void){
    char name[100];
    char phone[100];

    std::cout<<"이름을 입력하세요: ";
    std::cin>>name;
    
    std::cout<<"번호를 입력하세요: ";
    std::cin>>phone;

    std::cout<<"당신의 이름은 "<<name<<"입니다."<<"당신의 번호는 "<<phone<<"입니다."<<std::endl;
    return 0;
}