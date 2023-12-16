docker build --no-cache -f SQL\Dockerfile.PostgreSql -t lubl/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t lubl/app ../..
