package config

type HttpServer struct {
	Addr string
}

type Config struct {
	Env         string
	StoragePath string
	HttpServer
}
