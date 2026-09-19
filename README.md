# aiwgrep

## Section 1 — Command Description

`aiwgrep.js` is a simple version of the `grep` command made with Node.js. It reads a file and prints the lines that contain a pattern entered by the user.

To run the program, use:

`node aiwgrep.js <Pattern> <filename>`

For example:

`node aiwgrep.js "ERROR" server.log`

The script reads the file using `fs.readFileSync()` and splits the content into separate lines using `.split('\n')`. It then checks each line using `.includes(pattern)`. If a line contains the pattern, it is printed to the console. Lines that do not contain the pattern are ignored.

This tool combines the idea of reading a file, similar to `cat`, with searching for a pattern, like `grep`.

If the user forgets to enter a pattern or filename, the program displays a "Missing argument" message and shows how to use the command. If the pattern is not found, the program does not crash and simply prints nothing.

## Section 2 — AI-Assisted Programming

I used AI to help me understand how to build and test my command. I asked AI about using `process.argv`, reading files with Node.js, and checking each line for a pattern.

AI helped me understand what each `process.argv` index contained and why some of my file-reading methods were not working. It also suggested different cases to test, such as running the program without arguments or searching for a pattern that does not exist in the file.

I still had to test the program myself and figure out whether the output was correct. Testing different patterns helped me notice that one version of my program was printing the entire file instead of only the matching lines.

AI also did not get everything right at first. Some earlier versions had the pattern and filename mixed up or used the wrong file-reading method. I had to test the suggestions, find these problems, and make changes until the program worked correctly.
