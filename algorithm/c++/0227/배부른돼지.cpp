#include <iostream>
using namespace std;

int main(void){
    int t, n, min_num = 10;
    char yn;
    cin>>t;
    for(int i =0; i<t; i++){
        cin>>n>>yn;
        if(min_num > n && yn == 'Y'){
            min_num = n;
        }
        else if(n >= min_num && yn == 'N'){
            min_num = 10;
            break;
        }
    }
    if(min_num == 10){
        cout<<"F"<<endl;
    }
    else{
        cout<<min_num<<endl;
    }
    
    return 0;
}