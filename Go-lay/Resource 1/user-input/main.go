package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// var userName string
	fmt.Println("Enter your name")
	reader := bufio.NewReader(os.Stdin)
	userName, _ := reader.ReadString('\n')
	// fmt.Scan(&userName)
	fmt.Println("Hello, ", userName)
}
