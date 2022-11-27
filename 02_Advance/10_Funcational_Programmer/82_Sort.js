//Sort
var arr = [2, 3, 54, 64, 63, 76, 3, 41, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5]
arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
});
console.log(arr)

//Sort With Negative
var arr2 = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
arr2.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(arr2)

//Sort in Descending Order
var arr3 = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
arr3.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log(arr3)

//New Short
var newArr = arr2.sort(function (x, y) {
    if (x > y) {
        return 1
    }
    else if (x < y) {
        return -1
    }
    else {
        return 0
    }
})
var newArr2 = arr3.sort(function (x, y) {
    if (x > y) {
        return -1
    } else if (x < y) {
        return 1
    }
    else {
        return 0
    }
})
console.log()
console.log("New: " + newArr)
console.log("New: " + newArr2)
console.log()

//Array Object Sorting
var book = [
    {
        name: "Adorsho Purus",
        price: 60
    },
    {
        name: "Biye",
        price: 256
    },
    {
        name: "Cintaoporad",
        price: 290
    },
    {
        name: "Do 7 things",
        price: 150
    }
]
book.sort(function (a, b) {
    if (a.price > b.price) {
        return 1
    } else if (a.price < b.price) {
        return -1
    } else {
        return 0
    }
});
console.log(book)

//New
var books = [
    {
        name: "Adorsho Purus",
        price: 60
    },
    {
        name: "Biye",
        price: 256
    },
    {
        name: "Cintaoporad",
        price: 290
    },
    {
        name: "Do 7 things",
        price: 150
    }
]

books.sort(function (m, n) {
    if (m.name > n.name) {
        return 1
    } else if (m.name < n.name) {
        return -1
    } else {
        return 0
    }
})
console.log(books)


console.log("---------------------")

var newArr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var newArr2 = newArr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
var newArr3 = newArr.sort(function (a, b) {
    if (a < b) {
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})
var newArr4 = [
    {
        name: "Saidul Khaitr",
        author: "Inul Jawji RA"
    },
    {
        name: "Kitabut Tawhid",
        author: "Muhammad Ibn Abdul"
    },
    {
        name: "Madarijus Salikin",
        author: "Ibn Taimiya"
    },
    {
        name: "Kitabut Juhod",
        author: "Ahmad Ibn Hamble"
    }
]
newArr4.sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})
var newArr5 = [
    {
        name: "Saidul Khaitr",
        author: "Inul Jawji RA"
    },
    {
        name: "Kitabut Tawhid",
        author: "Muhammad Ibn Abdul"
    },
    {
        name: "Madarijus Salikin",
        author: "Ibn Taimiya"
    },
    {
        name: "Kitabut Juhod",
        author: "Ahmad Ibn Hamble"
    }
]
newArr5.sort(function (a, b) {
    if (a.author > b.author) {
        return 1
    } else if (a.author < b.author) {
        return -1
    } else {
        return 0
    }
})
console.log(newArr2)
console.log(newArr3)
console.log(newArr4)
console.log(newArr5)


console.log("---------------------")




