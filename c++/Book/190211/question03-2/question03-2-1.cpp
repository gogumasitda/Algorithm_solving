#include <iostream>

using namespace std;

class Calculator{
private:
    int add_count;
    int min_count;
    int div_count;
    int mul_count;
public:
    void Init();
    float Add(float a, float b);
    float Div(float a, float b);
    float Min(float a, float b);
    float Mul(float a, float b);
    void ShowOpCount();
};

void Calculator::Init(){
    add_count = 0;
    min_count = 0;
    div_count = 0;
    mul_count = 0;
}

float Calculator::Add(float a, float b){
    add_count += 1;
    return a + b;
}

float Calculator::Div(float a, float b){
    div_count += 1;
    return a / b;
}

float Calculator::Min(float a, float b){
    min_count += 1;
    return a - b;
}

float Calculator::Mul(float a, float b){
    mul_count += 1;
    return a * b;
}

void Calculator::ShowOpCount(){
    cout<<"덧셈: "<<add_count;
    cout<<" 뺄셈: "<<min_count;
    cout<<" 곱셈: "<<mul_count;
    cout<<" 나눗셈: "<<div_count<<endl;
}

int main(void){
    Calculator cal;
    cal.Init();
    cout<<"3.2 + 2.4 = "<<cal.Add(3.2, 2.4)<<endl;
    cout<<"3.5 / 1.7 = "<<cal.Div(3.5, 1.7)<<endl;
    cout<<"2.2 - 1.5 = "<<cal.Min(2.2, 1.5)<<endl;
    cout<<"4.9 / 1.2 = "<<cal.Div(4.9, 1.2)<<endl;
    cal.ShowOpCount();
    return 0;
}