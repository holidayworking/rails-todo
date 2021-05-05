FROM node:14.16.1-buster AS node

FROM ruby:3.0.1-buster AS builder

ARG BUNDLE_WITHOUT
ARG RAILS_ENV
ARG RAILS_MASTER_KEY

ENV BUNDLE_WITHOUT ${BUNDLE_WITHOUT}
ENV RAILS_ENV ${RAILS_ENV}
ENV RAILS_MASTER_KEY ${RAILS_MASTER_KEY}

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn-* /opt/yarn
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
  && ln -s /opt/yarn/bin/yarn /usr/local/bin/yarnpkg

WORKDIR /app

COPY Gemfile* /app

RUN bundle config --global frozen 1 \
  && bundle install --jobs 4 --retry 3 \
  && rm -rf /usr/local/bundle/cache/*.gem \
  && find /usr/local/bundle/gems/ -name "*.c" -delete \
  && find /usr/local/bundle/gems/ -name "*.o" -delete

COPY . /app

RUN bundle exec rails assets:precompile \
  && rm -rf node_modules

FROM ruby:3.0.1-slim-buster AS runner

ARG ADDITIONAL_PACKAGES
ARG USER_UID
ARG USER_GID=$USER_UID

ENV RAILS_LOG_TO_STDOUT true
ENV RAILS_SERVE_STATIC_FILES true

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn-* /opt/yarn
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
  && ln -s /opt/yarn/bin/yarn /usr/local/bin/yarnpkg

# hadolint ignore=DL3008,DL3059
RUN apt-get update && apt-get install --assume-yes --no-install-recommends \
  postgresql-client \
  $ADDITIONAL_PACKAGES \
  && rm -rf /var/lib/apt/lists/*

COPY docker/app/scripts /tmp/scripts
RUN /tmp/scripts/create-user.sh "${USERNAME}" "${USER_UID}" "${USER_GID}" \
  && rm -rf /tmp/scripts

USER app

COPY --from=builder --chown=app:app /app /app
COPY --from=builder --chown=app:app /usr/local/bundle /usr/local/bundle

WORKDIR /app

RUN mkdir node_modules

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "--binding", "0.0.0.0"]
