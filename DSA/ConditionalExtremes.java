import java.util.*;

public class ConditionalExtremes {

    // Function to check prime number
    static boolean isPrime(int num) {

        if (num < 2)
            return false;

        for (int i = 2; i * i <= num; i++) {

            if (num % i == 0)
                return false;
        }

        return true;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input array size
        System.out.print("Enter size of array: ");
        int n = sc.nextInt();
        if (n <= 0) {
            System.out.println("Array size must be greater than 0.");
            sc.close();
            return;
        }

        int[] arr = new int[n];

        // Input array elements
        System.out.println("Enter array elements:");

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        List<Integer> primes = new ArrayList<>();

        // Find primes
        for (int num : arr) {

            if (isPrime(num)) {
                primes.add(num);
            }
        }

        List<Integer> result = new ArrayList<>();

        // CASE 1: No prime exists
        if (primes.size() == 0) {

            Arrays.sort(arr);

            for (int i = n - 1; i >= 0; i--) {
                result.add(arr[i]);
            }
        }

        else {

            int largestPrime = Collections.max(primes);
            int smallestPrime = Collections.min(primes);

            List<Integer> remaining = new ArrayList<>();

            boolean largestUsed = false;
            boolean smallestUsed = false;

            // Remove only one occurrence
            for (int num : arr) {

                if (num == largestPrime && !largestUsed) {

                    largestUsed = true;
                }

                else if (num == smallestPrime &&
                        !smallestUsed &&
                        largestPrime != smallestPrime) {

                    smallestUsed = true;
                }

                else {

                    remaining.add(num);
                }
            }

            // Descending sort
            remaining.sort(Collections.reverseOrder());

            // Largest prime at start
            result.add(largestPrime);

            result.addAll(remaining);

            // Smallest prime at end
            if (primes.size() > 1) {
                result.add(smallestPrime);
            }
            System.out.println("Largest Prime:" + largestPrime);
            System.out.println("Smallest Prime:" + smallestPrime);
        }
        System.out.println("Output: " + result);

        sc.close();
    }
}