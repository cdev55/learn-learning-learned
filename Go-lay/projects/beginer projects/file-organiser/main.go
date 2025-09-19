package main

import (
	"fmt"
	"os"
	"path/filepath"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go [directory name]")
		return
	}

	dirPath := os.Args[1]
	fmt.Println("Organizing files in: ", dirPath)

	files, err := readFiles(dirPath)

	if err != nil {
		fmt.Printf("Error reading the directory: %v\n", err)
		return
	}

	// Loop through each file and organize them by  category
	for _, file := range files {
		if !file.IsDir() {
			category := getCategory(file.Name())
			categoryPath := filepath.Join(dirPath, category)
			err := createDirectory(dirPath, category)
			if err != nil {
				fmt.Println("Error while creating the Directory: ", err)
				continue
			}
			// Move files to the category folders
			srcPath := filepath.Join(dirPath, file.Name())
			err = moveFile(srcPath, categoryPath)
			if err != nil {
				fmt.Println("Error while reading the file for X reason: ", err)
			} else {
				fmt.Printf("Moved: %s->%s\n", file.Name(), category)
			}
		}
	}
}

func readFiles(dirPath string) ([]os.DirEntry, error) {
	files, err := os.ReadDir(dirPath)

	if err != nil {
		return nil, err
	}
	return files, nil
}

func getCategory(fileName string) string {
	ext := filepath.Ext(fileName)

	switch ext {
	case ".jpg", "jpeg", ".png", ".gif":
		return "Images"
	case ".mov", ".mkv", ".mp4":
		return "Videos"
	case ".txt", ".doc", ".pdf":
		return "Documents"
	default:
		return "Others"
	}
}

func createDirectory(dirPath, category string) error {
	categoryPath := filepath.Join(dirPath, category)
	return os.MkdirAll(categoryPath, os.ModePerm)
}

func moveFile(filePath, destDir string) error {
	destPath := filepath.Join(destDir, filepath.Base(filePath))
	return os.Rename(filePath, destPath)
}
