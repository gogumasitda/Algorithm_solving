#include <iostream>
#include <vector>
using namespace std;

const int coverType[4][3][2] = {
	{{0, 0}, {1, 0}, {0, 1}},
	{{0, 0}, {0, 1}, {1, 1}},
	{{0, 0}, {1, 0}, {1, 1}},
	{{0, 0}, {1, 0}, {1, -1}}
};

bool set(vector<vector<int>>& board, int y, int x, int type, int delta) {
	bool ok = true;
	for
}

int main(void) {
	int C, H, W;
	vector<vector<int> > board(20, vector<int>(20, 0));
	char bw[20];
	cin >> C;
	for (int i = 0; i < C; ++i) {
		cin >> H >> W;
		for (int j = 0; j < H; ++j) {
			cin >> bw;
			for (int k = 0; k < W; ++k) {
				board[j][k] = (bw[k] == '#') ? 1 : 0;
			}
		}
		cout << cover(board, H, W) << endl;
	}
	return 0;
}