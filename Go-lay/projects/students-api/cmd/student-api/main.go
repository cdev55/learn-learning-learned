package main

import (
	"context"
	"log"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/cdev55/go-student-api/internal/config"
	"github.com/cdev55/go-student-api/internal/http/handlers/student"
)

func main() {
	config := config.MustLoad()

	router := http.NewServeMux()

	router.HandleFunc("GET /api/student", student.CreateStudent())

	server := http.Server{
		Addr:    config.Addr,
		Handler: router,
	}

	slog.Info("Server started successfully at ", slog.String("address", config.Addr))

	done := make(chan os.Signal, 1)

	signal.Notify(done, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		err := server.ListenAndServe()
		if err != nil {
			log.Fatalf("Error while listening the server %s", err)
		}
	}()

	<-done
	slog.Info("Shutting down the server")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)

	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		slog.Info("failed to shutdown the server", slog.String("error", err.Error()))
	}
	slog.Info("Server shutdown successfully")
}
