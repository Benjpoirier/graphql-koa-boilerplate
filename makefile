
POSTGRES_USER ?= postgres
POSTGRES_HOST ?= 127.0.0.1
POSTGRES_PORT ?= 5432

regenerate-db:
	$(MAKE) drop-database
	$(MAKE) create-database

drop-database:
	@echo "API - Drop database"
	@dropdb -U ${POSTGRES_USER} -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} boilerplate || true

create-database:
	@echo "API - Create database"
	@createdb -U ${POSTGRES_USER} -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} boilerplate || true
	@psql -U ${POSTGRES_USER} -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} -d boilerplate -c "create extension if not exists unaccent"


