// Single linked list

#include < stdio.h >

#define MAXN 1000

// ListNode는 다음과 같음.
struct ListNode {
	int idx = -1;
	ListNode* next;

	ListNode* myAlloc(int _idx, ListNode* _next) {
		idx = _idx;
		next = _next;

		return this;
	}
} buffer[MAXN];

int bufferCnt = 0;

//ListNode *list;
ListNode head, tail; // pointer가 아니다.

void init() {
	bufferCnt = 0;
	head.next = &tail;
}


ListNode* getNode(int _idx) {
	ListNode* ptr = &head;

	// ptr->next의 idx == _idx일 경우 ptr을 반환
	// 그런 node가 없을 경우 tail 바로 이전 node를 반환
	while (ptr->next) {
		if (ptr->next->idx >= _idx || ptr->next->idx == -1) break;

		ptr = ptr->next;
	}

	return ptr;
}

void remove(ListNode* ptr) {
	ptr->next = ptr->next->next;
}

int main() {
	init();

	for (int i = 0; i < 10; ++i) {
		int num;
		scanf("%d", &num);

		ListNode* ptr = getNode(num);
		ptr->next = buffer[bufferCnt++].myAlloc(num, ptr->next);
	}

	for (int i = 0; i < 10; ++i) {
		int num;
		scanf("%d", &num);

		ListNode* ptr = getNode(num);
		if (ptr->next->idx == num && ptr->next->idx != -1) remove(ptr);
	}

	return 0;
}