import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        int a1 = scanner.nextInt();
        int a2 = scanner.nextInt();
        int a3 = scanner.nextInt();

        int andar1 = 0 + (2*a2) + (4*a3);
        int andar2 = (2*a1) + 0 + (2*a3);
        int andar3 = (4*a1) + (2*a2) + 0;

        int tempoMinimo = Math.min(andar1, Math.min(andar2, andar3));

        System.out.println(tempoMinimo);
    }
}
