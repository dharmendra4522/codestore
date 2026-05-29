import java.util.Scanner;

public class MatrixAnalysis {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Input size
        System.out.print("Enter matrix size (N): ");
        int n = sc.nextInt();

        int[][] arr = new int[n][n];

        // Input matrix
        System.out.println("Enter matrix elements:");

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        // Find row having maximum sum
        int maxRowSum = Integer.MIN_VALUE;
        int maxRowIndex = -1;

        for(int i = 0; i < n; i++) {

            int sum = 0;

            for(int j = 0; j < n; j++) {
                sum += arr[i][j];
            }

            if(sum > maxRowSum) {
                maxRowSum = sum;
                maxRowIndex = i;
            }
        }

        // Find column having minimum sum
        int minColSum = Integer.MAX_VALUE;
        int minColIndex = -1;

        for(int j = 0; j < n; j++) {

            int sum = 0;

            for(int i = 0; i < n; i++) {
                sum += arr[i][j];
            }

            if(sum < minColSum) {
                minColSum = sum;
                minColIndex = j;
            }
        }

    
        System.out.println("Max Row Index: " + maxRowIndex);
        System.out.println("Min Column Index: " + minColIndex);

        if(maxRowIndex == minColIndex) {
            System.out.println("Balanced");
        } else {
            System.out.println("Imbalanced");
        }

        sc.close();
    }
}