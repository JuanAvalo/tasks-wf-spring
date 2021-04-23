FROM openjdk:13-jdk-alpine
ARG JAR_FILE=target/*.jar
LABEL Juan Avalo
COPY target/tasks-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]