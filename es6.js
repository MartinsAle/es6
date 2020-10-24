//  forEACH HELPER -> loop through an array and return each value inside it
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) {
    sum += number;
});
console.log(sum);

//exercicio1
function handlePosts() {
    var posts = [{
            id: 23,
            title: 'Daily JS News'
        },
        {
            id: 52,
            title: 'Code Refactor City'
        },
        {
            id: 105,
            title: 'The Brightest Ruby'
        }
    ];

    posts.forEach(function (post) {
        savePost(post);
    });

}

//exercicio2
var images = [{
        height: 10,
        width: 30
    },
    {
        height: 20,
        width: 90
    },
    {
        height: 54,
        width: 32
    }
];
var areas = [];

images.forEach(function (image) {
    areas.push(image.height * image.width);
});

console.log(areas);

// MAP HELPER - return a new array
var numbers2 = [1, 2, 3];
var doubledNumbers2 = [];

var doubled = numbers2.map(function (number) {
    return number * 2;
});

console.log(doubled);

var cars = [{
        model: 'Buick',
        price: 'CHEAP'
    },
    {
        model: 'Camaro',
        price: 'Expensive'
    }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);

// exercio1
var images = [{
        height: '34px',
        width: '39px'
    },
    {
        height: '54px',
        width: '19px'
    },
    {
        height: '83px',
        width: '75px'
    },
];

var heights = [];

images.map(function (image) {
    return heights.push(image.height);
});

console.log(heights);

//exercicio2
var trips = [{
        distance: 34,
        time: 10
    },
    {
        distance: 90,
        time: 50
    },
    {
        distance: 59,
        time: 25
    }
];

var speeds = [];

trips.map(function (trip) {
    return speeds.push(trip.distance / trip.time);
});
console.log(speeds);

// exercicio3
var plants = [{
        color: 'red'
    },
    {
        color: 'blue'
    },
    {
        color: 'yellow'
    }
];

function pluck(array, property) {
    var newArray = [];
    return newArray = array.map(function (value) {
        return value[property];
    });
}
console.log(pluck(plants, 'color'));

// FILTER HELPER -> loop through an array and returns a value based on a logic test
var products = [{
        name: 'cucumber',
        type: 'vegetable',
        quantity: 0,
        price: 1
    },
    {
        name: 'banana',
        type: 'fruit',
        quantity: 10,
        price: 15
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 30,
        price: 9
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 3,
        price: 5
    }
];
var filteredProducts = [];
var filteredProducts2 = [];
products.filter(function (product) {
    if (product.type === 'fruit') {
        return filteredProducts.push(product);
    }
});
products.filter(function (product) {
    if (product.type === 'vegetable' && product.quantity > 0 && product.price < 10) {
        return filteredProducts2.push(product);
    }
});
console.log(filteredProducts);
console.log(filteredProducts2);

var post = {
    id: 4,
    title: 'New Post'
};
var comments = [{
        postId: 4,
        content: 'awesome post'
    },
    {
        postId: 3,
        content: 'it was ok'
    },
    {
        postId: 4,
        content: 'neat'
    }
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));

// exercicio1
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

numbers.filter(function (number) {
    if (number > 50) {
        return filteredNumbers.push(number);
    }
});

console.log(filteredNumbers);

//exercicio2
var users = [{
        id: 1,
        admin: true
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: false
    },
    {
        id: 4,
        admin: false
    },
    {
        id: 5,
        admin: true
    },
];

var filteredUsers = [];

users.filter(function (user) {
    if (user.admin) {
        return filteredUsers.push(user);
    }
});
console.log(filteredUsers);

//exercicio3
var numbers3 = [10, 20, 30];
var lessThenFifteen = [];

function reject(array, iteratorFunction) {
    return array.filter(function (e) {
        return !iteratorFunction(e);
    });
}
lessThenFifteen = reject(numbers3, function (number) {
    return number > 15;
});


console.log(lessThenFifteen);
// let animals = ['cat', 'dog', 'rabbit'];

// function reject(array, iteratorFunction) {
//     return array.filter(e => {
//         return !iteratorFunction(e);
//     })
// }

// let noDog = reject(animals, function (type) {
//     return type === 'dog';
// })
// console.log(noDog);

// FIND HELPER - return the first result found in an array
var users = [{
        name: 'Jill'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Bill'
    },
];

var result = users.find(function (user) {
    return user.name === 'Alex';
});
console.log(result);

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buik'),
    new Car('Camaro'),
    new Car('Focus')
];

var foundedCars = cars.find(function (car) {
    return car.model === 'Focus';
});
console.log(foundedCars);

var posts2 = [{
        id: 1,
        title: 'New Post'
    },
    {
        id: 2,
        title: 'Old Post'
    }
];

