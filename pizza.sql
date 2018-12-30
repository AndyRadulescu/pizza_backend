create table if not exists table_name
(
	uuid varchar(500) not null
		constraint table_name_pk
			primary key,
	name varchar(250) not null,
	description varchar(500),
	price double precision not null,
	user_uuid varchar(500),
	toppings varchar(1000)
);

alter table table_name owner to postgres;

create unique index if not exists table_name_uuid_uindex
	on table_name (uuid);

create table if not exists souce
(
	id serial not null
		constraint souce_pk
			primary key,
	name varchar(255) not null,
	quantity integer not null,
	pizza_uuid varchar(500)
);

alter table souce owner to postgres;

create unique index if not exists souce_id_uindex
	on souce (id);

create table if not exists "user"
(
	uuid integer not null
		constraint user_pk
			primary key,
	name varchar(255) not null,
	email varchar(500) not null,
	phone varchar(500) not null,
	password varchar(500) not null,
	token varchar(1000) not null
);

alter table "user" owner to postgres;

create unique index if not exists user_uuid_uindex
	on "user" (uuid);

