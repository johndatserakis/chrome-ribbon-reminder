#!/bin/sh

rm ribbon-reminder.zip
rm -rf dist
yarn build
cd dist
zip ../ribbon-reminder.zip -r .
cd ..
