#!/bin/bash

UNUSED_LIST="unused_files.txt"
BACKUP_DIR="../backup"

if [ ! -f "$UNUSED_LIST" ]; then
    echo "Unused files list ($UNUSED_LIST) not found. Run list_used_assets.sh first."
    exit 1
fi

echo "Moving unused files to $BACKUP_DIR..."

mkdir -p "$BACKUP_DIR"

moved_count=0

while IFS= read -r filepath || [ -n "$filepath" ]; do
    if [ -z "$filepath" ] || [ ! -f "$filepath" ]; then
        continue
    fi
    
    # Recreate the directory structure under backup/
    # filepath is e.g. ../uploads/2025/01/img.png -> rel_path is 2025/01/img.png
    rel_path="${filepath#../uploads/}"
    dest_path="$BACKUP_DIR/$rel_path"
    dest_dir=$(dirname "$dest_path")
    
    # Create target directory structure and move the file
    mkdir -p "$dest_dir"
    mv "$filepath" "$dest_path"
    echo "Moved: $filepath -> $dest_path"
    moved_count=$((moved_count + 1))
done < "$UNUSED_LIST"

echo "-----------------------------------"
echo "Backup complete."
echo "Total unused files moved: $moved_count"
echo "All backup files are stored in: $BACKUP_DIR"
echo "-----------------------------------"
