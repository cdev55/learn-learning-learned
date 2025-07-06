package main

import (
	"fmt"
	"strings"
)

func main() {
	conferenceName := "Go Conference"
	const conferenceTickets int = 50
	var remainingTickets uint = 50

	fmt.Println("Welcome to", conferenceName, "booking application")
	fmt.Printf("We have total of %v tickets and there are still %v tickets available\n", conferenceTickets, remainingTickets)
	fmt.Println("Get your tickets here to attend.")

	var firstName string
	var lastName string
	var email string
	var userTickets uint
	var bookings []string

	for {

		fmt.Println("Enter your first name:")
		fmt.Scan(&firstName)

		fmt.Println("Enter your last name:")
		fmt.Scan(&lastName)

		fmt.Println("Enter your email address:")
		fmt.Scan(&email)

		fmt.Println("Enter no. of tickets:")
		fmt.Scan(&userTickets)

		bookings = append(bookings, firstName+" "+lastName)

		fmt.Printf("The whole Slice is: %v\n", bookings)
		fmt.Printf("Fisrt value of the Slice is: %v\n", bookings[0])
		fmt.Printf("The type of bookings is: %T\n", bookings)
		fmt.Printf("The size of the Slice is : %v\n", len(bookings))

		fmt.Println(userTickets > remainingTickets)
		fmt.Println(userTickets, remainingTickets)
		if userTickets > remainingTickets {
			fmt.Println("Sorry, there are not enough tickets left.")
			continue
		}
		remainingTickets = remainingTickets - userTickets

		fmt.Printf("Thankyou %v %v for booking %v tickets. You will receive a confirmation email at %v\n", firstName, lastName, userTickets, email)
		fmt.Printf("%v tickets remaining for %v\n", remainingTickets, conferenceName)

		if remainingTickets == 0 {
			fmt.Println("You can't book any more tickets.")
			break
		}

		firstNames := []string{}

		for _, booking := range bookings {
			var names = strings.Fields(booking)
			firstNames = append(firstNames, names[0])
		}

		fmt.Printf("These first name of the bookings: %v\n", firstNames)
	}

}
