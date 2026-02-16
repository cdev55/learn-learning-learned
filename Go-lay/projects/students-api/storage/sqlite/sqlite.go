package sqlite

import (
	"database/sql"

	"github.com/cdev55/go-student-api/internal/config"
)

type Sqlite struct {
	DB *sql.DB
}

func New(cfg *config.Config) (*Sqlite, error) {
	db, err := sql.Open("sqllite3", cfg.StoragePath)

	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`CREATE TABLE IF NOT EXIST students (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		email TEXT,
		age INTEGER
		)`)

	if err != nil {
		return nil, err
	}

	return &Sqlite{
		DB: db,
	}, nil
}