var comment = {
    postId: 1,
    content: 'Great Post'
};

function postComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}
console.log(postComment(posts2, comment));

// exercicio1
var users = [{
        id: 1,
        admin: false
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: true
    }
];

var admin;

admin = users.find(function (user) {
    return user.admin;
});

// exercicio2
var accounts = [{
        balance: -10
    },
    {
        balance: 12
    },
    {
        balance: 0
    }
];

var account;

account = accounts.find(function (account) {
    return account.balance === 12;
});

// exercicio3
var ladders = [{
        id: 1,
        height: 20
    },
    {
        id: 3,
        height: 25
    }
];

function findWhere(array, criteria) {
    return array.find(function (e) {
        return e[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
    });
}

var fwResult = findWhere(ladders, {
    height: 25
});
console.log(fwResult);

//EVERY AND SOME - every = return true if all params satisfies the logic test | some = return true if one param satisfies the logic test
var computers = [{
        name: 'Apple',
        ram: 24
    },
    {
        name: 'Compaq',
        ram: 4
    },
    {
        name: 'Acer',
        ram: 32
    }
];

var everyCanRun = computers.every(function (computer) {
    return computer.ram > 16
});
console.log(everyCanRun);

var someCanRun = computers.some(function (computer) {
    return computer.ram > 16;
});
console.log(someCanRun);

var names = ["Alexandria", "Matthew", "Joe"];

var namesLengthEvery = names.every(function (name) {
    return name.length > 4;
});
console.log(namesLengthEvery);

var namesLengthSome = names.some(function (name) {
    return name.length > 4;
});
console.log(namesLengthSome);

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthDate = new Field("26/09/2020");

var fields = [username, password, birthDate];

var fomrIsValid = fields.every(function (field) {
    return field.validate();
});
console.log(fomrIsValid);
if (fomrIsValid) {
    /*submit*/
} else {
    /*error*/
}

// exercicio1
var users = [{
        id: 21,
        hasSubmitted: true
    },
    {
        id: 62,
        hasSubmitted: false
    },
    {
        id: 4,
        hasSubmitted: true
    }
];

var hasSubmitted;

hasSubmitted = users.every(function (user) {
    return user.hasSubmitted;
});

// exercicio2
var requests = [{
        url: '/photos',
        status: 'complete'
    },
    {
        url: '/albums',
        status: 'pending'
    },
    {
        url: '/users',
        status: 'failed'
    }
];

var inProgress;

inProgress = requests.some(function (request) {
    return request.status === 'pending';
});

// REDUCE HELPER -> O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
var numbers = [10, 20, 30];
var sum = 0;

var sumResult = numbers.reduce(function (sum, numbers) {
    return sum + numbers;
}, 0);
console.log(sumResult);

var primaryColors = [{
        color: 'red'
    },
    {
        color: 'yellow'
    },
    {
        color: 'blue'
    },
];

var pc = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);
console.log(pc);

function balancedParents(string) {
    return !string.split("").reduce(function (previous, char) {
        if (previous < 0) {
            return previous;
        }
        if (char === "(") {
            return ++previous
        }
        if (char === ")") {
            return --previous
        }

        return previous;
    }, 0);
}
console.log(balancedParents("((())))"));

// exercicio1
var trips = [{
    distance: 34
}, {
    distance: 12
}, {
    distance: 1
}];

var totalDistance;

totalDistance = trips.reduce(function (previous, trip) {
    return previous + trip.distance;
}, 0);

// exercicio2
var desks = [{
        type: 'sitting'
    },
    {
        type: 'standing'
    },
    {
        type: 'sitting'
    },
    {
        type: 'sitting'
    },
    {
        type: 'standing'
    }
];

var deskTypes = desks.reduce(function (previous, desk) {
    previous[Object.values(desk)]++;

    return previous;
}, {
    sitting: 0,
    standing: 0
});
console.log(deskTypes);

// exercicio3
var numbersCustom = [1, 1, 2, 3, 4, 4];

function unique(array) {

    return array.reduce(function (acc, number) {

        if (acc.find(function (acc_num) {
                return acc_num === number
            })) {

            return acc

        }

        acc.push(number)

        return acc

    }, [])
}
console.log(unique(numbersCustom));

// CONST AND LET
const nameEmployee = "Jane";
let title = "Software Engenieer";
let hourlyWage = 40;

// exercio1
const nameEmployee2 = "Jane";
let age = 24;
const dateOfBirth = "10/10/2020";

// exercicio2
const statuses = [{
        code: 'OK',
        response: 'Request successful'
    },
    {
        code: 'FAILED',
        response: 'There was an error with your request'
    },
    {
        code: 'PENDING',
        response: 'Your reqeust is still pending'
    }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}

