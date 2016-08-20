#include <iostream>

using namespace std;

int fibo(int n)
{
  long long first = 0;
  long long second = 1;
  long long next = 0;

  while (n)
  {
    next = first+second;
    first = second;
    second = next;
    n--;
  }
  return first;
}

int main()
{

  int n ;
  cin>>n;

  cout<<fibo(n)<<'\n';
  return 0;
}
