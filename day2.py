list123 = []

list123 = list(range(5))
print(list123)


for i in range(3):
    print(i)

phonebook = {
    "중국집": "123-456",
    "일식집": "124-567"
}

print(phonebook["일식집"])

warn_investment_list = ["microsoft", "google", "naver", "kakao", "samsung", "lg"]
print(f"경고 종목 리스트: {warn_investment_list}")
item = input("투자 종목이 무엇입니까?: ")

if item.lower() in warn_investment_list:
    print("투자 경고 종목입니다.")
else:
    print("투자 경고 종목이 아닙니다.")