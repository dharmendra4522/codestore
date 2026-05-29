import java.util.Scanner;

public class ConcentricSquarePattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int size = 2 * N - 1;

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {

                int top = i;
                int left = j;
                int right = size - j - 1;
                int bottom = size - i - 1;

                int value = N - Math.min(Math.min(top, bottom), Math.min(left, right));

                System.out.print(value + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
