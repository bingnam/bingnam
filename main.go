package main

import (
  "fmt"
  "time"
)

func main() {
  for i := 1; i < 100; i++ {
    time.Sleep(time.Minute)
    fmt.Println(i)
  }
}
