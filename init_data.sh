#!/usr/bin/env bash

dataDir="data"
songs="${dataDir}/songs.json"
exercises="${dataDir}/exercises.json"
sessions="${dataDir}/sessions.json"
replace="s,\s\s\s\s,\t,g"

echo_file_exists () {
	echo "File '$1' already exists"
}

if [ ! -d "$dataDir" ]; then
	mkdir "$dataDir"
fi

# Every heredoc is made with '<<- EOF', which means it will ignore
# all leading tab characters. Hence within each if block, the indentation
# is done with 4 space characters. These are later replaced by a tab character
# using sed, and then written to the file.

# init songs.json
if [ ! -f "$songs" ]; then
	cat <<- EOF | sed "$replace" > "$songs"
	[
	    {
	        "name": "...",
	        "artist": "...",
	        "type": "..."
	    }
	]
	EOF
else
	echo_file_exists "$songs"
fi

# init exercises.json
if [ ! -f "$exercises" ]; then
	cat <<- EOF | sed "$replace" > "$exercises"
	[
	    {
	        "name": "...",
	        "teacher": "...",
	        "source": "...",
	        "type": "...",
	        "difficulty": "..."
	    }
	]
	EOF
else
	echo_file_exists "$exercises"
fi

# init sessions.json
if [ ! -f "$sessions" ]; then
	cat <<- EOF | sed "$replace" > "$sessions"
	[]
	EOF
else
	echo_file_exists "$sessions"
fi

echo "Your data files have been initialised."

read -p "Do you also wish to back up your data? (yes/no) " res
while true
do
	case $res in
		[Yy]* )
			./create_backup.sh
			exit;;
		[Nn]* )
			exit;;
		* )
			read -p "It's a yes/no question. " res;;
	esac
done
