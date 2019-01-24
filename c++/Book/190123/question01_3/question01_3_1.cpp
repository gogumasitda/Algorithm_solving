#include <iostream>

int Boxvolume(int length, int width, int height);
int Boxvolume(int length, int width);
int Boxvolume(int length);
int Boxvolume();

int main(void){
    std::cout<<"[3, 3, 3] : "<<Boxvolume(3, 3, 3)<<std::endl;
    std::cout<<"[5, 5, D] : "<<Boxvolume(5, 5)<<std::endl;
    std::cout<<"[7, D, D] : "<<Boxvolume(7)<<std::endl;
    std::cout<<"[D, D, D] : "<<Boxvolume()<<std::endl;
    return 0;
}

int Boxvolume(int length, int width, int height){
    return length*width*height;
}

int Boxvolume(int length, int width){
    return length*width*1;
}
int Boxvolume(int length){
    return 7*1*1;
}
int Boxvolume(){
    return 1*1*1;
}