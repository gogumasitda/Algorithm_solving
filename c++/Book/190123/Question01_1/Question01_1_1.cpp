#include <iostream>

int main(void)
{
    int result = 0;
    int val[5];

    for(int i=0; i<5; i++)
    {
        std::cout<<i+1<<"��° ���� �Է�: ";
        std::cin>>val[i];
        result+=val[i];
    }

    std::cout<<"�հ�: "<<result<<std::endl;
    return 0;
}