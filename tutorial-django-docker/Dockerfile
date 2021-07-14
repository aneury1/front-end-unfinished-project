FROM python:3
ENV PYTHONBUFFERED=1
WORKDIR /usr/src/app
RUN mkdir /usr/src/app/django
COPY requirements.txt ./
# RUN pip unistall django
RUN pip install -r requirements.txt
