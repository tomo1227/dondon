FROM node:lts-buster-slim

WORKDIR /dondon

COPY ./package*.json ${WORKDIR}/
COPY ./yarn.lock ${WORKDIR}/

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt-get", "install", "-y", "curl"]

COPY . ${WORKDIR}/

RUN ["yarn", "install", "--frozen-lockfile"]
CMD ["yarn", "dev"]
