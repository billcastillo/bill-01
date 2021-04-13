---
title: How to set default directory for Powershell and Hyper Terminal
date: 2021-04-12
author: Bill Castillo
description: ez steps
---

## Set default location in powershell

To set a default directory you need to **create a new profile**. Open Powershell as administrator and type the command below:

```powershell
New-Item -path $profile -type file –force
```

Once created, let's edit your profile configurations. Run the command below. This should open a blank notepad.

```powershell
Notepad $profile
```

Run this command every time you want to edit your profile configs.

To **add the default directory**, add the line below in the notepad:

```powershell
Set-location C:\Documents\Projects
```

![Editing powershell profile in notepad][powershell-notepad]

Save then restart Powershell. You should have the new default directory.

---

## Configuring Hyper Terminal default directory

It's important to note that [Hyper](https://hyper.is/) is just a [computer terminal](https://en.wikipedia.org/wiki/Computer_terminal) like [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701). It only takes input and the underlying shell is the one that executes the commands. If you're using Windows 10, you probably have `bash` as the default shell.

We need to change your default shell for your Hyper app to Powershell.

Open your Hyper Terminal app then, press `CTRL + ,` to open the configuration settings. This should open `hyper.js`.

![Setting default directory in hyper terminal][hyper-default-directory]

Scroll down and uncomment the config to set Powershell as the shell for your Hyper app.

```js
// PowerShell on Windows
// - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
shell: 'C:\\WINDOWS\\\system32\\WindowsPowerShell\\v1.0\\powershell.exe',
```

Make sure the directory is correct—and note that for Windows, a double backslash is required.

Next, comment out the `shellArgs: ['--login']` line and add this line to configure your default directory:

```js
// shellArgs: ['--login'],
shellArgs: ['-noexit', '-command', 'Set-Location C:\\Documents\\Projects'],
```

Reload your terminal.

[powershell-notepad]: /static/images/powershell-profile.png "Editing powershell profile in notepad"
[hyper-default-directory]: /static/images/hyper-default-directory.png "Setting default directory in hyper terminal"