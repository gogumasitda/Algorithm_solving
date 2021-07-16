// 295. Find Median from Data Stream
// https://leetcode.com/problems/find-median-from-data-stream/

class MedianFinder {
private:
    priority_queue<int, vector<int>, greater<int>> minHeap;
    priority_queue<int, vector<int>, less<int>> maxHeap;
    
public:
    /** initialize your data structure here. */
    MedianFinder() {
        
    }
    
    void addNum(int num) {
        int minHeapSize, maxHeapSize;
        minHeapSize = minHeap.size(), maxHeapSize = maxHeap.size();
        
        if (maxHeapSize > 0 && num > maxHeap.top()) minHeap.push(num);
        else maxHeap.push(num);
    
        minHeapSize = minHeap.size(), maxHeapSize = maxHeap.size();
        
        if (maxHeapSize > minHeapSize + 1) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }
        else if (maxHeapSize < minHeapSize) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }
    
    double findMedian() {
        int minHeapSize, maxHeapSize;
        minHeapSize = minHeap.size(), maxHeapSize = maxHeap.size();
        
        if (maxHeapSize == minHeapSize + 1) return maxHeap.top();
        else return (double) (maxHeap.top() + minHeap.top()) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */