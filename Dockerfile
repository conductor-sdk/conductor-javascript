FROM proget.bdreporting.com/blackdiamond/library/bd-nodejs-lts:14.16.1

WORKDIR /package

ARG PKG_VER
ARG NPM_USR
ARG NPM_PSW


# Assert All variables are assigned
RUN [ ! -z "${NPM_USR}" ] & \
    [ ! -z "${NPM_PSW}" ] & \
    [ ! -z "${PKG_VER}" ]

COPY ./.yarnrc ./yarn.lock ./package.json ./

RUN yarn install

COPY ./ ./

RUN yarn version --new-version ${PKG_VER} --no-git-tag-version

#  must use npm https://github.com/yarnpkg/yarn/pull/5812#issuecomment-467920634
RUN npm config set ${NPM_USR} ${NPM_PSW}
RUN yarn config list
RUN yarn publish --non-interactive --verbose