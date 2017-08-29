# brewsky

## Installing dependencies

`re-natal` requires that any dependencies you want to `js/require` need to be added to `re-natal`'s
configuration.

```shell
$ make install PKG=some-npm-package
```

This will yarn add the package and call `re-natal use-component` on it to add it to the config. Be sure
to restart your repl process.

### Linking dependencies

In some cases you may have to link a package into the iOS or Android platforms (e.g. react-native-icons needs
files copied certain places so that it will work). This is in addition to needing to inform `re-natal`
about the new package. The following command will `yarn add`, `re-natal use-component`, and `react-native link`
the given `PKG`.

```shell
$ make link PKG=some-npm-package-with-native-needs
```

## Running in Development

### Terminal 1: REPL

Start your repl but make sure the output doesn't have any syntax or parse errors. If it does
nothing will work and you will be annoyed.

```shell
$ make repl
# or
$ make repl PLATFORM=android
```

### Terminal 2: Webpack

Start react-native:

```shell
$ make packager
```

### Terminal 3: XCode Build, Run in Simulator

To compile the XCode project and run the simulator:

```shell
$ make
# or
$ make compile
# or
$ make compile PLATFORM=android
```

## Running tests

Running `make test` will run compile your src and test files, watching for changes,
and will run the `test/runners/doo.cljs` file.

Tests are not auto-discovered, so be sure to `:require` your test in `test/runners/doo.cljs`
and add the quoted namespace to the function call at the bottom of the file.

```shell
# Automatically runs tests on file changes
$ make test
```

