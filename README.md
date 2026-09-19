# aiwhead

## Section 1 — Command Description

`aiwhead.js` is a Node.js tool that combines the `grep` and `head` commands. It searches a file for a pattern and prints only the first 10 lines that contain that pattern.

To run the program, use:

`node aiwhead.js <Pattern> <filename>`

For example:

`node aiwhead.js "ERROR" server.log`

The program reads the file using `fs.readFileSync()` and splits the file into separate lines using `.split('\n')`. It checks each line using `.includes(pattern)`. If a line contains the pattern, it is printed to the console. Lines that do not contain the pattern are ignored.

The program keeps track of how many matching lines have been printed. Once it prints 10 matching lines, it stops. This combines `grep`, which searches for matching lines, with `head`, which limits the output to the first 10 results.

If the user forgets to enter a pattern or filename, the program displays a "Missing argument" message and shows how to use the command.

## Section 2 — AI-Assisted Programming

I used AI to help me understand how to build, fix, and test my program. I asked AI about `process.argv`, reading files in Node.js, searching each line for a pattern, and limiting the results to the first 10 matches.

AI helped me understand what each `process.argv` index contained and how to use `fs.readFileSync()` to read the file. It also helped me understand how to use `.includes(pattern)` to find matching lines and how to stop the loop after 10 matches.

I still had to test the program myself and check if the output was correct. Testing different patterns helped me notice when the program was printing the whole file instead of only the matching lines. I also had to make sure the program correctly combined the `grep` and `head` features.

AI did not get everything right at first. Some earlier versions had the pattern and filename mixed up or used the wrong file-reading method. I had to test the suggestions, find the problems, and make changes until the program worked correctly. AI also suggested testing cases I had not thought of, such as missing arguments or searching for a pattern that is not in the file.
