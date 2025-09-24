package routes

import (
	"github.com/gin-gonic/gin"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.User(middleware.Authenticate())
	incomingRoutes.GET("/users", controller.getUsers())
	incomingRoutes.GET("/user/user_id", controller.getUser())
}
