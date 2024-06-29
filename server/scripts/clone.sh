#!/bin/bash

if [[ -z "$1" ]]; then
  echo "Usage: $0 <repository_url> [<local_directory_name>]"
  exit 1
fi

repo_name=${1##*/}
if [[ -n "$2" ]]; then
  repo_name="$2"
fi

cd "$HOME/Desktop/WORKSPACE/hack/term/server/apps"
git clone "$1" "$repo_name"

exit 0