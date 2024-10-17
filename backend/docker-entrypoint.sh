#!/bin/bash

# Wait for MySQL to be ready
echo "Waiting for MySQL..."
RETRIES=10
while ! mysqladmin ping -h"$DB_HOST" --silent; do
    echo "MySQL is unavailable - waiting..."
    sleep 5
    ((RETRIES--))
    if [ $RETRIES -le 0 ]; then
        echo "MySQL did not become available in time. Exiting."
        exit 1
    fi
done

# Run migrations and seed the database
php artisan migrate:fresh --seed

# Start Laravel development server
php artisan serve --host=0.0.0.0 --port=8000
