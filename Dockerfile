FROM node:18 AS frontend-builder

WORKDIR /app/web
COPY web/package.json web/package-lock.json ./
RUN npm ci

COPY web ./
RUN npm run build

FROM python:3.9

WORKDIR /app

COPY --from=frontend-builder /app/web/dist /app/web/dist
COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY . /app

#CMD ["fastapi", "run", "cmd/service.py", "--port", "8000", "--proxy-headers"]
