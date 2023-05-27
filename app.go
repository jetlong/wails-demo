package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (b *App) ShowDialog(title string,msg string) {
	// _, err := runtime.MessageDialog(b.ctx, runtime.MessageDialogOptions{
	// 	Type:    runtime.InfoDialog,
	// 	Title:   "Native Dialog from Go",
	// 	Message: "This is a Native Dialog send from Go.",
	// })

	// if err != nil {
	// 	panic(err)
	// }

	selection, err := runtime.MessageDialog(b.ctx, runtime.MessageDialogOptions{
		Title:         title,
		Message:       msg,
		Buttons:       []string{"one", "two", "three", "four"},
		DefaultButton: "two",
		CancelButton:  "three",
	})

	if err != nil {
		panic(err)
	}

	fmt.Sprintf("Hello %s, It's show time!", selection)

}

// func MessageDialog(ctx context.Context, dialogOptions MessageDialogOptions) (string, error)

// 	//   selection, err := runtime.MessageDialog(b.ctx, runtime.MessageDialogOptions{
// 	// 	Title:   "It's your turn!",
// 	// 	Message: "Select a number",
// 	// 	Buttons: []string{"one", "two", "three", "four"},
// 	// })
// }
