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