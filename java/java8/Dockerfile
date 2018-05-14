FROM airhacks/centos
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image for all docklands images"
RUN yum update -y \
  && yum -y install java-1.8.0-openjdk-devel \
  && yum clean all
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
