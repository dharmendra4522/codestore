import java.util.Scanner;
public class SquarePattern {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int size = 2 * n - 1;
        int center = size / 2;
        for(int i=0; i<size; i++){
            for(int j=0; j<size; j++){
                int distance = Math.max(Math.abs(i-center), Math.abs(j-center));
                int value = distance + 1;
                System.out.print(value + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}
