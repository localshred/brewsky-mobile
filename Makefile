.DEFAULT_GOAL := compile
PLATFORM ?= ios

# Install a component via yarn and tell re-natal about it
install:
	yarn add ${PKG} \
		&& re-natal use-component ${PKG}

# Install a component with yarn/re-natal and link it to react-native
link:
	make install PKG=${PKG} \
		&& react-native link ${PKG}

# Start a figwheel repl
repl:
	re-natal use-ios-device simulator \
		&& re-natal use-figwheel \
		&& rlwrap lein figwheel ${PLATFORM}

# Start the react-native webpack bundler
packager:
	react-native start

# Compile the project with xcode and run on the simulator
compile:
	react-native run-${PLATFORM}

test:
	lein doo node test auto

.PHONY: install link repl packager compile test
