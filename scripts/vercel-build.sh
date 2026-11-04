#!/bin/sh
set -eu

if [ "${VCWS_DEPLOY_TARGET:-}" = "eco2zero" ]; then
  pnpm --filter @vcws/eco2zero-web build
  rm -rf .next public
  cp -R apps/eco2zero-web/.next .next
  cp -R apps/eco2zero-web/public public
else
  pnpm --filter @vcws/web build
  rm -rf .next public
  cp -R apps/web/.next .next
  cp -R apps/web/public public
fi
