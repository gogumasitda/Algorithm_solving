#include <iostream>
#include <cstring>

int main(void){
    char str1[] = "Hello World";
    char str2[30];
    std::cout<<std::strlen(str1)<<std::endl;
    std::strcat(str1, " I love you.");
    std::cout<<str1<<std::endl; 
    std::strcpy(str2, str1);
    std::cout<<str2<<std::endl;
    std::cout<<std::strcmp(str1, str2)<<std::endl;

    return 0;
}
