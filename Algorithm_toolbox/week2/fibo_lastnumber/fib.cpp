#include <iostream>

using namespace std;

int fibo(int n)
{
  long long first = 0;
  long long second = 1;
  long long next = 0;

  while (n)
  {
    next = first%10 +second%10;
    first = second%10;
    second = next%10;
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
