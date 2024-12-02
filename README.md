# 🧙‍♂️ Ant Idle Tibia

**Ant Idle Tibia** is a Node.js automation script designed to handle repetitive tasks in the game Tibia. It leverages the power of [nut.js](https://github.com/nut-tree/nut.js) to control mouse and keyboard events and uses [pkg](https://github.com/vercel/pkg) to generate cross-platform executables. 🚀

---

## 📂 Project Structure

```
.
├── bin/                     # Compiled binaries (output directory)
├── src/                     # Source code
│   ├── index.js             # Main entry point
│   ├── Job.js               # Job handling logic
│   └── JobManager.js        # Task management system
├── .gitignore               # Git ignored files
├── package.json             # Project configuration and dependencies
└── .nvmrc                   # Recommended Node.js version
```

---

## ✅ Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (use the version specified in `.nvmrc`)
- **NPM** or **Yarn**
- **pkg** (for creating executable files)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/victorreinor/ant-idle-tibia.git
cd ant-idle-tibia
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install `pkg` Globally

```bash
npm install -g pkg
```

### 4️⃣ Compile the Project

```bash
npm run compile
```

This will generate the executables inside the `bin/` directory.

---

## 🛠️ How to Use

### Run in Development Mode

```bash
node src/index.js
```

### Run the Compiled Binary

#### Linux/macOS:
```bash
./bin/automation-script
```

#### Windows:
```cmd
bin\automation-script.exe
```

---

## 🔧 Available Scripts

- **`npm run compile`**: Compile the project into cross-platform binaries for Linux, macOS, and Windows.

---

## 🌟 Features

- ✨ **Cross-platform binaries**: Works on Linux, macOS, and Windows.
- ⚙️ **Customizable automation**: Manage repetitive tasks easily.
- 🚀 **High performance**: Built using Node.js and optimized for gaming automation.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open **Issues** or submit **Pull Requests** to help improve the project. 🙌

---

## 📜 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). See the `LICENSE` file for details.

---

## 📧 Contact

For any inquiries or feedback, feel free to reach out to me via GitHub or open an issue.
