#include <iostream>
using namespace std;

class Car
{
private:
    int gasolineGauge;
public:
    Car() : gasolineGauge(10)
    {}
    Car(int num) : gasolineGauge(num)
    {}
    int GetGasGauge()
    {
        return gasolineGauge;
    }
};

class HybridCar : public Car
{
private:
    int electricGauge;
public:
    HybridCar() : electricGauge(10)
    {}
    HybridCar(int num) : electricGauge(num)
    {}
    HybridCar(int num1, int num2) : Car(num1), electricGauge(num2)
    {}
    int GetElecGauge()
    {
        return electricGauge;
    }
};

class HybridWaterCar    : public HybridCar
{
private:
    int waterGauge;
public:
    HybridWaterCar() : waterGauge(10)
    {}
    HybridWaterCar(int num) : waterGauge(num)
    {}
    HybridWaterCar(int num1, int num2) : HybridCar(num1), waterGauge(num2)
    {}
    HybridWaterCar(int num1, int num2, int num3) : HybridCar(num1, num2), waterGauge(num3)
    {}
    void ShowCurrentGauge()
    {
        cout<<"잔여 가솔린: "<<GetGasGauge()<<endl;
        cout<<"잔여 전기량: "<<GetElecGauge()<<endl;
        cout<<"잔여 워터량: "<<waterGauge<<endl;
    }
};

int main(void)
{
    HybridWaterCar H1;
    HybridWaterCar H2(20);
    HybridWaterCar H3(20, 30);
    HybridWaterCar H4(20, 30, 40);

    H1.ShowCurrentGauge();
    H2.ShowCurrentGauge();
    H3.ShowCurrentGauge();
    H4.ShowCurrentGauge();

    return 0;
}