package main

import "fmt"

func main() {
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	//while loop using for
	fmt.Println("........................")
	i := 0
	for i < 8 {
		fmt.Println(i)
		i++

	}
	fmt.Println("**********************")
	// for loop with break and continue
	for j := 0; j < 9; j++ {
		if j*2 == 10 {
			continue
		}
		if j == 7 {
			break
		}
		fmt.Println(j)
	}
}
