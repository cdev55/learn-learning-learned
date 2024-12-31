package main

import "fmt"

func main() {
	age := 4
	if age >= 18 {
		fmt.Println("You are an adult")
	} else if age >= 13 {
		fmt.Println("You are a teenager")
	} else {
		fmt.Println("You are a kid")
	}

	if num := 78; num >= 10 {
		fmt.Println("Number is greater than or equal to 10")
	} else {
		fmt.Println("Number is less than 10")
	}

	hasPermission := false
	role := "admin"

	if hasPermission && role == "admin" {
		fmt.Println("You have permission to access the system")
	} else if hasPermission || role == "admin" {
		fmt.Println("You have partial permission to access the system")
	}
}
