package main

import (
	"fmt"
	"sync"
)

func printTask(id int, w *sync.WaitGroup) {
	defer w.Done()
	fmt.Println("Doing Task: ", id)
}
func main() {
	var wg sync.WaitGroup
	for i := 0; i <= 10; i++ {
		wg.Add(1)
		go printTask(i, &wg)
	}
	// for i := 0; i < 4; i++{
	// 	fmt.Printf("GeeksforGeeks\n")
	//   }

	wg.Wait()

}
