int SimpleFunc(int a=10){
    return a+1;
}

int SimpleFunc(void){
    return 10;
}

// 함수 오버로딩 문제 다음과 같다. 인자를 안 받을 경우 10이 출력될지 디폴트가 나올지 알 수가 없다. 따라서 컴파일 에러.