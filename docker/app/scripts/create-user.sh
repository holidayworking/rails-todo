#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

USERNAME=${1:-"app"}
USER_UID=${2:-"automatic"}
USER_GID=${3:-"automatic"}

if [ "${USER_GID}" = "automatic" ]; then
  groupadd "$USERNAME"
else
  groupadd --gid "$USER_GID" "$USERNAME"
fi

if [ "${USER_UID}" = "automatic" ]; then
  useradd --gid "$USERNAME" --create-home "$USERNAME"
else
  useradd --uid "$USER_UID" --gid "$USERNAME" --create-home "$USERNAME"
fi
