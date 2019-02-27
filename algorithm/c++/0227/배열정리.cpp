#include <iostream>
using namespace std;

int main(void){
    int row, col;
    cin>>row>>col;
    int input_list[row][col];
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cin>>input_list[i][j];
            if(j>0 && j<col && input_list[i][j]){
                input_list[i][j] += input_list[i][j-1];
            }
        }
    }
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cout<<input_list[i][j]<<" ";
        }
        cout<<endl;
    } 
    return 0;
}