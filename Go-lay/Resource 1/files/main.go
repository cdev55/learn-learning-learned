package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	fmt.Println("Welcome to files !!")

	content := "This is some content for out new file"

	file, err := os.Create("./my-file.txt")

	checkNilErr(err)

	length, err := io.WriteString(file, content)
	checkNilErr(err)
	fmt.Printf("Length of the file content is: %v\n", length)

	file.Close()
	readFile("./my-file.txt")

}

func readFile(file string) {
	databyte, err := ioutil.ReadFile(file)
	checkNilErr(err)
	fmt.Println("This is the content of the data:", string(databyte))
}

func checkNilErr(err error) {
	if err != nil {
		panic((err))
	}
}
