package main

import (
	"fmt"
	"time"
)

func main() {
	//Regular switch
	num := 2

	switch num {
	case 1:
		fmt.Println("One")
	case 2:
		fmt.Println("Two")
	default:
		fmt.Println("Something else")
	}

	//multivalue switch

	var today = time.Now().Weekday()
	switch today {
	case time.Saturday, time.Sunday:
		fmt.Println("Weekend")
	default:
		fmt.Println("Weekday")
	}

	//type switch

	whoAmI := func(i interface{}) {

		switch i.(type) {
		case int:
			fmt.Println("I am an integer")
		case string:
			fmt.Println("I am a string")
		default:
			fmt.Println("I am something else")
		}

	}

	whoAmI(78.98)
}
