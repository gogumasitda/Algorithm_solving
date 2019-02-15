#include <iostream>
#include <cstring>
using namespace std;

namespace COMP_POS{
    enum COMP_POS {CLERK, SENIOR, ASSIST, MANAGER};

    void ShowEnumInfo(int num)
    {
        switch(num)
        {
            case COMP_POS::CLERK:
                cout<<"사원"<<endl;
                break;
            case COMP_POS::SENIOR:
                cout<<"주임"<<endl;
                break;
            case COMP_POS::ASSIST:
                cout<<"대리"<<endl;
                break;
            case COMP_POS::MANAGER:
                cout<<"과장"<<endl;
                break;
        }
    }
}


class NameCard {
public:
    char* name;
    char* comp_name;
    char* phone_number;
    int position;
public:
    NameCard(const char* _name, const char* _comp_name, const char* _phone_number, int position)
        : position(position)
    {
        int len = strlen(_name)+1;
        name = new char[len];
        strcpy(name, _name);

        len = strlen(_comp_name)+1;
        comp_name=new char[len];
        strcpy(comp_name, _comp_name);

        len = strlen(_phone_number)+1;
        phone_number=new char[len];
        strcpy(phone_number, _phone_number);
    }
    NameCard(const NameCard& copy)
        : position(copy.position)
    {
        int len=strlen(copy.name)+1;
        name=new char[len];
        strcpy(name, copy.name);

        len=strlen(copy.comp_name)+1;
        comp_name=new char[len];
        strcpy(comp_name, copy.comp_name);

        len=strlen(copy.phone_number)+1;
        phone_number=new char[10];
        strcpy(phone_number, copy.phone_number);
    }
    void ShowNameCardInfo() const
    {
        cout<<"이름: ";
        cout<<name<<endl;
        cout<<"회사: ";
        cout<<comp_name<<endl;
        cout<<"전화번호: ";
        cout<<phone_number<<endl;
        cout<<"직급: ";
        COMP_POS::ShowEnumInfo(position);
        cout<<endl;
    }
    ~NameCard()
    {
        delete []name;
        delete []comp_name;
        delete []phone_number;
        cout<<"Called Delete"<<endl;
    }
};


int main(void)
{
    NameCard manClerk("Lee", "ABCEng", "010-1111-2222", COMP_POS::CLERK);
    NameCard copy1=manClerk;
    NameCard manSENIOR("Hong", "OrangeEng", "010-3333-4444", COMP_POS::SENIOR);
    NameCard copy2=manSENIOR;
    manClerk.ShowNameCardInfo();
    manSENIOR.ShowNameCardInfo();
    return 0;
}