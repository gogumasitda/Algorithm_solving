#include <iostream>
#include <cstdlib>
#include <ctime>

int main(void){
    std::srand(std::time(NULL));
    for(int i = 0; i < 5; i++){
        std::cout<<std::rand()%101<<std::endl;
    }
    
    return 0;
}