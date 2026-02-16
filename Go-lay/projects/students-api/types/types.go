package types

type Student struct {
	Id    int64  `json:"id"`
	Name  string `json:"name" validate:"true"`
	Email string `json:"email" validate:"true"`
	Age   int    `json:"age" validate:"true"`
}
