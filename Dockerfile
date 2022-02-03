FROM python:3.8

WORKDIR /app

COPY index*.html .docker/

RUN  pip install django

COPY . .



