#include <iostream>
#include <cstring>
using namespace std;

class MyFriendInfo
{
private:
    char* name;
    int age;
public:
    MyFriendInfo(int _age, char* _name) : age(_age)
    {
        name = new char[strlen(_name)+1];
        strcpy(name, _name);
    }
    ~MyFriendInfo()
    {
        delete []name;
    }
    void ShowMyFriendInfo()
    {
        cout<<"이름: "<<name<<endl;
        cout<<"나이: "<<age<<endl;
    }
};

class MyFriendDetailInfo    :   public MyFriendInfo
{
private:
    char* addr;
    char* phone;
public:
    MyFriendDetailInfo(int _age, char* _name, char* _addr, char* _phone)
        : MyFriendInfo(_age, _name) // 왜 인자를 이렇게 넘겨주는가에 대해서 내 추측: 이것은 생성자기 때문에 그렇다.
    {
        addr = new char[strlen(_addr)+1];
        strcpy(addr, _addr);
        phone = new char[strlen(_phone)+1];
        strcpy(phone, _phone);
    }
    ~MyFriendDetailInfo()
    {
        delete []addr;
        delete []phone;
    }
    void ShowMyFriendDetailInfo()
    {
        ShowMyFriendInfo();
        cout<<"주소: "<<addr<<endl;
        cout<<"전화: "<<phone<<endl;
    }
};

int main(void)
{
    MyFriendDetailInfo him(23, "으앙", "몰라", "예시");
    him.ShowMyFriendDetailInfo();
    return 0;
}