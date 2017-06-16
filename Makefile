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
start:
	react-native start

# Compile the project with xcode and run on the simulator
run:
	react-native run-${PLATFORM}

test:
	lein doo node test once

.PHONY: install link repl start run test
