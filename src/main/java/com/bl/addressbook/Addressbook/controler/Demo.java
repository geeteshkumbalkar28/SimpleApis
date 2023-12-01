package com.bl.addressbook.Addressbook.controler;

import java.util.ArrayList;
import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int arr[] = {1,2,3,4,5};
        System.out.println("enter the value");
        int input = scanner.nextInt();
        int temp[] = new int[arr.length]; /// 3 4 5   // 5

        for (int i = 0; i<arr.length;i++){
            if(arr[i] == input){
                int counter=0;
                for (int j = i;j<arr.length;j++){

                    temp[counter] = arr[j];
                    counter++;
                }

                int tempOne=(temp.length-i)-1;

                for (int j = i ;j<arr.length;j++){
                  arr[j] = temp[tempOne];
                  tempOne--;
                }
                break;
            }
        }
        for (int i = 0 ; i<arr.length;i++){
            System.out.println(arr[i]);
        }

    }
}
