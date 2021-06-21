# vscode

## language server

<https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer>

## debugger

<https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb>

launch.json
```json
{
    "type": "lldb",
    "request": "launch",
    "name": "Debug",
    "cargo": {
        "args": [
            "build",
        ]
    },
    "args": [],
    "cwd": "${workspaceFolder}"
}
```
