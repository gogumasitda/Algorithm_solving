#include <iostream>

int main(void){
    char name[100];
    char phone[100];

    std::cout<<"�̸��� �Է��ϼ���: ";
    std::cin>>name;
    
    std::cout<<"��ȣ�� �Է��ϼ���: ";
    std::cin>>phone;

    std::cout<<"����� �̸��� "<<name<<"�Դϴ�."<<"����� ��ȣ�� "<<phone<<"�Դϴ�."<<std::endl;
    return 0;
}