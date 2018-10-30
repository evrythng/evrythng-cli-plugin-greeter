# evrythng-cli-plugin-greeter

Example plugin for the [EVRYTHNG CLI](https://github.com/evrythng/evrythng-cli) 
showing how to add a simple `greet` command using the `registerCommand()` method 
provided by the plugin API.


## Usage

Simply install alongside the CLI to make the `greet` command available to use.
Typically this is a global installation:

```
$ npm i -g evrythng-cli-plugin-greeter
```

Then, use the `greet` command:

```
$ evrythng greet Charles
```
```
Hello there, Charles!
```
