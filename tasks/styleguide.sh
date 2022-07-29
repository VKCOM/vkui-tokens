#!/bin/sh

git clone --branch SevereCloud/demo/paradigmBase --single-branch --depth 1 https://github.com/VKCOM/VKUI.git
cd VKUI
git checkout .
git pull
yarn install
yarn add @vkontakte/vkui-tokens@file:../dist -d
yarn styleguide
