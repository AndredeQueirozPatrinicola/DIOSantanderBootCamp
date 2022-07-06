
public class casting {
	
	public static void main(String[] arg) {
		
		byte b1;
		short s1 = 1000;
		
		b1 = (byte) s1;
		
		long l1;
		int i1 = 10;
		l1 = i1;
		
		int i2;
		long l2 = 100000000;
		i2 = (int)l2;
		
		double d2;
		float f1 = 10.5f;
		d2 = f1;
		
		System.out.println(b1);
		System.out.println(l1);
		System.out.println(i2);
		System.out.println(d2);
		
	}
	
}
