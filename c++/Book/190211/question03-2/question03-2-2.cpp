#include <iostream>
#include <cstring>

class Printer{
private:
    const char *string;
public:
    void SetString(const char *input_string);
    void ShowString();
};

void Printer::SetString(const char *input_string){
    string = input_string;
}

void Printer::ShowString(){
    std::cout<<string<<std::endl;
}

int main(void){
    Printer pnt;
    pnt.SetString("Hello world!");
    pnt.ShowString();

    pnt.SetString("I love C++");
    pnt.ShowString();
    return 0;
}