#include <iostream>
using namespace std;

int main(void){
    int time;
    int total_cnt = 0;
    int A = 300;
    int B = 60;
    int C = 10;
    int a = 0, b = 0, c = 0;

    cin>>time;

    while(time/A){
        a++;
        time -= A;
    }

    while(time/B){
        b++;
        time -= B;
    }

    while(time/C){
        c++;
        time -= C;
    }

    if(time){
        cout<<-1<<endl;
    }
    else{
        cout<<a<<" "<<b<<" "<<c<<endl;
    }

    return 0;
}