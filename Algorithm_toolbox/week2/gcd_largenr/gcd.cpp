#include <iostream>
using namespace std;

int gcd(long long a, long long b)
{
  int result;
  if(a==1 || b==1)
  	return 1;
  while (a!=b)
    if (a>b)
      a=a-b;
    else
      b=b-a;
  return a;
}


int main()
{

  long long a;
  long long b;
  cin>>a>>b;

  cout<<gcd(a,b);

  return 0;
}
