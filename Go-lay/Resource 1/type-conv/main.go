package main

import (
	"fmt"
	"strconv"
)

func main() {
	var a = 123
	fmt.Printf("Type of a is %T\n", a)
	b := strconv.Itoa(a)
	fmt.Printf("Type of b after conversion is %T\n", b)

	rating := b + "bababobo"
	fmt.Println(rating)
}