// TEMPLATE STRING
function getMessage() {
    const year = new Date().getFullYear();

    return `The year is ${year}`;
}
console.log(getMessage());

const device_id = 4;
const guid = 20;
const userName = "helo";

const data = `{"device_id": "${device_id}","guid":"${guid}","username":"${userName}","}`;
console.log(data);

// exercicio1
function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
}

// exercicio2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// ARROW FUNCTION
const add = (a, b) => a + b;
console.log(add(4, 2));

const double = (number) => 2 * number;
const double1 = (number1, number2) => 2 * number1 + 2 * number2;
const double2 = (number => 2 * number);
const double3 = number => 2 * number;
const double4 = () => {
    return 2;
}
const double5 = (number) => {
    return 2 * number;
}

const numbersAF = [1, 2, 3];
numbersAF.map(number => 2 * number);

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSumary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
console.log(team.teamSumary());

// exercicio1
// const fibonacci = function (n) {
//     if (n < 3) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// exercicio2
const profile = {
    name: 'Alex',
    getName: function () {
        return this.name;
    }
};

// ENHANCED OBJECT LITERALS
// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce((total, book) => total + book.price, 0);
//         },
//         priceForTitle: function (title) {
//             return this.inventory.find(book => book.title === title).price;
//         }
//     };
// }
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [{
        title: 'Harry Potter',
        price: 10
    },
    {
        title: 'Eloquent Javascript',
        price: 15
    },
];

const bookShop = createBookShop(inventory);
console.log(bookShop);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

// function sveFile(url, data) {
//     $.ajax({
//         method: 'POST',
//         url: url,
//         data: data
//     });
// }
// function saveFile(url, data) {
//     $.ajax({
//         url,
//         data,
//         method: 'POST'
//     });
// }

// const url = "http://fileupload.com";
// const data2 = {
//     color: 'red'
// };
// saveFile(url, data2);

// exercicio1
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = {
    red,
    blue
};

// exercicio2
const fields2 = ['firstName', 'lastName', 'phoneNumber'];

const props = {
    fields2
};

//exercicio3
const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}

//exercicio4
const color = 'red';

const Car2 = {
    color,
    drive: function () {
        return 'Vroom!';
    },
    getColor: function () {
        return this.color;
    }
};

// DEFAULT FUNCTION ARGUMENTS
// function makeAjaxRequest(url, method){
//     if(!method){
//         method = 'GET';
//     }
// }
function makeAjaxRequest(url, method = 'GET') {
    return method;
}
console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}
const newUser = new User(generateId());
console.log(createAdminUser());
console.log(createAdminUser(newUser));

// exercicio1
// function sum(a, b) {
//     if (a === undefined) {
//         a = 0;
//     }

//     if (b === undefined) {
//         b = 0;
//     }

//     return a + b;
// }
function sum(a = 0, b = 0) {
    return a + b;
}

// exercicio2
// function addOffset(style) {
//     if (!style) {
//         style = {};
//     }

//     style.offset = '10px';

//     return style;
// }
function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}

// REST AND SPREAD OPERTOR
// function addNumbers(numbers) {
//     return numbers.reduce((sum, number) => {
//         return sum + number;
//     }, 0);
// }
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fired red', 'fall orange'];
console.log(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}
console.log(validateShoppingList('oranges', 'bread'));

const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
}
console.log(MathLibrary.calculateProduct(2, 3));

// exercicio1
// function product(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];

//     return numbers.reduce(function (acc, number) {
//         return acc * number;
//     }, 1)
// }
function product(...numbers) {
    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

// exercicio2
// function join(array1, array2) {
//     return array1.concat(array2);
// }
function join(array1, array2) {
    return [...array1, ...array2];
}

// exercicio3
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }
function unshift(array, ...array2) {
    return [...array2, ...array];
}

//DESTRUCTURING
var expense = {
    type: 'Busines',
    amount: '$45 USD'
}

// var type = expense.type;
// var amount = expense.amount;
//o nome das constantes deve ser igual aos nomes dos atributos do objeto
const {
    type,
    amount
} = expense;
console.log(type);
console.log(amount);

var savedFile = {
    extension: 'jpg',
    name: 'report',
    size: 14040
}

//destructuring arguments objects
function fileSummary({
    name,
    extension,
    size
}) {
    return `The file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(savedFile));

//destructuring arrays
const companies = [
    'google',
    'facebook',
    'uber'
];
// const [name, name2, name3] = companies;
const {
    length
} = companies;
const [name, name2, ...rest] = companies;
console.log(rest);

//destructuring array and objects at the same time