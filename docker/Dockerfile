FROM bitnami/laravel:latest

# Install mysql client
RUN install_packages mysql-client

# Copy the docker-entrypoint.sh from the backend folder
COPY backend/docker-entrypoint.sh /app/

# Make the script executable
RUN chmod +x /app/docker-entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/app/docker-entrypoint.sh"]
