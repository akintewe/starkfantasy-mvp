#!/bin/bash
export SCARB=~/.scarb-versions/scarb-2.9.2/bin/scarb
export PATH=~/.scarb-versions/scarb-2.9.2/bin:$PATH
echo "Using Scarb version:"
~/.scarb-versions/scarb-2.9.2/bin/scarb --version
echo -e "
Running tests..."
sozo test
