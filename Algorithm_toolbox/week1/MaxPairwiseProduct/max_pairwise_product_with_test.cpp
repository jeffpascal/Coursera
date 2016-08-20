#include <iostream>
#include <vector>

using std::vector;
using std::cin;
using std::cout;
using std::cerr;

long long MaxPairwiseProduct(const vector<int>& numbers) {
  long long result = 0;
  int n = numbers.size();
  for (int i = 0; i < n; ++i) {
    for (int j = i + 1; j < n; ++j) {
      if ((long long)numbers[i] * numbers[j] > result) {
        result = (long long)numbers[i] * (long long)numbers[j];
      }
    }
  }
  return result;
}

long long MaxPairwiseProductFast(const vector<int>& numbers)
{
  long long result = 0;
  int n=numbers.size();

  int first_max = -1;
  for (int i=0 ; i<n ; i++)
  {
    if ( (first_max == -1) || (numbers[i] > numbers[first_max]) )
      first_max = i;
  }

  int second_max = -1;
  for (int i=0 ; i<n ; i++)
  {
    if ((first_max != i) && (second_max == -1 || numbers[i] > numbers[second_max]))
      second_max = i;
  }

  return (long long)numbers[first_max] * (long long)numbers[second_max];

}

int main() {

  /*
   * I keep generating random tests until i find one that doesn't work
   *      I first use a slow algorithm that i know will 100% work
   *      Then i use the fast algorithm and compare the results
   *
   * There is the posibility that both are wrong, so we might need to debug them both
   */
  while (true) {
    //number of items in the array
    int n = rand() % 10 + 2;
    cerr << n << "\n";
    vector<int> a;
    //generate n numbers
    for (int i = 0; i < n; ++i) {
      a.push_back(rand() % 100000);
    }
    //add them to the array
    for (int i = 0; i < n; ++i) {
      cerr << a[i] << ' ';
    }
    //get the results
    cerr << "\n";
    long long res1 = MaxPairwiseProduct(a);
    long long res2 = MaxPairwiseProductFast(a);
    //compare them
    if (res1 != res2) {
      cerr << "Wrong answer: " << res1 << ' ' << res2 << "\n";
      break;
    }
    else {
      cerr << "OK\n";
    }
  }
}
