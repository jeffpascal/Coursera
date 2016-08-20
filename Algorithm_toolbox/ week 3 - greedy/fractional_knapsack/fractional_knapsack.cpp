#include <iostream>
#include <vector>

using std::vector;
using namespace std;

double get_optimal_value(int capacity, vector<int> weights, vector<int> values)
{

  cout<< "as as" ;
  double value = 0;

  while (capacity != 0)
  {
    int maxIndex = -1;
    for (int i=0 ; i<weights.size() ; i++)
    {
      if (((float)values[i]/(float)weights[i] > (float)values[maxIndex]/(float)weights[maxIndex]) && weights[i] > 0)
        maxIndex = i;
    }

    std::cout<<maxIndex;
    int a = weights[maxIndex] < capacity ? weights[maxIndex] : capacity;
    value = value + a*(values[maxIndex]/weights[maxIndex]);

    weights[maxIndex] -= a;
    //values[maxIndex] -= a;
    capacity -= a;


  }

  // write your code here

  return value;
}

int main() {
  int n;
  int capacity;

  std::cin >> n >> capacity;
  vector<int> values(n);
  vector<int> weights(n);

  for (int i = 0; i < n; i++) {

    std::cin >> values[i] >> weights[i];
  }


  cout<< "as as" ;
  double optimal_value = get_optimal_value(capacity, weights, values);

  std::cout << optimal_value << std::endl;
  return 0;
}
