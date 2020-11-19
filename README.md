This was a fun exercise, learning to create a CLI app using Node.js. This "package" could be published and installed by others as a global package. This makes it usable by anyone, on any platform, running Node.js (unlike a bash or PowerShell script).

Using the `commander` and `inquirer` packages provides a simple way to create responses and collect input.

If installed as a global package this is an example of what you get when running the `qotd` command. This is an automatically generated help screen.

```sh
> qotd

Usage: qotd [options] [command]

Options:
  -h, --help      display help for command

Commands:
  list|ls         List qotd options
  quick|q         Return a random quote
  author|a        Choose an author and get a quote
  help [command]  display help for command
```

If you use the `author` option you get a list to choose from:

```sh
> qotd a

Author Quote
----------------
? Choose an author
  Buddha
  Mark Twain
❯ Yogi Berra
  William Shakespeare
```

The app is pulling from a free API of 1,600+ famous quotes. Like I said, a fun little exercise!
