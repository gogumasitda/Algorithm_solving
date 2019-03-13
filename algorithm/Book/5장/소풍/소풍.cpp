//1. 첫줄 케이스 수 C
//2. 학생 수, n과 친구 쌍의 수 m
#include <iostream>
using namespace std;

int n;
bool arefriend[10][10];

//아래의 코드는 중복이 발생하게 된다. 크게 두 경우로 중복이 계속하여 발생하는데 어떤 경우에 발생하는지 생각해보기.
int countParings(bool taken[10]) {
	bool finished = true;
	for (int i = 0; i < n; ++i)
		if (!taken[i])
			finished = false;
	if (finished) return 1;
	int ret = 0;
	for(int i = 0; i < n; ++i)
		for(int j =0; j <n; ++j)
			if (!taken[i] && !taken[j] && arefriend[i][j]) {
				taken[i] = taken[j] = true;
				ret += countParings(taken);
				taken[i] = taken[j] = false;
			}
	return ret;
}
//중복을 고려해 해당 부분을 세지 않는 개선 코드.
int countParingsBetter(bool taken[10]) {
	int firstFree = -1;
	for (int i = 0; i < n; ++i) {
		if (!taken[i]) {
			firstFree = i;
			break;
		}
	}
	if (firstFree == -1) return 1;
	int ret = 0;
	for (int pairWith = firstFree + 1; pairWith < n; ++pairWith) {
		if (!taken[pairWith] && arefriend[firstFree][pairWith]) {
			taken[firstFree] = taken[pairWith] = true;
			ret += countParings(taken);
			taken[firstFree] = taken[pairWith] = false;
		}
	}
	return ret;
}


int main(void) {
	int C, m;
	cin >> C;
	for (int i = 0; i < C; ++i) {
		cin >> n >> m;
		for (int j = 0; j < m; ++j) {
			int a, b;
			cin >> a >> b;
			arefriend[a][b] = true;
		}
		bool taken[10];
		cout << countParings(taken);
		cout << '끝' << endl;
	}
	return 0;
}