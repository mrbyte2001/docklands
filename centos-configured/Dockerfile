FROM centos:7
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image for all docklands images"
RUN yum update -y \
  && yum -y install unzip \
  && yum -y install openssl \
  && yum clean all
