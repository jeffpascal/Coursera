import java.util.Scanner;

public class FractionalKnapsack {
  private static double getOptimalValue(int n, int capacity, int[] values, int[] weights) {
    double value = 0;
    //write your code here

    while (n != 0)
    {
      int maxIndex = 0;
      for (int i=0 ; i<weights.length ; i++)
      {
        if (((double)values[i]/(double)weights[i] >= (double)values[maxIndex]/(double)weights[maxIndex]) && weights[i] > 0)
          maxIndex = i;
      }

      int a = weights[maxIndex] < capacity ? weights[maxIndex] : capacity;
      value = value + a*((double)values[maxIndex]/weights[maxIndex]);

      weights[maxIndex] -= a;
      //values[maxIndex] -= a;
      capacity -= a;
      n--;
    }
    return value;
  }

    public static void main(String args[]) {
      Scanner scanner = new Scanner(System.in);
      int n = scanner.nextInt();
      int capacity = scanner.nextInt();
      int[] values = new int[n];
      int[] weights = new int[n];
      for (int i = 0; i < n; i++) {
        values[i] = scanner.nextInt();
        weights[i] = scanner.nextInt();
      }
      System.out.println(getOptimalValue(n, capacity, values, weights));
    }
  } 
