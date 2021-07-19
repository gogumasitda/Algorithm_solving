//Double linked list
// ListNode는 다음과 같음.
struct ListNode {
	int idx = -1;
	ListNode* prev;
	ListNode* next;

	ListNode* myAlloc(int _idx, ListNode* _prev, ListNode* _next) {
		idx = _idx;
		prev = _prev;
		next = _next;

		return this;
	}
} buffer[MAXN];

int bufferCnt = 0;


void remove(ListNode* ptr) {
	ListNode* tmp = ptr->next;

	ptr->next = tmp->next;
	tmp->next->prev = ptr;
}