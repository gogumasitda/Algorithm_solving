#include <iostream>
using namespace std;

const int dx[8] = { -1, -1, -1, 1, 1, 1, 0, 0 };
const int dy[8] = { -1, 0, 1, -1, 0, 1, -1, 1 };
char board[5][5] = { {'U', 'R', 'L', 'P', 'M'}, {'X', 'P', 'R', 'E', 'T'}, {'G', 'I', 'A', 'E', 'T'}, {'X', 'T', 'N', 'Z', 'Y'}, {'X', 'O', 'Q', 'R', 'S'} };

bool hasWord(int y, int x, const string& word);
bool inRange(int x, int y);

bool hasWord(int y, int x, const string& word) {
	if (!inRange(y, x)) return false;
	if (board[y][x] != word[0]) return false;
	if (word.size() == 1) return true;
	for (int direction = 0; direction < 8; ++direction) {
		int nextY = y + dy[direction], nextX = x + dx[direction];
		if (hasWord(nextY, nextX, word.substr(1)))
			return true;
	}
	return false;
}

bool inRange(int y, int x) {
	if (5 > y and y >= 0 and 5 > x and x >= 0)
		return true;
	return false;
}

int main_b(void) {
	cout << hasWord(0, 0, "RS");
	return 0;
}
