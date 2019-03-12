const int MIN = numeric_limits<int>::min();
int inefficientMaxSum(const vector<int>& A) {
	int N = A.size(), ret = MIN;
	for(int i = 0; i < N; ++i)
		for (int j = i; j < N; ++j) {
			int sum = 0;
			for (int k = i; k <= j; ++k)
				sum += A[k];
			ret = max(ret, sum);
		}
	return ret;
}