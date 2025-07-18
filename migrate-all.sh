#!/bin/bash

# Optional arg: migration name
MIGRATION_NAME=$1

# If not provided, generate one with timestamp
if [ -z "$MIGRATION_NAME" ]; then
  TIMESTAMP=$(date +"auto-%Y-%m-%d-%H-%M-%S")
  MIGRATION_NAME=$TIMESTAMP
  echo "⚠️ No migration name provided. Using auto-generated name: $MIGRATION_NAME"
fi

echo "🔍 Searching for schema.prisma files..."

# Find all schema.prisma files
find . -type f -name "schema.prisma" | while read schema; do
  dir=$(dirname "$schema")
  echo "📦 Found schema in $dir"

  # Go into the folder, run migrate + generate
  (
    cd "$dir" || exit
    echo "🚀 Running migration in $dir"
    npx prisma migrate dev --name "$MIGRATION_NAME"

    echo "⚙️ Running prisma generate in $dir"
    npx prisma generate
  )
done
