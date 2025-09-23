package routes

import "github.com/gin-gonic/gin"

func AuthRoutes(incommingRoutes *gin.Engine) {
	incommingRoutes.POST("users/signup", controller.SignUp())
	incommingRoutes.POST("users/login", controller.Login())
}
