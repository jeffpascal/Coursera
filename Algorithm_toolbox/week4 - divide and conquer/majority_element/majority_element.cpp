#include <algorithm>
#include <iostream>
#include <vector>

using std::vector;

int get_majority_element(vector<int> &a, int left, int right) 
{

  int count = 0, el;

  for (int i = 0; i < right; i++) 
  {
      if (count == 0) el = a[i];

      if (a[i] == el) count++;
      else count--;
  }

  count = 0;
  for (int i = 0; i < right; i++) 
  {
      if (a[i] == el) 
        count++;
  }

  if (count > right / 2) 
    return el;
  
  return -1;


}

int main() {
  int n;
  std::cin >> n;
  vector<int> a(n);
  for (size_t i = 0; i < a.size(); ++i) {
    std::cin >> a[i];
  }
  std::cout << (get_majority_element(a, 0, a.size()) != -1) << '\n';
}
