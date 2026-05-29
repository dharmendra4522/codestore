import java.util.Scanner;
public class SquarePattern2 {
    //build pattern layer by layer from the outside to the inside, starting with the largest value at the outermost layer and decreasing as we move towards the center.
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int size = 2 * n - 1;
        int arr[][] = new int[size][size];
        int value = n;
        // Outer loop iterates through each layer of the pattern, starting from the outermost layer (layer 0) to the innermost layer (layer n-1).
        for(int layer=0; layer<n; layer++){
            for(int i=layer; i<size-layer; i++){
                for(int j=layer; j<size-layer; j++){
                    arr[i][j] = value;
                }
            }
            value--;
        }
        // Print the pattern
        for(int i=0; i<size; i++){
            for(int j=0; j<size; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }       
        sc.close();
    }
}

// Explain logic: The code creates a square pattern of size (2*n - 1) x (2*n - 1) where the outermost layer contains the value 'n', and each subsequent inner layer contains a value that is decremented by 1 until it reaches 1 at the center. The pattern is built layer by layer, starting from the outermost layer and moving inward. The value for each layer is assigned to the corresponding positions in a 2D array, which is then printed to display the final pattern.
