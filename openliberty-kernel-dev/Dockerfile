FROM airhacks/java:1.8
LABEL maintainer="Adam Bien, adam-bien.com" description="OpenLiberty Kernel Development Builds"
ENV RELEASE 2018-05-10_2234
ENV VERSION 20180510-2100
ENV INSTALL_DIR /opt

# Download OpenLiberty
ENV OPENLIBERTY_HOME ${INSTALL_DIR}/openliberty-${VERSION}
ENV DEPLOYMENT_DIR ${OPENLIBERTY_HOME}/standalone/deployments/
RUN curl -O https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/nightly//${RELEASE}/openliberty-all-${VERSION}.zip \
    && unzip openliberty-all-${VERSION}.zip -d ${INSTALL_DIR}/ \
    && rm openliberty-all-${VERSION}.zip
ENV CONFIG ${INSTALL_DIR}/wlp/usr/servers/defaultServer/
EXPOSE 9080 9443
ENTRYPOINT /opt/wlp/bin/server run defaultServer



