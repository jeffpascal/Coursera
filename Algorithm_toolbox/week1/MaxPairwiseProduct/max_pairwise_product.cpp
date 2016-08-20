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
    if ( (first_max != i) && ( (second_max == -1) || (numbers[i] > numbers[second_max])) )
      second_max = i;
  }

  return (long long)numbers[first_max] * (long long)numbers[second_max];


}

int main() {

  int n;

  cin >> n;
  vector<int> numbers(n);
  for (int i = 0; i < n; ++i) {
    cin >> numbers[i];
  }


  long long result = MaxPairwiseProductFast(numbers);
  cout << result << "\n";
  return 0;


}
