# 📐 String Calculator (JavaScript)

A TDD-based JavaScript utility function that calculates the sum of numbers in a string using customizable delimiters. Built to demonstrate clean, test-driven JavaScript coding practices.

---

## 🚀 Features

* Add numbers passed as a string
* Supports:

  * Comma `,` and newline `\n` as default delimiters
  * Custom single-character or multi-character delimiters (`//[delim]\n`)
* Throws error on negative numbers, listing all negatives


---

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6)
* **Testing:** [Jest](https://jestjs.io/)
* **Paradigm:** Test-Driven Development (TDD)

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dhruvikmodi23/String_Calculator.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run tests**

   ```bash
   npm test
   ```

---

## 📘 Usage

```js
const { add } = require('./stringCalculator');

console.log(add(""));              // Output: 0
console.log(add("1"));             // Output: 1
console.log(add("1,2"));           // Output: 3
console.log(add("1,2,3,4,5"));     // Output:15
console.log(add("1\n2,3"));        // Output: 6
console.log(add("//;\n1;2"));      // Output: 3
```

---

## ❗ Error Handling

Throws an error test cases:

```js
add("2,-3,4,-1");
// Error: Negatives not allowed: -3, -1
add("//;1;2");
// Error: Missing newline after '//delimiter'
add("//\n1,2");
// Error: Custom delimiter cannot be empty
add("//1\n1,2");
// Error: Custom delimiter cannot contain numbers: "1"
add("//$\n1,2");
// Error: Regex special characters not allowed in delimiter: "$"
```

---

## 🧪 Running Tests

The project uses Jest for unit testing.
Run tests with:

```bash
npm test
```

Test cases are written in the `Test/stringCalculator.test.js` file.

---

## 📂 Project Structure

```
String_Calculator/
├── Screenshots/
    └── 1stTestCase.png
    └── 2ndTestCase.png
    └── 3rdTestCase.png
    └── 4thTestCase.png
    └── 5thTestCase.png
    └── 6thTestCase.png
    └── 7thTestCase.png
    └── CustomDelimiterErrorHandling.png
    └── RefactorCode.png
├── Test/
│   └── stringCalculator.test.js
├── stringCalculator.js
├── package.json
└── README.md
```

---

## 📌 TDD Practice

This project was built using the principles of Test-Driven Development:

* ✅ Write a failing test
* 🛠️ Write the minimal code to pass the test
* 🔁 Refactor the code
* 🔁 Repeat

Every logical block in the `add()` function has corresponding tests ensuring correctness.

---

## 🤝 Contribution

Contributions are welcome!

To contribute:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m "Added feature"`
4. Push to the branch: `git push origin feature/feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---


