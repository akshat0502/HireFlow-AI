# Base Image
FROM eclipse-temurin:21-jdk

# Working Directory
WORKDIR /app

# Copy generated jar
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose application port
EXPOSE 8080

# Start Spring Boot
ENTRYPOINT ["java","-jar","app.jar"]