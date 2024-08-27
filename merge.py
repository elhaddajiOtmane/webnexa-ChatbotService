import os

def merge_files(src_folder, output_file):
    with open(output_file, 'w') as outfile:
        for root, dirs, files in os.walk(src_folder):
            for file in files:
                if file.endswith('.js') and file != 'combined.js':
                    file_path = os.path.join(root, file)
                    print(f"Merging {file_path}...")  # Log the file being processed
                    try:
                        with open(file_path, 'r') as infile:
                            outfile.write(f"\n// Start of {file_path}\n")
                            outfile.write(infile.read())
                            outfile.write(f"\n// End of {file_path}\n")
                    except Exception as e:
                        print(f"Error reading {file_path}: {e}")

if __name__ == "__main__":
    src_folder = 'src'  # Ensure this path is correct
    output_file = 'combined.js'
    merge_files(src_folder, output_file)
    print(f"All JavaScript files from {src_folder} have been combined into {output_file}.")
