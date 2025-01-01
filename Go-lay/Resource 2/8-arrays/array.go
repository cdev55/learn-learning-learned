package main

import "fmt"

func main() {
	var ar1 [4]int
	var ar2 = [4]int{1, 4, 6, 7}
	ar3 := [4]string{"go", "js", "", "java"}
	ar3[2] = "node"
	fmt.Println(ar1, ar2, ar3)

	var ar4 = [3]bool{true, false, false}
	fmt.Println(ar4)
	fmt.Println(len(ar3), len(ar4), ar3)

	//2d array
	var twoD = [2][4]int{{}, {4, 44, 5, 7}}
	fmt.Println(twoD, twoD[1][3])

}
