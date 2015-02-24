package main

import (
  "fmt"
  "time"
)

func main() {
  for i := 1; i < 10; i++ {
    time.Sleep(time.Minute)
    fmt.Println(i)
  }
}
