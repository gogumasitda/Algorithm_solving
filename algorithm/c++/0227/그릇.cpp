#include <iostream>
#include <string>
using namespace std;

int main(void)
{
    int total_height = 10;
    string input_string;
    cin>>input_string;
    for(int i=0; i<input_string.length()-1; i++)
    {
        if (input_string[i] == input_string[i+1]){
            total_height += 5;
        }
        else{
            total_height += 10;
        }
    }
    cout<<total_height<<endl;
    return 0;
}