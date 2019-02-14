#include <iostream>
#include <cstring>
using namespace std;

class Person
{
private:
    char* name;
    int age;
public:
    Person(char* myname, int myage)
    {
        int len=strlen(myname)+1;
        name=new char[len];
        strcpy(name, myname);
        age=myage;
    }
    Person(const Person& copy)
        : age(copy.age)
    {
        int len = strlen(copy.name);
        name = new char[len];
        strcpy(name, copy.name);
        // age=copy.age;
    }
    void ShowPersonInfo()
    {
        cout<<"이름: "<<name<<endl;
        cout<<"나이: "<<age<<endl;
    }
    ~Person()
    {
        delete []name;
        cout<<"called desturctor!"<<endl;
    }
};

int main(void)
{
    Person man1("Lee dong woo", 29);
    Person man2 =  man1;
    man1.ShowPersonInfo();
    man2.ShowPersonInfo();
    return 0;
}