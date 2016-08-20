#include <iostream>

int get_change(int n) {
  //write your code here
  
  //safe step, take the highest denomination as many times as it work
  //then the second
  //then the third
  

  int numberOfDenominations = 0;
    while( (n-10) >= 0)
    {
      n = n-10;
      numberOfDenominations += 1;
    }
    while ((n-5) >= 0)
    {
      n = n-5;
      numberOfDenominations +=1;
    }
    while ((n-1) >= 0)
    {
      n = n-1;
      numberOfDenominations +=1;
    }
 return numberOfDenominations;
}

int main() {
  int n;
  std::cin >> n;
  std::cout << get_change(n) << '\n';
}
