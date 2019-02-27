#include <iostream>
using namespace std;

int main(void){
    int input_time, a, b, c;
    cin>>input_time;
    
    if(input_time%10){
        cout<<-1<<endl;
        return 0;
    }
    else{
        a = input_time / 300;
        input_time %= 300;
        b = input_time / 60;
        input_time %= 60;
        c = input_time / 10;
    }
    cout<<a<<" "<<b<<" "<<c<<endl;
    return 0;
}