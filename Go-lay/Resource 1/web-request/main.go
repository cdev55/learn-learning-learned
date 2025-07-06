package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

var url = "https://www.google.com/"

func main() {
	fmt.Println("Welcome to Web-Requests")
	response, err := http.Get(url)
	checkNilErr(err)

	// fmt.Println("This is the response \n", response)
	defer response.Body.Close()

	databyte, err := ioutil.ReadAll(response.Body)
	checkNilErr(err)

	content := string(databyte)

	fmt.Println("This is the body of the url:\n", content)

}

func checkNilErr(err error) {
	if err != nil {
		panic(err)
	}
}
