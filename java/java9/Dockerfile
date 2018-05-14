FROM airhacks/centos
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image for all docklands images"
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \     
  && curl -O https://download.java.net/java/GA/jdk9/9.0.4/binaries/openjdk-9.0.4_linux-x64_bin.tar.gz \
  && tar xvf openjdk-9.0.4_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-9.0.4_linux-x64_bin.tar.gz \  
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-9.0.4
ENV PATH "$PATH":/${JAVA_HOME}/bin:.: