//1. ù�� ���̽� �� C
//2. �л� ��, n�� ģ�� ���� �� m
#include <iostream>
using namespace std;

int n;
bool arefriend[10][10];

//�Ʒ��� �ڵ�� �ߺ��� �߻��ϰ� �ȴ�. ũ�� �� ���� �ߺ��� ����Ͽ� �߻��ϴµ� � ��쿡 �߻��ϴ��� �����غ���.
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
//�ߺ��� ����� �ش� �κ��� ���� �ʴ� ���� �ڵ�.
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
		cout << '��' << endl;
	}
	return 0;
}