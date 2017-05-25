FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

## prepare nightmare for linux headless
RUN apt-get update && \
    apt-get install -y libgtk2.0-0 libgconf-2-4 \
    libasound2 libxtst6 libxss1 libnss3 xvfb
RUN npm install segmentio/nightmare

# Start Xvfb
RUN Xvfb -ac -screen scrn 1280x2000x24 :9.0 &
RUN export DISPLAY=:9.0

RUN mkdir /app
COPY . /app
RUN rm -rf /app/node_modules

WORKDIR /app
RUN yarn

CMD yarn test-docker
