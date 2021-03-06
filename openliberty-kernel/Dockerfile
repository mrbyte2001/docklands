FROM airhacks/java8
LABEL maintainer="Tobias N. Sasse, @tnsasse and Adam Bien, adam-bien.com and Dirk Dreyer-Hochstein, @mrbyte2001" description="OpenLiberty Kernel"
ENV RELEASE 2018-03-09_2209
ENV VERSION 18.0.0.1
ENV INSTALL_DIR /opt/ibm

# Download OpenLiberty
ENV OPENLIBERTY_HOME ${INSTALL_DIR}/openliberty-${VERSION}
ENV DEPLOYMENT_DIR ${OPENLIBERTY_HOME}/standalone/deployments/
RUN curl -O https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/release/${RELEASE}/openliberty-${VERSION}.zip \
    && unzip openliberty-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm openliberty-${VERSION}.zip
ENV PATH=/opt/ibm/wlp/bin:$PATH

# Set Path Shortcuts
ENV LOG_DIR=/logs \
    WLP_OUTPUT_DIR=/opt/ibm/wlp/output

RUN mkdir /logs \
    && ln -s $WLP_OUTPUT_DIR/defaultServer /output \
    && ln -s /opt/ibm/wlp/usr/servers/defaultServer /config

# Configure WebSphere Liberty
RUN /opt/ibm/wlp/bin/server create \
    && rm -rf $WLP_OUTPUT_DIR/.classCache /output/workarea
COPY docker-server /opt/ibm/docker/
RUN chmod a+x /opt/ibm/docker/docker-server

EXPOSE 9080 9443

CMD ["/opt/ibm/docker/docker-server", "run", "defaultServer"]
