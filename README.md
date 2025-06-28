# Angular Web to Android app:

## Project setup: 
- To install all libraries in this project run: `npm install`
- To start this project run (web): `ng serve`
- To start project for android: 
```bash
npx cap sync android 
npx cap run android
```

## Installing Java (JDK) version 21:

**macOS:**
1. Install Homebrew (if not already installed):
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install Java using Homebrew:
`brew install openjdk@21`

**Linux:**
`sudo apt update`
`sudo apt install openjdk-21-jdk`

**Windows:**
1. Download version 21.0.7 (build 21.0.2+13) from Adoptium:
[https://adoptium.net/temurin/releases/?os=any&arch=any&version=21](https://adoptium.net/temurin/releases/?os=any&arch=any&version=21)

2. Run installer (default settings are fine).

Verify the installation (on macOS/Linux via Terminal or Windows via CMD):
`java --version`
The output should include something like:
```
openjdk 21.0.7 ...
```

## Installing Android Studio:

Download Android Studio from the official archive:
https://developer.android.com/studio/archive

Version used for this tutorial:
Android Studio Meerkat | 2024.3.1 Patch 2 (April 21, 2025)

_The installation is straightforward — just download and follow the installer prompts._

---

## Video Tutorial:
- [Video Tutorial on YouTube](https://youtu.be/NF9DStZno2A)