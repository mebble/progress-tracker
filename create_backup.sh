#!/usr/bin/env bash

dataDir="data"
backupDir="${dataDir}.backup"

if [ ! -d "$dataDir" ]; then
	mkdir "$dataDir"
fi

if [ ! -d "$backupDir" ]; then
	mkdir "$backupDir"
fi

for filePath in "$dataDir"/*
do
	fileName=$(basename "$filePath")
	name="${fileName%.*}"
	extension="${fileName#*.}"

	cp "$filePath" "${backupDir}/${name}.backup.${extension}"
done
echo "Your data files have been backed up."
