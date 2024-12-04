# 🧙‍♂️ Ant Idle Tibia

**Ant Idle Tibia** is a Node.js automation script designed to handle repetitive tasks in the game **Tibia**. It uses [nut.js](https://github.com/nut-tree/nut.js) to control keyboard and mouse events and [pkg](https://github.com/vercel/pkg) to generate cross-platform executables. 🚀

---

## 📂 Project Structure

```
.
├── bin/                     # Compiled binaries (output directory)
├── src/                     # Source code
│   ├── core/                # Core functionality
│   │   ├── DynamicIntervalJob.js
│   │   ├── Job.js
│   │   ├── JobManager.js
│   │   └── index.js
│   ├── utils/               # Utility functions
│   │   ├── arrowsNames.js
│   │   ├── generateRandomInterval.js
│   │   ├── getRandomArrows.js
│   │   ├── logWithTimestamp.js
│   │   └── index.js
│   └── index.js             # Main entry point
├── .gitignore               # Git ignored files
├── package.json             # Project configuration and dependencies
└── .nvmrc                   # Recommended Node.js version
```

---

## ✅ Pre-requisites

Before running the project, make sure you have the following installed:

- **Node.js** (use the version specified in `.nvmrc`)
- **NPM** or **Yarn**
- **pkg** (to create executable files)

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

This will generate executables inside the `bin/` directory.

---

## 🛠️ How to Use

### Run in Development Mode

```bash
node src/index.js
```

### Run the Compiled Executable

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

- **`npm run compile`**: Compiles the project into cross-platform binaries for Linux, macOS, and Windows.

---

## 🌟 Features

- ✨ **Anti-idle Automation**: Executes key combinations to prevent automatic disconnection in the game.
- 🔀 **Dynamic and Random Arrow Keys**: 
  - On each execution, the script randomly selects **at least two arrow keys** (`Arrow Up`, `Arrow Down`, `Arrow Left`, `Arrow Right`) for `Ctrl` key combinations.
  - Displays the selected keys in the console (e.g., `Arrow Up, Arrow Right`).
- ⚡ **Configurable Hotkeys**: Allows customization of keyboard actions, like pressing the `6` key.
- ⚙️ **Task Management**: Centralized configuration and control of dynamic intervals for automation.
- 🚀 **High Performance**: Built with Node.js to ensure precision and speed in commands.
- 💻 **Cross-platform binaries**: Compatible with Linux, macOS, and Windows.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open **Issues** or submit **Pull Requests** to help improve the project. 🙌

---

## 📜 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). See the `LICENSE` file for more details.

---

## 📧 Contact

For any inquiries or feedback, feel free to reach out via GitHub or open an issue.