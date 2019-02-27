// https://www.acmicpc.net/problem/11719

#include <iostream>
#include <string>
using namespace std;

int main(void){
    // string str;
    // while(getline(cin,str)){
    //     cout<<str<<endl;
    // }

    char arr[100];
    while(cin.getline(arr, 100))
    {
        cout<<arr<<endl;
    }
    return 0;
}