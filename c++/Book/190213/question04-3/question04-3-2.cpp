#include <iostream>
using namespace std;

namespace COMP_POS{
    enum COMP_POS {CLERK, SENIOR, ASSIST, MANAGER};

    void ShowEnumInfo(int num)
    {
        switch(num)
        {
            case 0:
                cout<<"사원"<<endl;
                break;
            case 1:
                cout<<"주임"<<endl;
                break;
            case 2:
                cout<<"대리"<<endl;
                break;
            case 3:
                cout<<"과장"<<endl;
                break;
        }
    }
}


class NameCard {
public:
    const char* name;
    const char* comp_name;
    const char* phone_number;
    int position;
public:
    NameCard(const char* name, const char* comp_name, const char* phone_number, int position)
        : name(name), comp_name(comp_name), phone_number(phone_number), position(position)
    {
        
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
};


int main(void)
{
    NameCard manClerk("Lee", "ABCEng", "010-1111-2222", COMP_POS::CLERK);
    NameCard manSENIOR("Hong", "OrangeEng", "010-3333-4444", COMP_POS::SENIOR);
    NameCard manAssist("Kim", "SoGoodComp", "010-5555-6666", COMP_POS::ASSIST);
    manClerk.ShowNameCardInfo();
    manSENIOR.ShowNameCardInfo();
    manAssist.ShowNameCardInfo();
    return 0;
}