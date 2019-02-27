// https://www.acmicpc.net/problem/11718

#include <iostream>
#include <string>
using namespace std;

int main(void){
    string input_string;
    while(true){
        getline(cin,input_string);
        if(input_string==""){
            break;
        }
        cout<<input_string<<endl;
    }
    return 0;
}