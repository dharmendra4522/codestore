import java.util.*;

public class ConditionalReordering {

    public static boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        // Input array
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        List<Integer> primes = new ArrayList<>();
        List<Integer> others = new ArrayList<>();

        for (int num : arr) {
            if (isPrime(num)) {
                primes.add(num);
            } else {
                others.add(num);
            }
        }

        Collections.sort(others, Collections.reverseOrder());

        List<Integer> result = new ArrayList<>();

        if (primes.size() == 0) {
            
            Collections.sort(others, Collections.reverseOrder());
            result.addAll(others);
        } 
        else if (primes.size() == 1) {
            
            result.add(primes.get(0));
            result.addAll(others);
        } 
        else {
            Collections.sort(primes);

            int smallest = primes.get(0);
            int largest = primes.get(primes.size() - 1);

            result.add(largest);

            primes.remove(primes.size() - 1);
            primes.remove(0);

            List<Integer> middle = new ArrayList<>();
            middle.addAll(primes);
            middle.addAll(others);

            Collections.sort(middle, Collections.reverseOrder());

            result.addAll(middle);

            result.add(smallest);
        }

        for (int num : result) {
            System.out.print(num + " ");
        }

        sc.close();
    }
}
